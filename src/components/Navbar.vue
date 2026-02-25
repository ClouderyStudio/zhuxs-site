<template>
	<div class="navbar-box">
		<nav class="navbar" :class="active ? 'active' : 'inactive'">
			<div class="hamburger" :class="hamburgerOpen ? 'open' : ''" @click="
				hamburgerOpen = !hamburgerOpen;
			toggleDropdown();
			">
				<span class="hamburger__top-bun"></span>
				<span class="hamburger__bottom-bun"></span>
			</div>
			<logo @click="$router.push('/')" class="nav" :class="active ? '' : 'light'" />
			<div class="nav-link">
				<div @click="jumpto(x)" class="link" :class="{ active: isCurrentPage(x.route || '') }"
					v-for="(x, i) in links" :key="i">
					{{ x.name }}
				</div>
			</div>
			<div ref="dropdown" class="dropdown">
				<span @click="onDropdownItemClick(x)" class="dropdown-item" v-for="(x, i) in links" :key="i">
					{{ x.name }}
				</span>
			</div>
		</nav>
	</div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import Logo from "@/components/Logo.vue";

// 定义接口
interface LinkItem {
	name: string;
	route?: string;
	href?: string;
}

interface Titles {
	home: string;
	join: string;
	server: string;
	about: string;
	articles: string;
	donate: string;
	applications: string;
	terms: string;
	rules: string;
	[key: string]: string;
}

// 组件注册（自动处理）
// Logo 组件会自动注册，无需 components 选项

const router = useRouter();
const route = useRoute();
const dropdown = ref<HTMLDivElement | null>(null);

const links = ref<LinkItem[]>([
	{ name: "首页", route: "/" },
	{ name: "加入", route: "/join" },
	{ name: "关于", route: "/about" },
	{ name: "动态", route: "/articles" },
	{ name: "捐助", route: "/donate" },
	{ name: "周目", route: '/terms' },
	{ name: "服规", route: "/rules" },
	{ name: '审核结果', route: '/applications' }
]);

const active = ref<boolean>(false);
const hamburgerOpen = ref<boolean>(false);

const titles: Titles = {
	home: "Every Bamboo Pixel",
	join: "立即加入",
	server: "服务器状态",
	about: "关于",
	articles: "动态",
	donate: "捐助",
	applications: "审核结果及玩家列表",
	terms: '周目',
	rules: '服规'
};

const updateTitle = (name: string): void => {
	if (Object.prototype.hasOwnProperty.call(titles, name)) {
		document.title = titles[name] || name;
	}
};

const toggleDropdown = (directOption?: boolean): void => {
	const obj = dropdown.value;
	if (!obj) return;
	
	const shouldOpen = directOption !== undefined 
		? directOption 
		: obj.style.display === "none" || hamburgerOpen.value;
	
	obj.style.display = shouldOpen ? "block" : "none";
	obj.style.pointerEvents = shouldOpen ? "auto" : "none";
};

const isCurrentPage = (routePath: string): boolean => {
	const currentRouteName = route.name as string;
	if (routePath === '/') {
		return currentRouteName === 'home' || currentRouteName === 'index';
	}
	return `/${currentRouteName}` === routePath || route.path === routePath;
};

const activateNav = (): void => {
	const scrollTop = (document.scrollingElement as Element)?.scrollTop || 0;
	active.value = scrollTop > 100;
};

const jumpto = (to: LinkItem): void => {
	if (to.route) {
		router.push(to.route);
	} else if (to.href) {
		window.open(to.href, '_blank');
	}
};

const onDropdownItemClick = (x: LinkItem): void => {
	jumpto(x);
	hamburgerOpen.value = false;
	toggleDropdown(false);
};

// Watchers
watch(hamburgerOpen, (v: boolean): void => {
	if (v) {
		active.value = true;
	} else {
		activateNav();
	}
});

watch(() => route.name, (newName): void => {
	activateNav();
	if (newName) {
		updateTitle(newName as string);
	}
}, { immediate: true });

// Lifecycle
onMounted(() => {
	const handleScroll = (): void => {
		if (document.scrollingElement?.scrollTop) {
			if (!hamburgerOpen.value) {
				activateNav();
			}
		}
	};
	document.addEventListener("scroll", handleScroll);
	
	return () => {
		document.removeEventListener("scroll", handleScroll);
	};
});
</script>

<style lang="less" scoped>
.navbar {
	.logo.nav {
		cursor: pointer;

		@media (max-width: 800px) {
			margin-left: 42px;
		}
	}

	&.inactive {

		.hamburger__bottom-bun,
		.hamburger__top-bun {
			background: #fff;
		}

		.link {
			&:not(.active):hover {
				color: white !important;
			}

			&.active {
				color: white !important;
			}

			color: @textmidwhite;
		}

		background: rgba(0, 0, 0, .2);
		backdrop-filter: blur(5px);
	}

	.link.active {
		font-weight: bold;
	}

	&.active {

		.hamburger__bottom-bun,
		.hamburger__top-bun {
			background: @textmidgray;
		}

		background: white;
	}
}

.nav-link {
	margin-left: 16px;
	display: flex;
	align-items: center;

	@media screen and (max-width: 800px) {
		display: none;
	}

	.link {
		margin: 0 16px;
		cursor: pointer;
		transition: all 0.2s ease;
		position: relative;

		&:not(.active):hover {
			color: @textgray;
		}

		&.active {
			color: @textgray;
			transform: scale(1.2);

			&::after {
				opacity: 1;
				width: 120%;
			}
		}

		&::after {
			background: #54F47F;
			width: 0;
			content: " ";
			display: block;
			position: absolute;
			bottom: 0.5px;
			z-index: -1;
			height: 5px;
			left: 50%;
			transform: translateX(-50%);
			opacity: 0;
		}
	}

	color: @textlightgray;
}

.navbar {
	transition: all 0.2s ease;
	z-index: 1000;
	display: flex;
	align-items: center;
	box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.21);
	padding: 12px;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	height: 40px;
}

/* Hamburger from https://apple.com */

.hamburger {
	cursor: pointer;
	position: absolute;
	left: 8px;
	width: 48px;
	height: 48px;
	transition: all 0.25s;
	z-index: 10000;

	@media screen and (min-width: 800px) {
		display: none;
	}
}

.hamburger__top-bun,
.hamburger__bottom-bun {
	content: "";
	display: block;
	position: absolute;
	left: 15px;
	width: 18px;
	height: 2.2px;
	transform: rotate(0);
	transition: all 0.25s;
}

.hamburger__top-bun {
	top: 23px;
	transform: translateY(-3px);
}

.hamburger__bottom-bun {
	bottom: 23px;
	transform: translateY(3px);
}

.open {
	transform: rotate(90deg);

	.hamburger__top-bun {
		transform: rotate(45deg) translateY(0px);
	}

	.hamburger__bottom-bun {
		transform: rotate(-45deg) translateY(0px);
	}
}

.dropdown {
	z-index: 200;
	width: 100%;
	position: absolute;
	top: 62px;
	left: 0;
	background: white;
	opacity: 1;
	display: none;
	pointer-events: none;

	.dropdown-item {
		width: 100%;
		display: block;
		color: @textmidgray;
		padding: 16px;
		font-size: 1.1rem;
		transition: all 0.2s ease;
		cursor: pointer;
		text-decoration: none;
		
		&:hover {
			background: rgba(0, 0, 0, 0.05);
		}
	}
}
</style>