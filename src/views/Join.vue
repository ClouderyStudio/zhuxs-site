<template>
	<div page>
		<banner :bg="'https://a.cldery.com/d/oss/mcweb/assets/images/2.jpg'">
			<template #title> 加入竹像素</template>
			<template #subtitle> 立即开始 </template>
			<template #text> 在这里了解怎样立即加入我们 </template>
		</banner>
		<div class="container">
			<div class="join content">
				<h1 class="primary-text">立即加入 竹像素</h1>
				<p class="typo"><strong>加入 QQ 交流群</strong>&emsp;我们的交流与讨论主要在 QQ
					群内进行，我们强烈建议你加入~在这里你可以获取到第一手信息，获取帮助，并且可以参与到每周目的投票过程中。单击下方加群按钮可快速入群，或者搜索群号 806901461
					亦可入群。<em>提示：入群不需要白名单。</em></p>
				<p class="typo">
					<strong>加入服务器</strong>&emsp;服务器暂时没有白名单系统。JE玩家可以直接通过IP: mc.mczxs.cn 加入。如果你是基岩版玩家，可以直接点击下面的卡片自动添加服务器。
				</p>
				<div class="join-cards">
					<a class="join-card qq" href="https://qm.qq.com/q/ZqrVw1ePU6" target="_blank">
						<mdicon name="arrow-right" />
						<img src="https://a.cldery.com/d/oss/mcweb/assets/tencent-qq.svg" />
						<div class="text">
							<h1>QQ 讨论群</h1>
							<h2>点击加入，或搜索群号 806901461</h2>
						</div>
					</a>
					<a class="join-card joinmc" href="minecraft://?addExternalServer=竹像素|mc.mczxs.cn:23099"
						target="_blank">
						<mdicon name="arrow-right" />
						<img src="https://ccvaults.com/assets/20.%20Blocks/18.%20Decoration/Grass_Block.png" />
						<div class="text">
							<h1>一键加入</h1>
							<h2>如果你是基岩版玩家，可以点击此按钮自动添加服务器</h2>
						</div>
					</a>
				</div>
				<p class="typo">加入以后，请先认真阅读<strong>置顶群公告</strong>中的内容，这将指导你进行下一步操作。</p>
				<p class="typo">
					如果你对服务器玩法有些生疏、不知道如何开始，或者有其它问题，你可以选择在<strong>群聊里询问</strong>或者阅读我们编写的<strong><a target="_blank"
							href="https://doc.cldery.com/game/mc">知识库</a></strong>，上面归纳了大家觉得有用的要点，这本书由所有人一起编写，为了让你更快地解决问题
					:)
				</p>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Banner from '@/components/Banner.vue';

import { isPCSize } from '@/fn';

export default defineComponent({
	components: {
		Banner
	},
	methods: {
		isPCSize
	}
});
</script>

<style lang="less" scoped>
.join {
	.join-cards {
		margin: 16px 0;
		display: flex;
		align-items: stretch;

		@media (max-width: 1000px) {
			flex-direction: column;
		}

		.join-card {
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

.hero-box {
	p {
		color: @textlightgray;
		max-width: 600px;
		display: block;
		margin: auto;
	}

	margin-bottom: 64px;
	text-align: center;
}

.features {
	.feature-box {
		display: flex;

		@media (min-width: 1000px) {
			align-items: stretch;
		}

		@media (max-width: 1000px) {
			flex-direction: column;
		}
	}
}

.features {
	display: flex;
	flex-direction: column;

	.feature {
		@media (min-width: 1000px) {
			width: 33.333%;
			margin: 0 8px;
		}

		@media (max-width: 1000px) {
			margin: 8px 0;
		}

		text-shadow: @shadowlightx;
		box-shadow: @shadowlightx;

		&.black {
			background: #212121;
		}

		&.primary {
			background: @primaryg;

			p {
				color: @textlightgray;
			}
		}

		&.white {
			h1 {
				text-shadow: none;
				background: @primaryg;
				background-clip: text;
				color: transparent;
				display: inline-block;
			}

			p {
				color: @textlightgray;

				strong {
					color: @textgray;
				}
			}

			.mdi {
				svg {
					fill: @textgray;
				}
			}

			span {
				color: @textgray;
			}
		}

		&:first-child {
			margin-left: 0;
		}

		&:last-child {
			margin-right: 0;
		}

		border-radius: 12px;
		color: white;
		padding: 32px;

		h1 {
			margin-top: 0;
			margin-bottom: 8px;
			font-size: 40px;
		}

		p {
			font-size: 18px;
			z-index: 2;
		}

		overflow: hidden;

		.mdi {
			opacity: 0.4;
			position: absolute;
			right: 64px;
			bottom: 64px;
			transition: all 0.2s ease;
			z-index: 1;
			width: 24px;
			height: 24px;
			transform: scale(10);
		}

		position: relative;

		&:hover {
			.mdi {
				opacity: 0.7;
			}
		}

		>span:not(.mdi) {
			.monospace;
			position: absolute;
			opacity: 0.3;
			right: 32px;
			top: 32px;
		}

		opacity: 0;
	}
}
</style>