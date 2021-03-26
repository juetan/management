const ComporessionPlugin = require("compression-webpack-plugin");

module.exports = {
  // 公共路径，因为要部署到GitHub pages上，所以将生产环境的值改成仓库名称
  publicPath: process.env.NODE_ENV === "production" ? "/management/" : "/",

  // 减少生产环境下的文件体积
  productionSourceMap: false,

  // 对象配置webpack：该对象会与webpack的配置对象合并
  configureWebpack: {
    // 输出文件配置
    // output: {
    //   // chunkFilename: "[chunk-bundle.[contenthash:8].js",
    // },

    devServer: {
      // 在hosts文件中添加127.0.0.1 www.8.com记录，再配合以下两个参数设置可使用www.8.com代替localhost:8080访问
      host: "localhost",
      // 端口设为80，方便使用本地域名开发
      port: "80",
      // 因为使用本地域名，此值需设为true，避免出现Invalid Host header的情况
      disableHostCheck: true,
    },

    // webpack插件配置
    // plugins: [
    //   // 生产环境进行gzip压缩
    //   process.env.NODE_ENV === "production"
    //     ? new ComporessionPlugin({
    //         // 正则匹配文件后缀
    //         test: /.js$|.html$|.css$/,
    //         // 对超过10KB的文件进行压缩
    //         threshold: 10240,
    //         // 不删除源文件，主要是兼容不支持gzip的服务器
    //         deleteOriginalAssets: false,
    //       })
    //     : return void,
    // ],
  },

  // 链式配置webpack
  chainWebpack: (config) => {
    // 初始化public/index.html中的title值
    config.plugin("html").tap((args) => {
      // 该值在.env.production和.env.development中配置
      args[0].title = `${process.env.VUE_APP_NAME} - ${process.env.VUE_APP_DESCRIPTION}`;
      return args;
    });
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
