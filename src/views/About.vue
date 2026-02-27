<template>
	<div page>
		<banner bg="/assets/images/6.jpg">
			<template #title>关于 竹像素</template>
			<template #subtitle>了解更多</template>
			<template #text
				>在这里了解有关 竹像素 本身以及此网站的内容<br
			/></template>
		</banner>
		<div class="container content">
			<h1 class="primary-text">关于 竹像素</h1>
			<p class="typo">
				<strong>竹像素</strong> 是一个基于 Minecraft 的多人游戏服务器，旨在为玩家提供一个友好、开放和有趣的游戏环境。我们欢迎所有热爱 Minecraft 的玩家加入我们的社区，无论你是新手还是老玩家。
			</p>
			<p class="typo">
				本网站旨在为玩家提供有关 竹像素 的信息，包括服务器规则、加入方式、常见问题解答等。我们希望通过这个平台，让更多的玩家了解并参与到 竹像素 的世界中来。
			</p>
			<p class="typo">
				如果你对 竹像素 有任何疑问或建议，欢迎通过 QQ 群与我们联系，我们会尽快回复你。
			</p>
			<h1 class="primary-text">历史走向正在施工中......</h1>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Banner from '@/components/Banner.vue';
export default defineComponent({
	components: {
		Banner
	},
});
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