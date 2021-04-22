const forElementUI = require("webpack-theme-color-replacer/forElementUI");

// 两个主题色 这里使用COMMONJS语法，因为在vue.config.js不能使用es module语法
module.exports = {
  green: [
    // element-ui主题色
    ...forElementUI.getElementUISeries("#10c599"),
    // element-ui功能色-成功色
    ...forElementUI.getElementUISeries("#33cc99"),
    // element-ui功能色-警报色
    ...forElementUI.getElementUISeries("#ff9900"),
    // element-ui功能色-危险色
    ...forElementUI.getElementUISeries("#ff6666"),
    // element-ui功能色-信息色
    ...forElementUI.getElementUISeries("#959595"),
    // 侧边栏背景色
    "#324554",
  ],
  blue: [
    // element-ui主题色
    ...forElementUI.getElementUISeries("#409eff"),
    // element-ui功能色-成功色
    ...forElementUI.getElementUISeries("#67C23A"),
    // element-ui功能色-警报色
    ...forElementUI.getElementUISeries("#E6A23C"),
    // element-ui功能色-危险色
    ...forElementUI.getElementUISeries("#F56C6C"),
    // element-ui功能色-信息色
    ...forElementUI.getElementUISeries("#909399"),
    // 侧边栏背景色
    "#001529",
  ],
};
