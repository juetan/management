// const ComporessionPlugin = require("compression-webpack-plugin");
const webpackThemeColorRplacer = require("webpack-theme-color-replacer");
// const forElementUI = require("webpack-theme-color-replacer/forElementUI");
const themeConfig = require("./src/config/theme.config.js");
const changeSelector = require("./src/helper/color");

module.exports = {
  // 公共路径，因为要部署到GitHub pages上，所以将生产环境的值改成仓库名称
  publicPath: process.env.NODE_ENV === "production" ? "/management/" : "/",

  // 减少生产环境下的文件体积
  productionSourceMap: true,

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
      args[0].title = `${process.env.VUE_APP_NAME} - ${process.env.VUE_APP_DESCRIPTION}`;
      return args;
    });
    // 主题功能步骤1
    config.plugin("webpackThemeColorRplacer").use(webpackThemeColorRplacer, [
      {
        matchColors: themeConfig["default"],
        fileName: "css/chunk-theme-[contenthash:8].css",
        // 使用element-ui必备，否则plain和普通按钮样式会有bug
        // changeSelector: forElementUI.changeSelector,
        changeSelector: changeSelector,
        injectCss: false,
        isJsUgly: true,
      },
    ]);

    // 打包分析
    // config
    //   .plugin("BundleAnalyzerPlugin")
    //   .use(require("webpack-bundle-analyzer").BundleAnalyzerPlugin, [
    //     {
    //       //  在默认浏览器中自动打开
    //       openAnalyzer: process.env.NODE_ENV === "development" ? false : true,
    //     },
    //   ]);

    // 生产环境下的webpack配置
    if (process.env.NODE_ENV === "production") {
      config.plugins.delete("preload");
      config.plugins.delete("prefetch");

      // 将文件压缩成.gz格式
      // config.plugin("compression").use(ComporessionPlugin, [
      //   {
      //     // 正则匹配文件后缀
      //     test: /.js$|.html$|.css$/,
      //     // 对超过10KB的文件进行压缩
      //     threshold: 1,
      //     // 不删除源文件，主要是兼容不支持gzip的服务器
      //     deleteOriginalAssets: false,
      //   },
      // ]);
    }
  },

  // css相关配置
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/assets/styles/index.scss";`,
      },
    },
  },
};
