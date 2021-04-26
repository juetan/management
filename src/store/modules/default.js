import { replaceThemeColors } from "@/plugins/theme-replacer";
import i18n from "@/lang";

const state = {
  // 侧边栏是否折叠
  collapsed: false,
  // 整个应用的名称
  name: process.env.VUE_APP_NAME,
  // 整个应用的描述
  description: process.env.VUE_APP_DESCRIPTION,
  // 主题色
  theme: localStorage.getItem("theme") || "default",
  // 语言
  language: localStorage.getItem("language") || "zh",
};

const mutations = {
  // 设置collapsed
  trigger_collapsed: (state) => {
    state.collapsed = !state.collapsed;
  },
  // 设置主题
  set_theme: (state, color) => {
    localStorage.setItem("theme", color);
    state.theme = color;
  },
  // 设置语言
  set_language: (state, lang) => {
    localStorage.setItem("language", lang);
    state.language = lang;
  },
};

const actions = {
  // 切换主题
  switch_theme(context, theme) {
    // 切换主题的主函数，传入的theme为string类型
    return replaceThemeColors(theme).then(() => {
      // 因为vuex在i18n之前引用，会有冲突，此处不添加message等弹窗，转由promise执行
      context.commit("set_theme", theme);
    });
  },
  // 切换语言
  switch_language(context, language) {
    context.commit("set_language", language);
    i18n.locale = language;
    return Promise.resolve();
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
