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

<script setup lang="ts">
import { computed } from "vue";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import { isPCSize, isMobile } from "@/fn";

const computedClass = computed(() => {
	const isPC = isPCSize();
	const isMob = isMobile();
	return isPC ? (isMob ? 'mobile-pc-size' : 'pc-size') : 'mobile-size';
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