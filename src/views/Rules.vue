<template>
	<div page>
		<banner bg="https://oss.cldery.com/mcweb/assets/images/6.jpg">
			<template #title>关于 竹像素</template>
			<template #subtitle>了解更多</template>
			<template #text
				>在这里了解有关 竹像素 本身以及此网站的内容<br
			/></template>
		</banner>
		<div class="container content">
			<div v-html="mdcontent" class="typo"></div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Banner from '@/components/Banner.vue';
import MarkDownIt from 'markdown-it';
import rulesContent from '@/rules.md'
import { scaleIn, flowUp, flowLeft } from '@/fn';
export default Vue.extend({
	components: {
		Banner
	},
	methods: {
		scaleIn,
		flowUp,
		flowLeft
	},
	data(){
		return {
			mdcontent: md.render(rulesContent)
		};
	}
});
const md = new MarkDownIt({
    html: true,         // 允许HTML标签
    linkify: true,     // 自动转换URL为链接
    typographer: true   // 启用排版美化
});
md.renderer.rules.heading_open = (tokens: any[], idx: number, options: any, env: any, self: any): string => {
    const token = tokens[idx]
    if (token.tag === 'h1') {
    	return '<h1 class="primary-text" v-view.once="flowUp">'
    }
    return self.renderToken(tokens, idx, options)
}
</script>

<style lang="less" scoped>
.bad-design {
	width: 300px;
	display: block;
	margin-bottom: 32px;
}

.container {
	margin-bottom: 64px;
}
</style>