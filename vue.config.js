module.exports = {
  // 公共路径，因为要部署到GitHub pages上，所以将生产环境的值改成仓库名称
  publicPath: process.env.NODE_ENV === "production" ? "/management/" : "/",
  // 减少生产环境下的文件体积
  productionSourceMap: false,
  // 对象配置webpack：该对象会与webpack的配置对象合并
  configureWebpack: {
    devServer: {
      // 在hosts文件中添加127.0.0.1 www.8.com记录，再配合以下两个参数设置可使用www.8.com代替localhost:8080访问
      host: "localhost",
      // 端口设为80，方便使用本地域名开发
      port: "80",
      // 因为使用本地域名，此值需设为true，避免出现Invalid Host header的情况
      disableHostCheck: true,
    },
  },
  // 链式配置webpack
  chainWebpack: (config) => {
    // 初始化public/index.html中的title值
    config.plugin("html").tap((args) => {
      // 该值在.env.production和.env.development中配置
      args[0].title = process.env.VUE_APP_TITLE;
      return args;
    });
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/assets/styles/index.scss";`,
      },
    },
  },
};
