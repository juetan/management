import Vue from "vue";
import vueRouter from "vue-router";
import normalRoutes from "./modules/normal-routes";
import Nprogress from "@/plugins/nprogress";
import store from "@/store";

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
  let token = store.state.user.token;
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
router.afterEach((to) => {
  if (to.meta && to.meta.title) {
    // 更新title
    document.title = `${to.meta.title} - ${process.env.VUE_APP_DESCRIPTION}`;
  } else {
    document.title = `${process.env.VUE_APP_NAME} - ${process.env.VUE_APP_DESCRIPTION}`;
  }
  // 结束进度条
  Nprogress.done();
});

export default router;
