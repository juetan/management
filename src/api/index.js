import Vue from "vue";
import request from "./request";

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

const api = {
  ...modules,
};

Vue.prototype.$api = api;

Vue.prototype.$request = request;

export default api;
