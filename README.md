基于vue-cli4+vue2的后台管理系统，主要包含动态路由、主题更换、国际化、表格操作、图表展示、全屏操作、markdown和数据mock等功能。注意：本项目部分内容学习自vue-element-admin，不做具体业务的开发，仅用于工程化开发方面的实践。
- 演示地址：https://juetan.github.io/management
- 文档地址：https://www.juetan.cn。

## 技术栈
基于[NodeJS](https://nodejs.org/)、[VS Code](https://code.visualstudio.com/)和[vue-cli](https://cli.vuejs.org)开发，技术栈主要以[vue](https://vuejs.org)、[axios](http://www.axios-js.com/)、[vuex](https://vuex.vuejs.org/)、
[vue-router](https://router.vuejs.org/)和[element-ui](https://element.eleme.cn/)为主。此外，还包含以下依赖或包：

- 主题修改基于[webpack-theme-color-replacer](https://www.npmjs.com/package/webpack-theme-color-replacer)
- css预处理基于[scss](https://www.sass.hk/)
- 国际化基于[vue-i18n](https://kazupon.github.io/vue-i18n/)
- 数据mock基于[fastmock](https://www.fastmock.site/)和[mockjs](http://mockjs.com/)
- 图表展示基于[echarts](https://echarts.apache.org/zh/index.html)
- markdown基于[mavon-editor](https://github.com/hinesboy/mavonEditor#readme)
- 全屏展示基于[screenfull](https://github.com/sindresorhus/screenfull.js/)
- 计数动效基于[countTo](https://www.npmjs.com/package/vue-count-to)
- 进度加载基于[nprogress](https://github.com/rstacruz/nprogress)
- 版本控制基于[Git](https://git-scm.com/)
- 静态部署基于[Github Pages](https://pages.github.com/)和[Github Action](https://github.com/features/actions)

## 本地使用
下载前确保本地已安装[NodeJS](https://nodejs.org)，查看源代码推荐下载[VS Code](https://code.visualstudio.com/)编辑器。
1. 安装有git的话直接按如下克隆到本地，没有的话可点击项目仓库里**Code**中的**Donwload ZIP**按钮下载；
```
git clone https://www.github.com/juetan/management
```
2. 安装项目依赖，安装可能有点慢等会就好
```
npm install
```
3. 启动项目
```
npm run serve
```
4. 打开以下网址即可访问(账号：admin；密码：123456)
```
localhost:8080
```

## 预览图


## 值得一看
本项目部分内容从[Vue-element-admin](https://github.com/PanJiaChen/vue-element-admin/)学习而来，但并没有直接克隆修改，而是参照着从零开始构建，我在以下几方面进行了自己的修改：

### axios封装
Vue-element-admin中的axios封装，比较偏向于函数调用风格，我比较喜欢对象调用风格的封装，所以将导出的对象挂在在vue原型上。

### 主题修改
Vue-element-admin里提供了两种修改主题的思路，但是只支持element-ui的颜色，不支持vue组件内的变量颜色。恰好遇到一个webpack插件-[webpack-theme-color-replacer](https://www.npmjs.com/package/webpack-theme-color-replacer)，可以完美支持这些功能且体积更小，原理主要是在打包时将涉及到的颜色样式单独提取出来，更换主题时进行正则替换即可。

### css预处理
我偏向于采用scss，一是scss功能和使用都广泛些，二是element-ui也是采用的scss，修改主题的时候比较方便。关于css文件和样式的规划，我在知乎看到一篇[7个文件夹+1个文件](https://vuejs.org)的文章，感觉非常受用，于是按照其思路进行了自己的改装。

### 数据mock
关于数据mock，我感觉纯前端使用mockjs是可以的，但本地server或远程server是比较理想的方式，本地server适合内网开发，而远程server则无限制，但如果不是自己的server有时可能会挂掉。这里我选择用[Faskmock](https://www.fastmock.site/)，这是一个在线接口mock平台，按照MockJS的语法生成数据即可使用，比较真实地模拟生产环境。

### 静态部署
这种项目一般都有部署到Github pages的需求，但是手动`npm run build`，再将dist文件夹`git push`到github有些繁琐。在[Vue-CLI](https://cli.vuejs.org)的官方文档，粗略提到过可以用[TravisCI](https://cli.vuejs.org/guide/deployment.html#github-pages)进行部署，其实GitHub本身也有类似的CI工具--[Github Action](https://github.com/features/actions)。使用这个工具，仓库`master`分支为主分支，`gh-pages`分支为构建后的分支，并可以通过`https://<username>.github.io/<repository>`访问部署后的项目。

### 代码压缩
GitHub pages使用Nginx服务器，因而支持html、css和js文件的Gzip压缩(图片文件不建议压缩)。在打包时，建议关闭sourcemap这样可以减少体积，此外element-ui也可以按需加载。

但从我测试的情况来看，只支持动态压缩不支持静态压缩。这里的意思是，Github Pages不会直接传输你压缩好的`.gz`文件，而是把你的`.js`文件文件压缩为`.gz`后再传输。
可以在浏览器的`network`面板看到，已经开启gzip压缩(看字段`content-encoding:gzip`)，但`etag`仍然为`w/xxxx`，这里的`w`指`weak`，指内容经过Nginx压缩。

部分异步路由进行异步加载

## 开发文档
本项目不面向具体业务，仅用作个人在工程化方面的实践和分享。我在开发过程中记录了一些想法和实践，如果你感兴趣可以点击链接查看详细内容：

- axios封装的2种方式和fastmock数据模拟
- vuex的封装和状态管理
- vue-router的封装和element-ui菜单的处理
- 使用webpack-theme-color-replacer进行主题切换
- 使用Github Pages+Github Action进行CI构建
- SCSS使用和css文件结构处理

## 最后
如果在使用过程中遇到问题，欢迎向我提PR。


