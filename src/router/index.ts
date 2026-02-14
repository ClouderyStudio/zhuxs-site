import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
	{
		path: '/',
		name: 'home',
		component: () => import('@/views/Home.vue')
	},
	{
		path: '/join',
		name: 'join',
		component: () => import('@/views/Join.vue')
	},
	{
		path: '/about',
		name: 'about',
		component: () => import('@/views/About.vue')
	},
	{
		path: '/donate',
		name: 'donate',
		component: () => import('@/views/Donate.vue')
	},
	{
		path: '/applications',
		name: 'applications',
		component: () => import('@/views/Applications.vue')
	},
	{
		path: '/articles',
		name: 'articles',
		component: () => import('@/views/Articles.vue')
	},
	{
		path: '/terms',
		name: 'terms',
		component: () => import('@/views/Terms.vue')
	},
	{
		path: '/rules',
		name: 'rules',
		component: () => import('@/views/Article.vue'),
		props: () => ({
			title: 'rules'
		})
	},
	{
		path: '/article',
		name: 'article',
		component: () => import('@/views/Article.vue'),
		props: (route) => ({
			title: route.query.title
		}) 
	}
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

export default router;
