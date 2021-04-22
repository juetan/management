import client from "webpack-theme-color-replacer/client";
import forElementUI from "webpack-theme-color-replacer/forElementUI";
import store from "@/store";
const themeColors = require("@/config/theme-colors");

let currentColors = "green";
/**
 * 切换主题色
 * @param {array} color 新的主题色
 * @returns void
 */
export function replaceThemeColors(color) {
  // 选项
  const options = { newColors: themeColors[color] };
  const fc = forElementUI.getElementUISeries("#E6A23C");
  console.log(fc);
  return client.changer.changeColor(options, Promise).then(() => {
    currentColors = "green";
    store.commit("default/set_theme_colors", color);
  });
}

/**
 * 初始化主题色
 */
export function initThemeColor() {
  const savedColors = store.state.default.themeColors;

  if (savedColors) {
    document.body.style.display = "none";
    currentColors = savedColors;
    replaceThemeColors(currentColors).finally(() => {
      document.body.style.display = "";
    });
  }
}
