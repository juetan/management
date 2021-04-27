const forElementUI = require("webpack-theme-color-replacer/forElementUI");

// 两个主题色 这里使用COMMONJS语法，因为在vue.config.js不能使用es module语法
// 颜色的16进制能简写尽量简写，例如#3c9不要写成#33cc99，否则会造成开发环境和生产环境下的样式不一致的问题
module.exports = {
  default: [
    // element-ui主题色
    ...forElementUI.getElementUISeries("#10c599"),
    // element-ui功能色-成功色
    ...forElementUI.getElementUISeries("#3c9"),
    // element-ui功能色-警报色
    ...forElementUI.getElementUISeries("#f90"),
    // element-ui功能色-危险色
    ...forElementUI.getElementUISeries("#f66"),
    // element-ui功能色-信息色
    ...forElementUI.getElementUISeries("#959595"),
    // 侧边栏背景色
    "#324554",
  ],
  skyblue: [
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

// const xx = forElementUI.getElementUISeries("#324554");

// console.log(xx);
