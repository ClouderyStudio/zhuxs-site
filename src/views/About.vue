<template>
	<div page>
		<banner bg="https://a.cldery.com/d/oss/mcweb/assets/images/6.jpg">
			<template #title>关于竹像素</template>
			<template #subtitle>了解更多</template>
			<template #text>在这里了解有关竹像素本身以及此网站的内容<br /></template>
		</banner>
		<div class="container content">
			<h1 class="primary-text">关于我们</h1>
			<p class="typo">
				<strong>竹像素</strong>是一个基于 Minecraft 的多人游戏服务器，旨在为玩家提供一个友好、开放和有趣的游戏环境。我们欢迎所有热爱 Minecraft
				的玩家加入我们的社区，无论你是新手还是老玩家。
			</p>
			<p class="typo">
				本网站旨在为玩家提供有关竹像素的信息，包括服务器规则、加入方式、常见问题解答等。我们希望通过这个平台，让更多的玩家了解并参与到竹像素的世界中来。
			</p>
			<p class="typo">
				如果你对竹像素有任何疑问或建议，欢迎通过 QQ 群与我们联系，我们会尽快回复你。
			</p>

			<!-- 时间线部分：中间主线，内容左右交替 -->
			<h1 class="primary-text" style="text-align: center;">大大~ 大事记!</h1>
			<p class="typo">
				这里记录了我们的<strong>主要事迹和发展历程</strong>，其他小事件没有写入呢......
			</p>
			<div class="timeline">
				<!-- 中间主线 -->
				<div class="timeline-line-center"></div>

				<div class="timeline-items">
					<div class="timeline-item" v-for="(item, index) in historyEvents" :key="index"
						:class="{ 'left': index % 2 === 0, 'right': index % 2 !== 0 }">
						<!-- 左侧内容 -->
						<div class="timeline-content"
							:class="{ 'left-content': index % 2 === 0, 'right-content': index % 2 !== 0 }">
							<div class="content-card">
								<span class="timeline-date-tag">{{ item.date }}</span>
								<h3>{{ item.title }}</h3>
								<p>{{ item.description }}</p>
								<div class="card-glow"></div>
							</div>
						</div>

						<!-- 节点标记 -->
						<div class="timeline-node">
							<span class="node-dot"></span>
						</div>
					</div>

					<!-- 未来节点 -->
					<div class="timeline-item future-item">
						<div class="timeline-content future-content">
							<div class="content-card future-card">
								<span class="timeline-date-tag">未来</span>
								<h3>更多精彩待续...</h3>
								<p>竹像素的故事仍在继续，欢迎你一起书写。</p>
								<div class="card-glow"></div>
							</div>
						</div>
						<div class="timeline-node">
							<span class="node-dot future">✨</span>
						</div>
					</div>
				</div>
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
			historyEvents: [
				{
					date: '2020年',
					title: '萌芽',
					description: '此时的\"竹像素\"还不是竹像素，而是名为 YZY 的空岛生存服务器。'
				},
				{
					date: '2021年中旬',
					title: '开展高版本互通服',
					description: '随着云竹团队与魔术团队的合并，柒屹加入了 YZY 生存服的工作，开辟了互通生存服的道路。'
				},
				{
					date: '2021年秋',
					title: '正式改名云竹互通',
					description: 'QQ群活跃玩家超过100，互通生存服成为主流并应用了周目制度。仲秋，YZY 服务器改名云竹互通。'
				},
				{
					date: '2022年-2023年初',
					title: '周目过渡',
					description: '近乎两年时间内，竹像素度过了大约8个周目的时光，柒屹改服务器名为竹像素。此时也是竹像素有史以来最为辉煌的时刻。'
				},
				{
					date: '2023年中旬-2024年',
					title: '稳步发展',
					description: '竹像素持续优化，不定期举办活动，但此时热度依然下降。柒屹依照 Seati 服务器的官网设计了本网站。'
				}
			]
		};
	}
});
</script>

