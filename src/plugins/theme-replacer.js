import client from "webpack-theme-color-replacer/client";
import store from "@/store";
const themeConfig = require("@/config/theme.config.js");

// 替换主题色
export function replaceThemeColors(color) {
  // 选项
  const options = { newColors: themeConfig[color] };
  return client.changer.changeColor(options, Promise);
}

// 初始化主题色
export function initThemeColor() {
  // 获取当前主题
  const currentTheme = store.state.default.theme;
  if (currentTheme) {
    document.body.style.display = "none";
    // 替换颜色
    replaceThemeColors(currentTheme).finally(() => {
      document.body.style.display = "";
    });
  }
}
