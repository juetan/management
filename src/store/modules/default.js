import { replaceThemeColors } from "@/plugins/theme-replacer";

const state = {
  // 侧边栏是否折叠
  collapsed: false,
  // 整个应用的名称
  name: process.env.VUE_APP_NAME,
  // 整个应用的描述
  description: process.env.VUE_APP_DESCRIPTION,
  // 主题色
  themeColors: localStorage.getItem("theme_colors"),
  // 语言
  language: localStorage.getItem("language") || "zh",
};

const mutations = {
  // 设置collapsed
  trigger_collapsed: (state) => {
    state.collapsed = !state.collapsed;
  },
  // 设置state
  set_theme_colors: (state, color) => {
    // 保存在本地，下次打开时可以使用
    localStorage.setItem("theme_colors", color);
    // 设置state
    state.themeColors = color;
  },
  set_language: (state, lang) => {
    state.language = lang;
    localStorage.setItem("language", lang);
  },
};

const actions = {
  // 切换主题
  set_theme(context, theme) {
    // 切换主题的主函数，传入的theme为string类型
    replaceThemeColors(theme).then(() => {
      // 因为vuex在i18n之前引用，会有冲突，此处不添加message等弹窗，转由promise执行
      context.commit("set_theme_colors", theme);
    });
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
