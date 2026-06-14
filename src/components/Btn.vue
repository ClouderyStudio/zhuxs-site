<template>
	<button @click="go()" class="btn" :class="[
		type,
		size,
		isPCSize() && !isIOS() ? 'pc' : 'mobile',
		{ shadow, hover, arrow, rounded, full }
	]">
		<div class="content">
			<span v-if="iconPosition !== 'right' && icon !== ''" class="btn-icon"
				:class="{ 'with-text': !!$slots.default }">
				<mdicon v-if="icon" :name="icon" />
			</span>
			<span class="btn-text">
				<slot />
			</span>
			<span v-if="iconPosition === 'right' && icon !== ''" class="btn-icon"
				:class="{ 'with-text': !!$slots.default }">
				<mdicon v-if="icon" :name="icon" />
			</span>
		</div>
		<div v-if="type === 'primary-glow'" class="btn-glow"></div>
	</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { isPCSize, isIOS } from '@/fn';
export default defineComponent({
	props: {
		type: { type: String, default: 'primary' },
		size: { type: String, default: 'medium' },
		icon: { type: String, default: '' },
		iconPosition: { type: String, default: 'left' },
		to: String,
		href: String,
		shadow: { type: Boolean, default: false },
		hover: { type: Boolean, default: true },
		arrow: { type: Boolean, default: false },
		rounded: { type: Boolean, default: false },
		full: { type: Boolean, default: false },
		loading: { type: Boolean, default: false }
	},
	methods: {
		go() {
			if (this.loading) return;
			if ((this as any).to) (this as any).$router.push((this as any).to);
			if ((this as any).href) window.open((this as any).href);
		},
		isPCSize,
		isIOS() {
			let nav = window.navigator as any;
			if (/iPad|iPhone|iPod/.test(nav.platform)) {
				return true;
			} else {
				return nav.maxTouchPoints && nav.maxTouchPoints > 2 && /MacIntel/.test(nav.platform);
			}
		}
	}
});
</script>

