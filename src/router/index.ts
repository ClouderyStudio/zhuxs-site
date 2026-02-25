import { createMemoryHistory, createRouter } from 'vue-router';

const routes = [
	{
		path: '/',
		component: () => import('@/views/Home.vue')
	},
	{
		path: '/join',
		component: () => import('@/views/Join.vue')
	},
	{
		path: '/about',
		component: () => import('@/views/About.vue')
	},
	{
		path: '/donate',
		component: () => import('@/views/Donate.vue')
	},
	{
		path: '/applications',
		component: () => import('@/views/Applications.vue')
	},
	{
		path: '/articles',
		component: () => import('@/views/Articles.vue')
	},
	{
		path: '/terms',
		component: () => import('@/views/Terms.vue')
	},
	{
		path: '/rules',
		component: () => import('@/views/Article.vue'),
		props: () => ({
			title: 'rules'
		})
	},
	{
		path: '/article/:title',
		component: () => import('@/views/Article.vue'),
	}
];

const router = createRouter({
	history: createMemoryHistory(),
	routes,
	})

export default router;
