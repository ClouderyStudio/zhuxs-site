<template>
	<div page>
		<banner :bg="'https://oss.cldery.com/mcweb/assets/images/7.jpg'">
			<template #title> 捐助 竹像素 </template>
			<template #subtitle> 帮助我们持续运行 </template>
			<template #text> 竹像素 当前没有任何盈利项目，但接受无偿捐助，这能够维持 竹像素 的运行，也是 竹像素 的唯一收入。<br />你可以在本页面查看 竹像素 的资金运转情况和过往捐赠者信息。 </template>
		</banner>
		<div class="container">
			<div class="content typo">
				<h1 v-view.once="flowUp" class="primary-text">BT4 及以后周目资金使用原理</h1>
				<p v-view.once="flowUp">
					当前主要的开销来源于<strong>VPS的租借费用</strong>。正如你所能看到的那样，高的配置必然与高的成本相联系。我们竭尽全力使得VPS能够为 Minecraft 游戏体验提供一定的优势。竹像素 当前没有商业化的计划。
				</p>
				<p v-view.once="flowUp">
					<strong>如果你能够捐助一定的金额来帮助我们走下去，我们不胜感激。</strong>
				</p>
				<h1 v-view.once="flowUp" class="primary-text">如何捐助</h1>
				<p v-view.once="flowUp">免责声明：<strong>未满 18 岁的未成年人请在家长同意后进行捐助，竹像素 从未教唆未成年人「为游戏充值」。捐助即代表你已经阅读并知晓该声明。</strong></p>
				<p v-view.once="flowUp">
					此处提供支付宝和微信支付的二维码，如需其它支付方式（不支持 QQ 支付）可联系服主。若要捐助，扫描二维码即可，付款时<strong>请备注你的 Minecraft 用户名</strong>，以便我们写入鸣谢名单（低于
					<span class="money">￥5</span>
					的款项恕不写入）。支持
					<strong>5 天无理由全额退款</strong>，超过 5 天若仍因某些原因仍需退款可联系服主。
				</p>
				<div v-view.once="flowUp" class="pay">
					暂时不接受捐助
				</div>
				<h1 v-view.once="flowUp" class="primary-text">感谢捐助</h1>
				<p v-view.once="flowUp">感谢这些人的无偿捐助，帮助了 竹像素 发展和维持运行。排名使用洗牌算法随机排列，刷新页面可重排。</p>
				<p v-view.once="flowUp"><strong>不一定完全准确统计。</strong>若有遗漏或数目不对，请联系服主。</p>
				<p v-view.once="flowUp">（BT4 前）</p>
				<ul v-view.once="flowUp">
					<li v-for="(x, i) in shuffle(donators)" :key="i">
						{{ x.name }} —
						<span class="money">￥{{ x.amount }}</span>
					</li>
				</ul>
				<p v-view.once="flowUp">（BT4 及以后）</p>
				<ul v-view.once="flowUp">
					<li v-for="(x, i) in shuffle(donatorNew)" :key="i">
						{{ x.name }} —
						<span class="money">￥{{ x.amount }}</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Banner from '@/components/Banner.vue';
import { flowUp } from '@/fn';

export default Vue.extend({
	components: {
		Banner
	},
	data() {
		return {
			donators: [
				// Format: { name: 'string', amount: int }
			],
			donatorNew: []
		};
	},
	methods: {
		flowUp,
		shuffle(array: Array<any>) {
			var m = array.length,
				t,
				i;
			while (m) {
				i = Math.floor(Math.random() * m--);
				t = array[m];
				array[m] = array[i];
				array[i] = t;
			}
			return array;
		}
	}
});
</script>

<style lang="less" scoped>
.pay {
	display: flex;
	align-items: center;
	justify-content: center;
	img {
		margin: 0 8px;
		height: 300px;

		@media (max-width: 800px) {
			height: 200px;
		}
	}
}
</style>
