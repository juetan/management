const ComporessionPlugin = require("compression-webpack-plugin");

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
      args[0].title = `${process.env.VUE_APP_NAME} - ${process.env.VUE_APP_DESCRIPTION}`;
      return args;
    });

    // 开发环境下的配置
    if (process.env.NODE_ENV === "development") {
      config
        .plugin("BundleAnalyzerPlugin")
        .use(require("webpack-bundle-analyzer").BundleAnalyzerPlugin, [
          {
            //  `server`，`static`或`disabled`。
            analyzerMode: "server",
            //  将在“服务器”模式下使用的主机启动HTTP服务器。
            analyzerHost: "127.0.0.1",
            //  将在“服务器”模式下使用的端口启动HTTP服务器。
            analyzerPort: 12345,
            //  路径捆绑，将在`static`模式下生成的报告文件。
            reportFilename: "report.html",
            //  `stat`，`parsed`或者`gzip`中的一个。
            defaultSizes: "parsed",
            //  在默认浏览器中自动打开报告
            openAnalyzer: false,
            //  如果为true，则Webpack Stats JSON文件将在bundle输出目录中生成
            generateStatsFile: false,
            //  如果`generateStatsFile`为`true`，将会生成Webpack Stats JSON文件的名字。
            statsFilename: "stats.json",
            //  在这里查看更多选项：https：  //github.com/webpack/webpack/blob/webpack-1/lib/Stats.js#L21
            statsOptions: null,
            // 'info'，'warn'，'error'或'silence'。
            logLevel: "info",
          },
        ]);
    }

    // 生产环境下的webpack配置
    if (process.env.NODE_ENV === "production") {
      config.plugins.delete("preload");
      config.plugins.delete("prefetch");

      // 将文件压缩成.gz格式
      config.plugin("compression").use(ComporessionPlugin, [
        {
          // 正则匹配文件后缀
          test: /.js$|.html$|.css$/,
          // 对超过10KB的文件进行压缩
          threshold: 1,
          // 不删除源文件，主要是兼容不支持gzip的服务器
          deleteOriginalAssets: false,
        },
      ]);
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
