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
// import checkView from 'vue-check-view';
// import VueLazyload from 'vue-lazyload';
import { createMetaManager } from 'vue-meta';
import NProgress from 'nprogress';

const metaManager = (createMetaManager as any)()

const app = createApp(App)

app.use(mdiVue,{
	icons: mdijs
});
app.use(metaManager);
// app.use(checkView);
// app.use(VueLazyload);

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

app.mount('#app');