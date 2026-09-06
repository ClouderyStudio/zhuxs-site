import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/styles/global.less";
import "@/styles/mc.less";
import "@/styles/nprogress.less";
import { ASSET_BASE } from "@/config";
import * as mdijs from "@mdi/js";
import mdiVue from "mdi-vue/v3";
import VueLazyload from "vue3-lazyload";
import NProgress from "nprogress";
import { createHead } from "@unhead/vue/client";

const app = createApp(App);
const head = createHead({
  init: [
    {
      title: "竹像素 - BambooPixel",
      titleTemplate: "%s | 竹像素",
      htmlAttrs: {
        lang: "zh-CN",
      },
    },
  ],
});

app.use(mdiVue, {
  icons: mdijs,
});
app.use(VueLazyload, {
  loading: `${ASSET_BASE}/loading.gif`,
  error: `${ASSET_BASE}/error.png`,
});
app.use(head);

app.config.globalProperties.$open = (url: string) => {
  window.open(url);
};

router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

router.afterEach((to, from) => {
  if (to.path !== from.path) {
    document.getElementsByTagName("html")[0].scrollTo(0, 0);
  }
  NProgress.done();
});

app.use(router);
app.use(store);

app.mount("#app");
