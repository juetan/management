import Vue from "vue";
import vueRouter from "vue-router";
import normalRoutes from "./modules/normal-routes";
import Nprogress from "@/plugins/nprogress";
import store from "@/store";
import { message } from "@/plugins/element-ui";

Vue.use(vueRouter);

// 创建实例
const router = new vueRouter({
  // 目前：开发环境使用history模式，生产环境使用hash模式
  mode: process.env.VUE_APP_ROUTER_MODE,
  // 先挂载常用路由，需要权限的路由动态挂载
  routes: normalRoutes,
});

// 全局前置守卫
router.beforeEach(function(to, from, next) {
  // 开始进度条
  Nprogress.start();

  // 从本地获取登录令牌(token)
  let token = store.state.user.token;

  // 如果用户已登录则正常导航
  if (token) {
    if (to.path === "/login") {
      message({
        message: "你已经登录，即将跳转首页",
        type: "success",
        duration: 2000,
        onClose() {
          next({ path: "/" });
        },
      });
    } else {
      next();
    }
  } else {
    if (to.path === "/login") {
      next();
    } else {
      next({ path: "/login" });
    }
  }
});

// 全局后置守卫
router.afterEach((to) => {
  // 结束进度条
  Nprogress.done();

  if (to.meta && to.meta.title) {
    // 更新title
    document.title = `${to.meta.title} - ${process.env.VUE_APP_DESCRIPTION}`;
  } else {
    document.title = `${process.env.VUE_APP_NAME} - ${process.env.VUE_APP_DESCRIPTION}`;
  }
});

export default router;
