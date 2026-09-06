<template>
	<div id="app">
		<navbar/>
		<router-view v-slot="{ Component }" :class="computedClass">
		<transition>
			<component :is="Component" />
		</transition>
		</router-view>
		<Footer/>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import { isPCSize, isMobile } from "@/fn";
import { useSeoMeta } from "@unhead/vue";

export default defineComponent({
	name: "App",
	components: { Navbar, Footer },
	setup() {
		useSeoMeta({
			title: "竹像素 Minecraft | BambooPixel",
			description: "竹像素是一个现代化、高版本、低延迟的周目制MC生存服务器。",
			ogTitle: "竹像素MC生存服",
			ogDescription: "一个现代化、高版本、低延迟的周目制MC生存服务器。",
		});
	},
	computed: {
		computedClass(): string {
			const isPC = isPCSize();
			const isMob = isMobile();
			return isPC ? (isMob ? 'mobile-pc-size' : 'pc-size') : 'mobile-size';
		},
	},
});
</script>

<style lang="less">
.fade-enter,
.fade-leave-to {
	visibility: hidden;
	opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.2s ease;
}
.fade-enter-to,
.fade-leave {
	opacity: 1;
	visibility: visible;
}
</style>