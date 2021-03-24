import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// 使用require.context自动引入modules目录下的所有文件
const moduleFiles = require.context("./modules", true, /\.js$/);

// moduleFiles既是函数也是对象，此处作对象调用
const modules = moduleFiles.keys().reduce((modules, modulePath) => {
  // 正则替换，例如将./user.js替换为user
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, "$1");
  // 此处作函数调用，类似于import
  const module = moduleFiles(modulePath);
  // 将所有模块放在一个数组内
  modules[moduleName] = module.default;
  return modules;
}, {});

// 创建vuex实例
const store = new Vuex.Store({
  modules,
});

export default store;
