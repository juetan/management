import Vue from "vue";
import i18n from "@/lang";
import ElementUI from "element-ui";
import "@/assets/styles/vendors/element-variables.scss";

Vue.use(ElementUI, {
  size: "medium",
  i18n: (key, value) => i18n.t(key, value),
});

export { Message as message } from "element-ui";
