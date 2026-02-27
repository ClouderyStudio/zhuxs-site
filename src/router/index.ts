import { createMemoryHistory,createWebHashHistory, createRouter } from 'vue-router';

const routes = [
	{
		name: 'home',
		path: '/',
		component: () => import('@/views/Home.vue')
	},
	{
		name: 'join',
		path: '/join',
		component: () => import('@/views/Join.vue')
	},
	{
		name: 'about',
		path: '/about',
		component: () => import('@/views/About.vue')
	},
	{
		name: 'donate',
		path: '/donate',
		component: () => import('@/views/Donate.vue')
	},
	{
		name: 'applications',
		path: '/applications',
		component: () => import('@/views/Applications.vue')
	},
	{
		name: 'articles',
		path: '/articles',
		component: () => import('@/views/Articles.vue')
	},
	{
		name: 'terms',
		path: '/terms',
		component: () => import('@/views/Terms.vue')
	},
	{
		name: 'rules',
		path: '/rules',
		component: () => import('@/views/Article.vue'),
		props: () => ({
			title: 'rules'
		})
	},
	{
		name: 'article',
		path: '/articles/:title',
		component: () => import('@/views/Article.vue'),
	}
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
	})

export default router;
