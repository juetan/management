基于Vue2.x + Vue-cli4.x的后台管理系统，主要包含路由自动挂载、主题换肤、多语言国际化、表格操作、图表展示、全屏操作、字体图标、权限控制、路由嵌套和数据mock等功能。注意：本项目为个人开源项目，部分内容学习自vue-element-admin等优秀开源作品，不做业务开发，仅用于实践哈。

- 演示地址：[https://juetan.github.io/management](https://juetan.github.io/management) (管理账号：admin-admin；普通账号：juetan-juetan)
- 文档地址：[https://www.juetan.cn/tag/management](https://www.juetan.cn/tag/management)

## 技术栈

基于[NodeJS](https://nodejs.org/)、[VS Code](https://code.visualstudio.com/)和[vue-cli](https://cli.vuejs.org)开发，技术栈主要以[vue](https://vuejs.org)、[axios](http://www.axios-js.com/)、[vuex](https://vuex.vuejs.org/)、[vue-router](https://router.vuejs.org/)和[element-ui](https://element.eleme.cn/)为主。此外，还包含以下依赖或包：

- 主题修改基于[webpack-theme-color-replacer](https://github.com/hzsrc/webpack-theme-color-replacer)
- css预处理基于[scss](https://sass-lang.com/)
- 国际化基于[vue-i18n](https://kazupon.github.io/vue-i18n/)
- 数据mock基于[mockjs](http://mockjs.com/)
- 图表展示基于[echarts](https://echarts.apache.org/zh/index.html)
- markdown基于[mavon-editor](https://github.com/hinesboy/mavonEditor)
- 全屏展示基于[screenfull](https://github.com/sindresorhus/screenfull.js/)
- 计数动效基于[countTo](https://github.com/PanJiaChen/vue-countTo)
- 进度加载基于[nprogress](https://github.com/rstacruz/nprogress)
- 版本控制基于[Git](https://git-scm.com/)
- 静态部署基于[Github Pages](https://pages.github.com/)和[Github Action](https://github.com/features/actions)

## 本地使用

下载前确保本地已安装[NodeJS](https://nodejs.org)，查看源代码推荐下载[VS Code](https://code.visualstudio.com/)编辑器。

1：安装有git的话直接按如下克隆到本地，没有的话可点击项目仓库里**Code**中的**Donwload ZIP**按钮下载；

```
git clone https://github.com/juetan/management.git
```

2： 安装项目依赖，安装可能有点慢等会就好

```
npm install
```

3.：启动项目

```
npm run serve
```

4.：打开以下网址即可访问(管理账号：admin-admin；普通账号：juetan-juetan)

```
localhost:80
```

## 主要功能

### 主题换肤

Vue-element-admin里提供了两种修改主题的思路，但是只支持element-ui的颜色，不支持vue组件内的变量颜色。恰好遇到一个webpack插件-[webpack-theme-color-replacer](https://www.npmjs.com/package/webpack-theme-color-replacer)，可以完美支持这些功能且体积更小，原理主要是在打包时将涉及到的颜色样式单独提取出来，更换主题时进行正则替换。

### 语言国际

安装完`vue-i18n`差不多就能上手使用，但这里需要注意的是与第三方框架的语言同步，如element-ui、echarts和mavon-editor等，好在这些开源包都有提供国际化的功能，这里注意下加入的内容即可。

### 权限控制

基于权限(capability)和角色(role)的组合，进行权限控制，不仅适用于页面级权限控制，同样适用于按钮级的权限控制。

### CSS预处理

这里采用scss，一是scss功能和使用都广泛些，二是element-ui也是采用的scss，修改主题的时候比较方便。字体图标经过优化，只使用单个类名进行调用。

### 状态管理

在这里使用vuex我觉得是很有必要的，不单是vue组件间的状态共享，还涉及到第三方依赖对状态的修改和读取。vuex采用模块化封装，读取统一从state读取，更新从actions中操作。

### 网络请求

由于是纯前端项目，数据MOCK多少是个问题，之前有尝试过[Faskmock](https://www.fastmock.site/)，但有时候感觉不是很稳定，最后我还是选择使用纯MOCKJS是生成数据。网络请求使用axios进行封装，以模块化的方式进行调用，这里与vuex结合得比较深。

### 代码压缩

GitHub pages使用Nginx服务器，因而支持html、css和js文件的Gzip压缩(不支持图片压缩)。此外，在打包时关闭sourcemap可以减少文件体积。如果只是部署到github，没必要使用`compression-webpack-plugin`插件，从我测试的情况来看，github只支持动态压缩不支持静态压缩。这里的意思是，Github Pages不会直接传输你压缩好的`.gz`文件，而是把你的`.js`文件文件压缩为`.gz`后再传输。

### 路由自动挂载

基于vue-router+el-menu进行路由的自动挂载，同时实现权限验证，路由视图过渡优化等功能，以模块化的方式进行处理。

### 静态部署

个人开源项目一般都有部署到Github pages的需求，除了创建`<username>.github.io`仓库这样的方式，其实还可以通过在普通仓库创建`gh-pages`分支来挂载静态页面(上传后通过`<username>.github.io/<repository>`访问)。再结合[Github Action](https://github.com/features/actions)，可以帮助我们进行CI构建和部署。

## 开发笔记

该项目是我准备持续更新的开源项目，主要是想不断实践我的某些新想法，并留下一些经验积累。因此，在开发过程中我会记录一些笔记和想法，目前我整理出来的文章有以下这些，如果你感兴趣可以点击链接查看详细内容：

1. [项目的启动和一些基本配置](https://www.juetan.cn/project/71.html)
2. [使用Github Action进行自动构建和静态部署](https://www.juetan.cn/project/72.html)
3. [数据的模拟和使用](https://www.juetan.cn/project/73.html)
4. [vuex和模块化的状态管理](https://www.juetan.cn/project/74.html)
5. [axios的封装和使用](https://www.juetan.cn/project/75.html)
6. [vue-i18n和多语言国际化的处理](https://www.juetan.cn/project/76.html)
7. [vue-ruoter的封装和处理](https://www.juetan.cn/project/77.html)
8. [字体、样式等静态资源的处理](https://www.juetan.cn/project/78.html)
9. [基于webpack-theme-color-replacer主题切换功能的实现](https://www.juetan.cn/project/79.html)
10. [router+el-menu实现导航菜单的自动挂载](https://www.juetan.cn/project/80.html)
11. [基于角色(role)和权限(capability)的内容控制](https://www.juetan.cn/project/81.html)
12. [使用webpack插件进行体积分析和优化](https://www.juetan.cn/project/82.html)

## 最后

如果在使用过程中遇到问题，欢迎向我提PR。