<style lang="less" scoped>
// 主题色变量 - 保持原有颜色体系
@primary: darken(@primary-gradient-first, 25%);
@primary-light: lighten(@primary, 15%);
@primary-dark: darken(@primary, 15%);
@primary-soft: lighten(@primary, 25%);
@primary-bg: lighten(@primary, 35%);
@text-primary: darken(@primary, 25%);
@border-light: lighten(@primary, 30%);

.bad-design {
	width: 300px;
	display: block;
	margin-bottom: 32px;
}

.container {
	margin-bottom: 64px;
}

/* ========== 优化后的时间线样式 ========== */
.timeline {
	max-width: 1000px;
	margin: 50px auto;
	position: relative;
	padding: 20px 0;
}

.timeline-line-center {
	position: absolute;
	left: 50%;
	top: 0;
	bottom: 0;
	width: 4px;
	background: linear-gradient(to bottom,
			@primary-gradient-first,
			@primary-gradient-second,
			@primary-gradient-first);
	transform: translateX(-50%);
	border-radius: 4px;
	box-shadow: 0 0 12px fade(@primary, 40%);
	z-index: 1;

	&::before,
	&::after {
		content: '';
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		width: 12px;
		height: 12px;
		background: @primary-gradient-first;
		border-radius: 50%;
		opacity: 0.6;
	}

	&::before {
		top: -6px;
	}

	&::after {
		bottom: -6px;
	}
}

.timeline-items {
	position: relative;
	z-index: 2;
}

.timeline-item {
	display: flex;
	align-items: flex-start;
	margin-bottom: 60px;
	position: relative;
	min-height: 120px;

	&:last-of-type {
		margin-bottom: 40px;
	}
}

.timeline-item.left {
	justify-content: flex-start;
}

.timeline-item.right {
	justify-content: flex-end;
}

.timeline-content {
	width: calc(50% - 60px);
	position: relative;
}

.left-content {
	margin-right: 60px;
	text-align: right;
}

.right-content {
	margin-left: 60px;
	text-align: left;
}

.timeline-node {
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	width: 50px;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 3;
}

.node-dot {
	display: inline-block;
	width: 20px;
	height: 20px;
	background: linear-gradient(135deg, @primary-gradient-first, @primary-gradient-second);
	border: 3px solid white;
	border-radius: 50%;
	box-shadow: 0 4px 12px fade(@primary, 40%);
	transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	cursor: pointer;
	position: relative;

	&::before {
		content: '';
		position: absolute;
		top: -4px;
		left: -4px;
		right: -4px;
		bottom: -4px;
		border-radius: 50%;
		background: fade(@primary-gradient-first, 20%);
		opacity: 0;
		transition: opacity 0.3s ease;
	}
}

@media (min-width: 768px) {
	.node-dot:hover {
		transform: scale(1.25);
		box-shadow: 0 0 0 4px fade(@primary-gradient-first, 20%);

		&::before {
			opacity: 1;
		}
	}
}

