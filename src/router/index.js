import Vue from "vue";
import vueRouter from "vue-router";
import normalRoutes from "./modules/normal-routes";
import Nprogress from "@/plugins/nprogress";

Vue.use(vueRouter);

const router = new vueRouter({
  mode: process.env.VUE_APP_ROUTER_MODE,
  routes: normalRoutes,
});

// 全局前置守卫
router.beforeEach(function(to, from, next) {
  // 开始进度条
  Nprogress.start();
  // 从本地获取登录令牌(token)
  let token = localStorage.getItem("ACCESS_TOKEN");
  // 如果用户已登录则正常导航
  if (token) {
    next();
  } else {
    if (to.path === "/login") {
      next();
    } else {
      next({ path: "/login" });
    }
  }
});

// 全局后置守卫
router.afterEach(() => {
  // 结束进度条
  Nprogress.done();
});

export default router;
