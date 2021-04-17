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
  set_theme_colors: (state, color) => {
    state.themeColors = color;
    localStorage.setItem("theme_colors", color);
  },
  set_language: (state, lang) => {
    state.language = lang;
    localStorage.setItem("language", lang);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
};
