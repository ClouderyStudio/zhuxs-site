<template>
	<div class="banner" :class="{ 'bg-revealed': backgroundRevealed }">
		<!-- 模糊背景层 -->
		<div class="banner-bg-blur" :style="{ backgroundImage: `url(${bg})` }"></div>
		<!-- 清晰背景层（从左扩散显示） -->
		<div class="banner-bg-clear" :style="{ backgroundImage: `url(${bg})` }"></div>

		<div v-if="$slots.announcement" class="announcement">
			<slot name="announcement" />
		</div>
		<div class="text-box">
			<h2>
				<slot name="subtitle" />
			</h2>
			<h1>
				<slot name="title" />
			</h1>
			<p>
				<slot name="text" />
			</p>
			<div class="buttons">
				<slot name="buttons" />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
export default defineComponent({
	props: {
		bg: {
			type: String,
			required: true
		},
		delayReveal: {
			type: Boolean,
			default: false
		}
	},
	setup(props) {
		const backgroundRevealed = ref(false);

		onMounted(() => {
			if (props.delayReveal) {
				setTimeout(() => {
					backgroundRevealed.value = true;
				}, 2180);
			} else {
				// 立即显示背景
				backgroundRevealed.value = true;
			}
		});

		return {
			backgroundRevealed
		};
	}
});
</script>

<style lang="less" scoped>
.banner {
	z-index: 1;
	height: 500px;
	width: 100%;
	display: flex;
	align-items: center;
	background-color: black;
	position: relative;
	overflow: hidden;

	&::before {
		display: block;
		position: absolute;
		width: 100%;
		height: 100%;
		z-index: 2;
		background: linear-gradient(to top, rgba(0, 0, 0, .3) 0%, transparent 100%);
		content: '';
	}

	&[fullscreen] {
		height: 100vh;
	}
}

/* 模糊背景层 */
.banner-bg-blur {
	position: absolute;
	inset: 0;
	z-index: 0;
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	filter: blur(5px);
	transform: scale(1.15);
}

/* 清晰背景层（从左扩散） */
.banner-bg-clear {
	position: absolute;
	inset: 0;
	z-index: 1;
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	clip-path: circle(0% at 0% 50%);
	transition: clip-path 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* 背景显示状态 */
.banner.bg-revealed .banner-bg-clear {
	clip-path: circle(150% at 0% 50%);
}

.text-box {
	z-index: 3;
	color: white;

	@media screen and (min-width: 800px) {
		margin-left: 72px;
	}

	@media screen and (max-width: 800px) {
		padding: 32px;
	}

	h1,
	h2,
	p {
		margin: 8px 0;
		text-shadow: 0px 2px 4px #00000050;
	}

	h1 {
		font-size: 2.8rem;

		@media screen and (max-width: 800px) {
			font-size: 40.5px;
		}
	}

	h2 {
		font-size: 2rem;
		font-weight: normal;
		margin-bottom: 8px;

		@media screen and (max-width: 800px) {
			font-size: 1.5rem;
		}
	}

	p {
		font-size: 21.6px;
		margin-top: 16px;
		line-height: 1.8;

		@media screen and (max-width: 800px) {
			font-size: 16.7px;
		}
	}
}

.buttons {
	display: flex;
	align-items: stretch;
	margin-top: 32px;
}

.announcement {
	position: absolute;
	top: 72px;
	left: 10%;
	right: 10%;
	z-index: 4;
	padding: 12px 16px;
	display: inline-flex;
	align-items: center;
	color: white;
	font-size: 1.1rem;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
	backdrop-filter: blur(4px);
	justify-content: center;
}

@media screen and (max-width: 800px) {
	.announcement {
		left: 10%;
		right: 10%;
		top: 72px;
		padding: 12px 12px;
		font-size: 1rem;
	}
}
</style>