<template>
	<div page>
		<banner bg="https://oss.cldery.com/mcweb/assets/images/10.png">
			<template #title>竹像素 服规</template>
			<template #subtitle>服务器规则</template>
			<template #text
				>在这里了解有关 竹像素 的玩家和管理员守则<br
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
    html: true,
    linkify: true,
    typographer: true
}).use(require("markdown-it-anchor").default).use(require("markdown-it-table-of-contents"));

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