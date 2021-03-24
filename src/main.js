import Vue from "vue";
import App from "./App.vue";
import store from "@/store";
import api from "@/api";
import i18n from "@/lang";
import elementUI from "element-ui";
import "@/assets/styles/element-variables.scss";

Vue.config.productionTip = false;
Vue.prototype.$api = api;
Vue.use(elementUI, {
  size: "medium",
  i18n: (key, value) => i18n.t(key, value),
});

new Vue({
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
