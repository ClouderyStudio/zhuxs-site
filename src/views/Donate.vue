<template>
	<div page>
		<banner :bg="'/assets/images/7.jpg'">
			<template #title> 捐助竹像素</template>
			<template #subtitle> 帮助我们持续运行 </template>
			<template #text>竹像素当前没有任何盈利项目，但接受无偿捐助，这能够维持竹像素的运行，也是竹像素的唯一收入。<br />你可以在本页面查看竹像素的资金运转情况和过往捐赠者信息。 </template>
		</banner>
		<div class="container">
			<div class="content typo">
				<h1 class="primary-text">BT4 及以后周目资金使用原理</h1>
				<p>
					当前主要的开销来源于<strong>VPS的租借费用</strong>。正如你所能看到的那样，高的配置必然与高的成本相联系。我们竭尽全力使得VPS能够为 Minecraft 游戏体验提供一定的优势。竹像素当前没有商业化的计划。
				</p>
				<p>
					<strong>如果你能够捐助一定的金额来帮助我们走下去，我们不胜感激。</strong>
				</p>
				<h1 class="primary-text">如何捐助</h1>
				<p>免责声明：<strong>未满 18 岁的未成年人请在家长同意后进行捐助，竹像素从未教唆未成年人「为游戏充值」。捐助即代表你已经阅读并知晓该声明。</strong></p>
				<p>
					此处提供爱发电链接，如需其它支付方式（如直接支付，不支持 QQ 支付）可联系服主。若要捐助，直接在爱发电中捐助即可，<strong>请注意备注你的 Minecraft 用户名</strong>，以便我们写入鸣谢名单（低于
					<span class="money">￥5</span>
					的款项恕不写入）。支持
					<strong>5 天无理由全额退款</strong>，超过 5 天若仍因某些原因仍需退款可联系服主。
				</p>
				<div class="pay">
					<div class="donate-cards">
						<a class="donate-card afdian" href="https://afdian.tv/a/zhuxs" target="_blank">
							<mdicon name="arrow-right" />
							<img src="https://static.afdiancdn.com/static/img/logo/logo.png" />
							<div class="text">
								<h1>爱发电</h1>
								<h2>点击跳转至官方爱发电</h2>
							</div>
						</a>
					</div>
				</div>
				<h1 class="primary-text">感谢捐助</h1>
				<p>感谢这些人的无偿捐助，帮助了竹像素发展和维持运行。排名使用洗牌算法随机排列，刷新页面可重排。</p>
				<p><strong>不一定完全准确统计。</strong>若有遗漏或数目不对，请联系服主。</p>
				<p>（BT4 前）</p>
				<ul>
					<li v-for="(x, i) in shuffle(donators)" :key="i">
						{{ x.name }} —
						<span class="money">￥{{ x.amount }}</span>
					</li>
				</ul>
				<p>（BT4 及以后）</p>
				<ul>
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
import { defineComponent } from 'vue';
import Banner from '@/components/Banner.vue';

export default defineComponent({
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
	.donate-cards {
		margin: 16px 0;
		display: flex;
		align-items: stretch;
		@media (max-width: 1000px) {
			flex-direction: column;
		}

		.donate-card {
			@media (min-width: 1000px) {
				width: 50%;
			}
			@media (max-width: 1000px) {
				margin: 8px 0;
			}

			.link-card;
		}
	}
}

</style>