<style lang="less" scoped>
.btn {
	position: relative;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	border: none;
	cursor: pointer;
	font-family: inherit;
	font-weight: 500;
	transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
	outline: none;
	background: transparent;
	overflow: hidden;

	/* 禁用状态 */
	&:disabled {
		opacity: 0.6;
		cursor: not-allowed;
		transform: none !important;
	}

	/* 加载状态 */
	&.loading {
		cursor: wait;

		.btn-text {
			opacity: 0.7;
		}
	}

	/* 尺寸变体 */
	&.small {
		padding: 6px 14px;
		font-size: 0.8rem;

		.btn-icon {
			width: 18px;
			height: 18px;

			svg {
				width: 14px;
				height: 14px;
			}
		}
	}

	&.medium {
		padding: 10px 20px;
		font-size: 0.95rem;

		.btn-icon {
			width: 20px;
			height: 20px;

			svg {
				width: 16px;
				height: 16px;
			}
		}
	}

	&.large {
		padding: 14px 28px;
		font-size: 1.1rem;

		@media (max-width: 1000px) {
			padding: 10px 20px;
			font-size: 1rem;
		}

		.btn-icon {
			width: 22px;
			height: 22px;

			svg {
				width: 18px;
				height: 18px;
			}
		}
	}

	/* 圆角 */
	&.rounded {
		border-radius: 40px;
	}

	&:not(.rounded) {
		border-radius: 8px;
	}

	/* 全宽 */
	&.full {
		width: 100%;
	}

	/* 阴影效果 */
	&.shadow {
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

		&:hover {
			box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
		}
	}

	/* 箭头动画 */
	&.arrow {
		.btn-icon {
			transition: transform 0.25s ease;
		}

		&:hover .btn-icon {
			transform: translateX(4px);
		}
	}

	/* 内容布局 */
	.content {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		position: relative;
		z-index: 2;
	}

	.btn-icon {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		transition: all 0.2s ease;

		&.with-text {
			margin: 0;
		}
	}

	.btn-text {
		line-height: 1;
	}

	/* ========== 按钮类型样式 ========== */

	/* 主要按钮 - 渐变背景 */
	&.primary {
		background: linear-gradient(135deg, #B3E94A 0%, #50963D 50%, #54F47F 100%);
		background-size: 200% auto;
		color: white;
		font-weight: 600;

		&:hover {
			background-position: 100% center;
			transform: translateY(-2px);
		}

		&:active {
			transform: translateY(0);
		}
	}

	/* 主要按钮 A - 动态渐变 */
	&.primary-a {
		background: linear-gradient(65deg, #B3E94A, #50963D, #54F47F, #B3E94A);
		background-size: 300% auto;
		color: white;
		font-weight: 600;
		animation: gradientShift 8s ease infinite;

		&:hover {
			transform: translateY(-2px);
			box-shadow: 0 8px 20px rgba(86, 204, 114, 0.3);
		}
	}

	/* 主要按钮 O - 橙色渐变 */
	&.primary-o {
		background: linear-gradient(65deg, #ff9500, #ff5e00, #ff2d00, #ff9500);
		background-size: 300% auto;
		color: white;
		font-weight: 600;
		animation: gradientShift 8s ease infinite;

		&:hover {
			transform: translateY(-2px);
			box-shadow: 0 8px 20px rgba(255, 94, 0, 0.3);
		}
	}

	/* 发光主要按钮 */
	&.primary-glow {
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		color: white;
		font-weight: 600;

		.btn-glow {
			position: absolute;
			top: 0;
			left: -100%;
			width: 100%;
			height: 100%;
			background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
			transition: left 0.5s ease;
			pointer-events: none;
		}

		&:hover {
			transform: translateY(-2px);
			box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);

			.btn-glow {
				left: 100%;
			}
		}
	}

	/* 主要浅色按钮 */
	&.primarylight {
		position: relative;
		background: linear-gradient(94deg, @primary-gradient-first 29.88%, @primary-gradient-second 67.68%);
		background-clip: text;
		-webkit-background-clip: text;
		color: transparent;
		font-weight: 600;

		&::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background: rgba(255, 255, 255, 0.95);
			border-radius: inherit;
			z-index: -1;
			transition: all 0.3s ease;
		}

		&:hover::before {
			background: white;
			transform: scale(1.02);
		}

		&.mobile {
			background: none;
			color: @primarydark;

			&::before {
				background: rgba(255, 255, 255, 0.9);
			}
		}
	}

	/* 主要轮廓按钮 */
	&.primary-outlined {
		border: 2px solid transparent;
		background: linear-gradient(94deg, @primary-gradient-first 29.88%, @primary-gradient-second 67.68%);
		background-clip: text;
		-webkit-background-clip: text;
		color: transparent;
		position: relative;

		&::before {
			content: '';
			position: absolute;
			top: -2px;
			left: -2px;
			right: -2px;
			bottom: -2px;
			background: linear-gradient(94deg, @primary-gradient-first 29.88%, @primary-gradient-second 67.68%);
			border-radius: inherit;
			z-index: -2;
		}

		&::after {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background: white;
			border-radius: inherit;
			z-index: -1;
		}

		&:hover {
			transform: translateY(-1px);

			&::after {
				background: #f5f5f5;
			}
		}
	}

	/* 轮廓按钮 */
	&.outlined {
		background: transparent;
		color: white;
		border: 1.5px solid rgba(255, 255, 255, 0.4);
		backdrop-filter: blur(4px);

		&:hover {
			border-color: white;
			background: rgba(255, 255, 255, 0.1);
			transform: translateY(-2px);
		}
	}

	/* 深色轮廓按钮 */
	&.dark {
		border: 1.5px solid @textmidgray;
		color: @textmidgray;
		background: transparent;

		&:hover {
			border-color: black;
			color: black;
			background: rgba(0, 0, 0, 0.05);
			transform: translateY(-2px);
		}
	}

	/* 次要按钮 */
	&.secondary {
		background: rgba(255, 255, 255, 0.15);
		backdrop-filter: blur(10px);
		color: white;
		border: 1px solid rgba(255, 255, 255, 0.2);

		&:hover {
			background: rgba(255, 255, 255, 0.25);
			border-color: rgba(255, 255, 255, 0.4);
			transform: translateY(-2px);
		}
	}

	/* 玻璃态按钮 */
	&.glass {
		background: rgba(255, 255, 255, 0.1);
		backdrop-filter: blur(12px);
		color: white;
		border: 1px solid rgba(255, 255, 255, 0.2);

		&:hover {
			background: rgba(255, 255, 255, 0.2);
			border-color: rgba(255, 255, 255, 0.4);
			transform: translateY(-2px);
			box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
		}
	}

	/* 动画定义 */
	@keyframes gradientShift {
		0% {
			background-position: 0% 50%;
		}

		50% {
			background-position: 100% 50%;
		}

		100% {
			background-position: 0% 50%;
		}
	}
}

/* PC 端额外效果 */
@media (min-width: 1000px) {
	.btn {

		&.primary,
		&.primary-a,
		&.primary-o,
		&.primary-glow,
		&.secondary,
		&.glass {
			&:active {
				transform: translateY(1px);
			}
		}
	}
}

/* 移动端触摸优化 */
@media (max-width: 1000px) {
	.btn {

		&.primary,
		&.primary-a,
		&.primary-o,
		&.primary-glow,
		&.secondary,
		&.glass {
			&:active {
				transform: scale(0.97);
			}
		}
	}
}
</style>