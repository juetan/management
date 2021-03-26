import Vue from "vue";

// 状态管理
import store from "@/store";

// 多语言国际化
import i18n from "@/lang";

// 封装过的element-ui，包含新的主题和多语言切换
import "@/plugins/element-ui.js";

// 配置文件，包含vue.config和其他配置
import "@/config";

// 网络请求，挂在到vue原型上
import "@/api";

// 路由控制
import router from "@/router";

new Vue({
  router,
  store,
  i18n,
  render: (h) => h("div", { attrs: { id: "app" } }, [h("router-view")], 1),
}).$mount("#app");
