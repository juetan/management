import Vue from "vue";
// 数据模拟
import "/mock/server.js";
// 状态管理
import store from "@/store";
// 语言国际
import i18n from "@/lang";
// 封装过的element-ui，包含新的主题和多语言切换
import "@/plugins/element-ui.js";
// 配置文件
import "@/config";
// 网络请求
import request from "@/api";
Vue.prototype.$request = request;
// 路由控制
import router from "@/router";
// 主题换肤
import { initThemeColor } from "@/plugins/theme-replacer";
initThemeColor();

new Vue({
  router,
  store,
  i18n,
  render: (h) => h("div", { attrs: { id: "app" } }, [h("router-view")], 1),
}).$mount("#app");
