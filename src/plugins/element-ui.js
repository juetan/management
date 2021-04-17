import Vue from "vue";
import i18n from "@/lang";
import ElementUI from "element-ui";
import "@/assets/styles/vendor-element.scss";

Vue.use(ElementUI, {
  size: "medium",
  i18n: (key, value) => i18n.t(key, value),
});

export { Message as message } from "element-ui";
export { Loading as loading } from "element-ui";