.node-dot.future {
	width: 32px;
	height: 32px;
	background: linear-gradient(135deg, #a8e6cf, #d4a5a5);
	font-size: 14px;
	line-height: 26px;
	text-align: center;
	color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;

	&:hover {
		transform: scale(1.15);
	}

	@media (min-width: 750px) {
		margin-bottom: 50px;
	}
}

.content-card {
	background: linear-gradient(135deg, #ffffff 0%, #fefefe 100%);
	border: 1px solid @border-light;
	border-radius: 20px;
	padding: 22px 28px;
	box-shadow: 0 8px 20px fade(#000, 6%);
	transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	position: relative;
	overflow: hidden;

	.card-glow {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 3px;
		background: linear-gradient(90deg, @primary-gradient-first, @primary-gradient-second);
		opacity: 0;
		transition: opacity 0.3s ease;
	}

	h3 {
		margin: 10px 0 10px 0;
		color: @primary-dark;
		font-size: 1.4rem;
		font-weight: 600;
	}

	p {
		margin: 0;
		color: lighten(#000, 30%);
		line-height: 1.7;
		font-size: 1rem;
	}
}

@media (min-width: 768px) {
	.content-card:hover {
		transform: translateY(-6px);
		box-shadow: 0 20px 35px fade(@primary-dark, 12%);
		border-color: @primary;

		.card-glow {
			opacity: 1;
		}
	}

	.left-content .content-card:hover {
		transform: translateY(-6px) translateX(-3px);
	}

	.right-content .content-card:hover {
		transform: translateY(-6px) translateX(3px);
	}
}

.left-content .content-card::after {
	content: '';
	position: absolute;
	right: -43px;
	top: 28px;
	width: 40px;
	height: 3px;
	background: linear-gradient(90deg, @primary-gradient-first, @primary-gradient-second);
	border-radius: 3px;
	transition: width 0.3s ease;
}

.right-content .content-card::after {
	content: '';
	position: absolute;
	left: -43px;
	top: 28px;
	width: 40px;
	height: 3px;
	background: linear-gradient(90deg, @primary-gradient-second, @primary-gradient-first);
	border-radius: 3px;
	transition: width 0.3s ease;
}

@media (min-width: 768px) {

	.left-content .content-card:hover::after,
	.right-content .content-card:hover::after {
		width: 50px;
	}
}

.timeline-date-tag {
	display: inline-block;
	background: linear-gradient(135deg, @primary-gradient-first, @primary-gradient-second);
	color: white;
	padding: 6px 16px;
	border-radius: 30px;
	font-size: 0.85rem;
	font-weight: 600;
	letter-spacing: 0.5px;
	box-shadow: 0 4px 10px fade(@primary, 30%);
	transition: all 0.2s ease;
}

@media (min-width: 768px) {
	.content-card:hover .timeline-date-tag {
		transform: scale(1.02);
		box-shadow: 0 6px 14px fade(@primary, 40%);
	}
}

.left-content .timeline-date-tag {
	float: right;
	margin-left: 12px;
}

.right-content .timeline-date-tag {
	float: left;
	margin-right: 12px;
}

.future-item {
	justify-content: center !important;
}

.future-content {
	width: 400px;
	margin: 0 auto;
	text-align: center;
}

.future-card {
	background: linear-gradient(135deg, #fafbfc 0%, #f5f7fa 100%);
	border-color: @border-light;

	.card-glow {
		background: linear-gradient(90deg, #a8e6cf, #d4a5a5);
	}
}

.future-card::after {
	display: none;
}

.future-card h3 {
	color: @primary-dark;
}

/* 移动端响应式 */
@media (max-width: 768px) {
	.timeline-line-center {
		left: 30px;
		width: 3px;
	}

	.timeline-item {
		justify-content: flex-start !important;
		margin-left: 0;
		margin-bottom: 40px;
		position: relative;
		min-height: 100px;
	}

	.timeline-content {
		width: calc(100% - 80px);
		margin: 0 0 0 30px !important;
		text-align: left !important;
	}

	.timeline-node {
		left: 30px;
		transform: translateX(-50%);
		width: 40px;
		height: 40px;
	}

	.node-dot {
		width: 16px;
		height: 16px;
		border-width: 2px;
	}

	.node-dot.future {
		width: 28px;
		height: 28px;
		font-size: 12px;
		line-height: 24px;
	}

	.left-content .content-card::after,
	.right-content .content-card::after {
		content: '';
		position: absolute;
		left: -35px !important;
		right: auto;
		top: 22px;
		width: 28px;
		height: 2px;
		background: linear-gradient(90deg, @primary-gradient-first, @primary-gradient-second);
		border-radius: 2px;
	}

	.content-card {
		margin-left: 0;
		padding: 16px 20px;

		h3 {
			font-size: 1.2rem;
			clear: both;
			margin-top: 8px;
		}

		p {
			font-size: 0.9rem;
			line-height: 1.6;
		}
	}

	.timeline-date-tag {
		float: left !important;
		margin: 0 0 10px 0 !important;
		font-size: 0.75rem;
		padding: 4px 12px;
	}

	.future-content {
		width: calc(100% - 80px);
		margin: 0 0 0 30px !important;
	}

	.future-item {
		margin-left: 0;
	}

	.future-item .timeline-node {
		left: 30px;
	}
}
</style>