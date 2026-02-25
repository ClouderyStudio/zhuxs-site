import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import '@/styles/global.less';
import '@/styles/mc.less';
import '@/styles/nprogress.less';
import * as mdijs from '@mdi/js';
import mdiVue from 'mdi-vue/v3';
import VueLazyload from 'vue3-lazyload';
import { createMetaManager } from 'vue-meta';
import NProgress from 'nprogress';

const metaManager = (createMetaManager as any)()

const app = createApp(App)

app.use(mdiVue,{
	icons: mdijs
});
app.use(metaManager);
app.use(VueLazyload,{
  loading: '/images/loading.gif', // 加载中占位图
  error: '/images/error.png'      // 加载失败占位图
});

app.config.globalProperties.$open = (url: string) => {
	window.open(url);
};
app.config.globalProperties.load = false;
router.beforeEach((to, from, next) => {
	NProgress.start();
	next();
});

router.afterEach((to, from) => {
	if (to.path !== from.path) {
		document.getElementsByTagName('html')[0].scrollTo(0, 0);
	}
	NProgress.done();
	app.config.globalProperties.load = true;
});

app.use(router);
app.use(store);

app.mixin({
	metaInfo: {
		meta: [
			{ property: 'og:title', content: '竹像素 - Every Bamboo Pixel' },
			{ property: 'og:site_name', content: '竹像素' },
			{ property: 'og:type', content: 'website' },
			{ property: 'og:url', content: 'https://zhuxs.cn' },
			{
				property: 'og:image',
				content: '@/titanium.png'
			},
			{
				property: 'og:description',
				content: '这里是 竹像素 服务器官方网站，你可以在这里获取到关于 竹像素 的介绍以及服务器的运行信息。'
			},
			{ itemprop: 'name', content: '竹像素 | Every Bamboo Pixel' },
			{
				itemprop: 'description',
				content: '这里是 竹像素 服务器官方网站，你可以在这里获取到关于 竹像素 的介绍以及服务器的运行信息。'
			},
			{
				itemprop: 'image',
				content: '@/titanium.png'
			},
			{ httpEquiv: 'Content-Type', content: 'text/html; charset=utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{
				name: 'description',
				content: '这里是 竹像素 服务器官方网站，你可以在这里获取到关于 竹像素 的介绍以及服务器的运行信息。'
			},
			{
				name: 'theme-color',
				content: '#54F47F'
			}
		],
		link: [
			{
				rel: 'canonical',
				href: 'https://zhuxs.cn'
			}
		]
	}
});

app.mount('#app');