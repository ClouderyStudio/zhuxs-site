<template>
  <div page>
    <banner v-bind:bg="articleInfo.banner">
      <template #title>{{ articleInfo.title }}</template>
      <template #subtitle>{{ articleInfo.subtitle }}</template>
      <template #text>
        {{ articleInfo.description }}<br />
      </template>
    </banner>
    
    <div class="article-meta" v-if="articleInfo">
      <span class="date">发布日期: {{ formatDate(articleInfo.published) }}</span>
      <span class="category" v-if="articleInfo.category">分类: {{ articleInfo.category }}</span>
      <span class="tags" v-if="articleInfo.tags">
        标签: 
        <span v-for="tag in articleInfo.tags" :key="tag" class="tag">
          {{ tag }}
        </span>
      </span>
    </div>
    
    <div class="container content">
      <div v-if="loading" class="loading">加载中...</div>
      <div v-else-if="error" class="error">{{ error }}</div>
      <div v-else v-html="mdcontent" class="typo"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Banner from '@/components/Banner.vue';
import MarkDownIt from 'markdown-it';
import frontMatter from 'front-matter'

const md = new MarkDownIt({
  html: true,
  linkify: true,
  typographer: true
}).use(require('markdown-it-anchor').default)
  .use(require('markdown-it-table-of-contents'));

md.renderer.rules.heading_open = (tokens: any[], idx: number, options: any, env: any, self: any): string => {
  const token = tokens[idx];
  
  if (token.tag === 'h2') {
    token.attrJoin('class', 'primary-text');
  }
  
  return self.renderToken(tokens, idx, options);
};

interface ArticleInfo {
  title?: string;
  subtitle?: string;
  description?: string;
  banner?: string;
  published?: string;
  tags?: string[];
  category?: string;
  [key: string]: any;
}

export default defineComponent({
  props: {
    title: {
      type: String
    }
  },
  components: {
    Banner
  },
  data() {
    return {
      mdcontent: '',
      articleInfo: {} as ArticleInfo,
      loading: true,
      error: ''
    };
  },
  computed: {
    articleName(): string {
      return this.title || this.$route.params.title?.toString() || '';
    }
  },
  watch: {
    articleName: {
      handler(newName) {
        if (newName) {
          this.loadArticle(newName);
        }
      },
      immediate: true
    }
  },
  methods: {
    formatDate(dateStr?: string): string {
      if (!dateStr) return '未知';
      try {
        const date = new Date(dateStr);
        return date.toLocaleDateString('zh-CN', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });
      } catch {
        return dateStr;
      }
    },
    
    async loadArticle(name: string) {
      if (!name) {
        this.error = '请指定文章名称';
        this.loading = false;
        return;
      }
      
      this.loading = true;
      this.error = '';
      
      try {
        const module = await import(`@/articles/${name}.md`);

        const { attributes, body } = frontMatter(module.default);
        
        // @ts-ignore
        // 保存 frontmatter 数据
        this.articleInfo = attributes;
        
        // @ts-ignore
        // 检查是否是草稿
        if (attributes.draft === true) {
          this.error = '这篇文章尚未发布';
          this.loading = false;
          return;
        }
        
        // 渲染 markdown 内容
        this.mdcontent = md.render(body);
        
        // @ts-ignore
        // 更新页面标题
        if (attributes.title) {
          // @ts-ignore
          document.title = `${attributes.title} - 竹像素`;
        }
        
      } catch (error) {
        console.error('加载文章失败:', error);
        this.error = `文章 "${name}" 不存在或加载失败`;
        this.mdcontent = '';
        this.articleInfo = {};
      } finally {
        this.loading = false;
      }
    }
  }
});
</script>

<style lang="less" scoped>
.article-meta {
  max-width: 800px;
  margin: 20px auto;
  padding: 15px;
  background: #f8f9fa;
  border-radius: 8px;
  color: #666;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  
  .date, .category, .tags {
    display: inline-flex;
    align-items: center;
  }
  
  .tag {
    background: #e9ecef;
    padding: 2px 8px;
    border-radius: 4px;
    margin-left: 6px;
    font-size: 0.9em;
    
    &:first-child {
      margin-left: 0;
    }
  }
}

.loading, .error {
  text-align: center;
  padding: 50px;
  color: #999;
}

.error {
  color: #dc3545;
}

.container {
  margin-bottom: 64px;
}
</style>