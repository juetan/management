import client from "webpack-theme-color-replacer/client";
import store from "@/store";
const themeColors = require("@/config/theme-colors");

/**
 * 切换主题色
 * @param {array} color 新的主题色
 * @returns void
 */
export function replaceThemeColors(color) {
  // 选项
  const options = { newColors: themeColors[color] };

  return client.changer.changeColor(options, Promise);
}

/**
 * 初始化主题色
 */
export function initThemeColor() {
  const savedColors = store.state.default.theme;

  if (savedColors) {
    document.body.style.display = "none";
    replaceThemeColors(savedColors).finally(() => {
      document.body.style.display = "";
    });
  }
}
