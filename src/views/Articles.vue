<template>
  <div page>
    <banner bg="https://oss.cldery.com/mcweb/assets/images/12.png">
      <template #title>所有文章</template>
      <template #subtitle>按发布时间排序</template>
      <template #text>点击文章标题查看详情</template>
    </banner>

    <div class="container">
      <div class="articles-list">
        <div v-if="loading" class="loading">加载中...</div>
        <div v-else>
          <div v-if="articles.length === 0" class="empty">暂无文章</div>
          <ul>
            <li v-for="a in articles" :key="a.name" class="article-item">
              <router-link :to="{ path: '/article', query: { title: a.name } }">
                <h3>{{ a.title || a.name }}</h3>
              </router-link>
              <div class="meta">
                <span class="date">{{ formatDate(a.published) }}</span>
                <span v-if="a.category" class="category"> · {{ a.category }}</span>
              </div>
              <p class="desc">{{ a.description }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Banner from '@/components/Banner.vue';
import matter from 'gray-matter';

interface ArticleMeta {
  name: string;
  title?: string;
  description?: string;
  published?: string;
  category?: string;
  draft?: boolean;
}

export default Vue.extend({
  name: 'Articles',
  components: { Banner },
  data() {
    return {
      articles: [] as ArticleMeta[],
      loading: true
    };
  },
  created() {
    this.loadAll();
  },
  methods: {
    formatDate(dateStr?: string) {
      if (!dateStr) return '未知';
      try {
        const d = new Date(dateStr);
        return d.toLocaleDateString('zh-CN');
      } catch {
        return dateStr;
      }
    },

    loadAll() {
      this.loading = true;
      try {
        const ctx = (require as any).context('@/articles', false, /\.md$/);
        const keys: string[] = ctx.keys();
        const list = keys.map((k: string) => {
          const mod = ctx(k);
          const file = mod && (mod.default || mod);
          const { data } = matter(file || '');
          const name = k.replace(/^\.\//, '').replace(/\.md$/, '');
          return Object.assign({ name }, data) as ArticleMeta;
        }).filter(a => !a.draft);

        list.sort((a, b) => {
          const da = a.published ? new Date(a.published).getTime() : 0;
          const db = b.published ? new Date(b.published).getTime() : 0;
          return db - da;
        });

        this.articles = list;
      } catch (e) {
        console.error('加载文章列表失败', e);
        this.articles = [];
      } finally {
        this.loading = false;
      }
    }
  }
});
</script>

<style lang="less" scoped>
.articles-list { max-width: 880px; margin: 24px auto; }
.article-item { padding: 16px 0; border-bottom: 1px solid #eee; }
.article-item h3 { margin: 0 0 8px; }
.meta { color: #888; font-size: 0.9em; margin-bottom: 8px; }
.desc { color: #555; margin: 0; }
.loading, .empty { text-align: center; padding: 40px; color: #999; }
</style>
