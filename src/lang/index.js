import Vue from "vue";
import VueI18n from "vue-i18n";

import locale_element_en from "element-ui/lib/locale/lang/en";
import locale_element_zh from "element-ui/lib/locale/lang/zh-CN";
import locale_zh from "./modules/zh";
import locale_en from "./modules/en";

Vue.use(VueI18n);

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

const lang = new VueI18n({
  locale: "zh",
  messages,
});

export default lang;
