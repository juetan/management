import Vue from "vue";
import VueI18n from "vue-i18n";
// import store from "@/store";
// element-ui的语言包
import locale_element_en from "element-ui/lib/locale/lang/en";
import locale_element_zh from "element-ui/lib/locale/lang/zh-CN";
// 本项目的语言包
import locale_zh from "./modules/zh";
import locale_en from "./modules/en";

Vue.use(VueI18n);

// 语言包合并
const messages = {
  zh: {
    ...locale_element_zh,
    ...locale_zh,
  },
  en: {
    ...locale_element_en,
    ...locale_en,
  },
};
// 创建实例
const lang = new VueI18n({
  locale: localStorage.getItem("language") || "zh",
  // locale: store.state.default.language,
  messages,
});

export default lang;
