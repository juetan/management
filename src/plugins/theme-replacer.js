import client from "webpack-theme-color-replacer/client";
import forElementUI from "webpack-theme-color-replacer/forElementUI";
import store from "@/store";

// 两个主题色
const themeColors = {
  green: [
    // element-ui主题色
    ...forElementUI.getElementUISeries("#10c599"),
    // element-ui功能色-成功色
    "#33cc99",
    // element-ui功能色-警报色
    "#ff9900",
    // element-ui功能色-危险色
    "#ff6666",
    // element-ui功能色-信息色
    "#959595",
    // 侧边栏背景色
    "#324554",
  ],
  blue: [
    // element-ui主题色
    ...forElementUI.getElementUISeries("#409eff"),
    // element-ui功能色-成功色
    "#67C23A",
    // element-ui功能色-警报色
    "#E6A23C",
    // element-ui功能色-危险色
    "#F56C6C",
    // element-ui功能色-信息色
    "#909399",
    // 侧边栏背景色
    "#001529",
  ],
};

let currentColors = "green";
/**
 * 切换主题色
 * @param {array} color 新的主题色
 * @returns void
 */
export function replaceThemeColors(color) {
  // 选项
  const options = { newColors: themeColors[color] };

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
