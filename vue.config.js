module.exports = {
  // 公共路径，因为要部署到GitHub pages上，所以将生产环境的值改成仓库名称
  publicPath: process.env.NODE_ENE === "production" ? "/management" : "/",
  // 减少生产环境下的文件体积
  productionSourceMap: false,
  // 该对象会与webpack的配置对象合并
  // configureWebpack: {
  //   name: "绝弹管理系统 - 你所不知道的风景",
  // },
  // 初始化public/index.html中的title值
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "绝弹管理系统 - 遇到你不知道的风景";
      return args;
    });
  },
};
