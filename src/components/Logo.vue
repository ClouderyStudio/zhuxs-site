<template>
	<div class="logo">
		<img class="img" src="https://oss.cldery.com/mcweb/assets/logo.png" alt="logo" />
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({});
</script>

<style lang="less" scoped>
.logo {
	display: flex;
	align-items: center;
	cursor: default;

	*::selection {
		background: transparent;
	}

	&.nav {
		.img {
			width: 72px;
			margin-left: 16px;
			transform: translateY(0px);
		}

		svg {
			.cls-1 {
				fill: url(#g1);
			}
		}
	}

	&.small {
		.img {
			width: 32px;
		}
	}

	&.primary {
		.img {
			.logo-active;
		}
	}

	&.footer {
		@media screen and (min-width: 1000px) {
			.img {
				width: 150px;
			}
		}

		@media screen and (max-width: 1000px) {
			.img {
				width: 100px;
			}
		}
	}

	&.hero {
		@media screen and (min-width: 1000px) {
			.img {
				width: 200px;
			}
		}
		@media screen and (max-width: 1000px) {
			.img {
				width: 100px;
			}
		}
	}

	&.center {
		justify-content: center;
	}
}
</style>