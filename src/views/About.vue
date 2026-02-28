<template>
	<div page>
		<banner bg="/assets/images/6.jpg">
			<template #title>关于竹像素</template>
			<template #subtitle>了解更多</template>
			<template #text
				>在这里了解有关竹像素本身以及此网站的内容<br
			/></template>
		</banner>
		<div class="container content">
			<h1 class="primary-text">关于我们</h1>
			<p class="typo">
				<strong>竹像素</strong>是一个基于 Minecraft 的多人游戏服务器，旨在为玩家提供一个友好、开放和有趣的游戏环境。我们欢迎所有热爱 Minecraft 的玩家加入我们的社区，无论你是新手还是老玩家。
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
					<div class="timeline-item" v-for="(item, index) in historyEvents" :key="index" :class="{'left': index % 2 === 0, 'right': index % 2 !== 0}">
						<!-- 左侧内容 -->
						<div class="timeline-content" :class="{'left-content': index % 2 === 0, 'right-content': index % 2 !== 0}">
							<div class="content-card">
								<span class="timeline-date-tag">{{ item.date }}</span>
								<h3>{{ item.title }}</h3>
								<p>{{ item.description }}</p>
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
							</div>
						</div>
						<div class="timeline-node">
							<span class="node-dot future">?</span>
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
// 主题色变量
@primary: darken(@primary-gradient-first,25%);
@primary-light: lighten(@primary,15%);
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

/* 时间线整体样式 */
.timeline {
	max-width: 1000px;
	margin: 50px auto;
	position: relative;
	padding: 20px 0;
}

/* 中间主线 */
.timeline-line-center {
	position: absolute;
	left: 50%;
	top: 0;
	bottom: 0;
	width: 4px;
	background: linear-gradient(to bottom, 
		@primary-gradient-first,
		@primary-gradient-second,
	);
	transform: translateX(-50%);
	border-radius: 4px;
	box-shadow: 0 4px 10px fade(@primary, 30%);
	z-index: 1;
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
}

/* 左侧和右侧的布局 */
.timeline-item.left {
	justify-content: flex-start;
}

.timeline-item.right {
	justify-content: flex-end;
}

/* 内容卡片容器 */
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

/* 节点标记 */
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
	width: 24px;
	height: 24px;
	background-color: @primary;
	border: 4px solid @primary-bg;
	border-radius: 50%;
	box-shadow: 0 4px 12px fade(@primary, 40%);
	transition: all 0.3s ease;
}

@media (min-width: 768px) {
.node-dot:hover {
	transform: scale(1.2);
	background-color: @primary-light;
}
.content-card:hover {
	transform: translateY(-5px);
	box-shadow: 0 15px 30px fade(@primary-dark, 20%);
	border-color: @primary;
}
/* 左侧卡片悬停效果 */
.left-content .content-card:hover {
	transform: translateY(-5px) translateX(-3px);
}

/* 右侧卡片悬停效果 */
.right-content .content-card:hover {
	transform: translateY(-5px) translateX(3px);
}
}
.node-dot.future {
	transform: translateY(-75%);
	background-color: lighten(@primary, 20%);
	border-color: @primary-soft;
	font-size: 16px;
	line-height: 24px;
	text-align: center;
	color: @primary-dark;
}

/* 内容卡片样式 */
.content-card {
	background: linear-gradient(135deg, #ffffff 0%, @primary-bg 100%);
	border: 1px solid @border-light;
	border-radius: 20px;
	padding: 22px 28px;
	box-shadow: 0 8px 20px fade(@primary-dark, 10%);
	transition: all 0.3s ease;
	position: relative;

	h3 {
		transform: translateY(-32%);
	}
}

/* 连接线 - 从节点指向卡片 */
.left-content .content-card::after {
	content: '';
	position: absolute;
	right: -43px;
	top: 20px;
	width: 40px;
	height: 3px;
	background: linear-gradient(90deg, @primary 0%, @primary-light 100%);
	border-radius: 3px;
}

.right-content .content-card::after {
	content: '';
	position: absolute;
	left: -43px;
	top: 20px;
	width: 40px;
	height: 3px;
	background: linear-gradient(90deg, @primary-light 0%, @primary 100%);
	border-radius: 3px;
}

.content-card h3 {
	margin: 10px 0 10px 0;
	color: @primary-dark;
	font-size: 1.4rem;
	font-weight: 600;
}

.content-card p {
	margin: 0;
	color: lighten(#000, 30%);
	line-height: 1.7;
	font-size: 1rem;
}

/* 日期标签 */
.timeline-date-tag {
	display: inline-block;
	background-color: @primary;
	color: white;
	padding: 6px 16px;
	border-radius: 30px;
	font-size: 0.9rem;
	font-weight: 600;
	letter-spacing: 0.5px;
	box-shadow: 0 4px 8px fade(@primary, 30%);
}

.left-content .timeline-date-tag {
	float: right;
	margin-left: 10px;
}

.right-content .timeline-date-tag {
	float: left;
	margin-right: 10px;
}

/* 未来项样式 */
.future-item {
	justify-content: center !important;
}

.future-content {
	width: 400px;
	margin: 0 auto;
	text-align: center;
}

.future-card {
	background: linear-gradient(135deg, lighten(@primary-bg, 5%) 0%, @primary-bg 100%);
	border-color: @border-light;

	h3 {
		transform: translateY(0%);
	}
}

.future-card::after {
	display: none; /* 未来项不显示连接线 */
}

.future-card h3 {
	color: @primary-dark;
}

/* 移动端响应式 - 修复连接线问题 */
@media (max-width: 768px) {
	.timeline-line-center {
		left: 30px; /* 将主线移到左侧 */
		width: 3px;
	}
	
	.timeline-item {
		justify-content: flex-start !important;
		margin-left: 50px;  /* 增加左边距，给节点留出空间 */
		margin-bottom: 40px;
		position: relative;
		min-height: 100px;
	}
	
	.timeline-content {
		width: calc(100% - 40px);
		margin: 0 0 0 30px !important;
		text-align: left !important;
	}
	
	/* 节点位置调整 - 确保与主线对齐 */
	.timeline-node {
		left: 30px;
		transform: translateX(-50%); /* 让节点中心与主线对齐 */
		width: 40px;
		height: 40px;
	}
	
	.node-dot {
		width: 20px;
		height: 20px;
		border-width: 3px;
	}
	
	/* 修复连接线 - 确保从节点连接到卡片 */
	.left-content .content-card::after,
	.right-content .content-card::after {
		content: '';
		position: absolute;
		left: -50px !important;
		right: auto;
		top: 15px;
		width: 30px;
		height: 3px;
		background: linear-gradient(90deg, @primary 0%, @primary-light 100%);
		border-radius: 3px;
		z-index: 2;
	}
	
	/* 确保卡片有足够的左边距，让连接线可见 */
	.content-card {
		margin-left: 5px;
		padding: 18px 22px;

		h3 {
			transform: translateY(0%);
		}
	}
	
	/* 日期标签样式调整 */
	.timeline-date-tag {
		float: left !important;
		margin: 0 0 10px 0 !important;
		font-size: 0.85rem;
		padding: 4px 12px;
	}
	
	.future-content {
		width: 100%;
	}
	
	.content-card h3 {
		font-size: 1.2rem;
		clear: both;
		margin-top: 5px;
	}
	
	.content-card p {
		font-size: 0.95rem;
	}
	
	/* 未来项在移动端的调整 */
	.future-item {
		margin-left: 50px;
	}
	
	.future-item .timeline-node {
		left: 30px;
	}
}
</style>