import Vue from "vue";
import vueRouter from "vue-router";
import normalRoutes from "./modules/normal-routes";
import Nprogress from "@/plugins/nprogress";
import store from "@/store";
import { message } from "@/plugins/element-ui";
import i18n from "@/lang";
import hasCapability from "@/helper/hasCapability";

Vue.use(vueRouter);

// 路由白名单
const whiteList = ["/login", "/404"];

// 创建实例
const router = new vueRouter({
  // 开发环境使用history模式，生产环境使用hash模式
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

  // 用户已登录
  if (token) {
    // 如果访问的是login，重定向回首页
    if (to.path === "/login") {
      // 弹窗提示已登录并返回首页
      message({
        message: i18n.t("router.loginedinfo"),
        type: "success",
        duration: 2000,
        onClose() {
          next({ path: "/" });
        },
      });
    } else {
      // 检查是否已获取用户角色等信息
      const roled = store.state.user.role && store.state.user.role.length !== 0;
      if (!roled) {
        // 获取用户信息并跳转路由
        store
          .dispatch("user/get_userinfo")
          .then(() => {
            next();
          })
          .catch(() => {
            // 获取失败的话返回登录页
            store.commit("user/remove_token");
            Nprogress.done();
            next("/login");
          });
      } else {
        // 判断是否有访问该页面的权限
        if (hasCapability(to.meta.capability)) {
          next();
        } else {
          message({
            type: "error",
            message: i18n.t("router.hasNoCapability"),
            duration: 2000,
            onClose() {
              next("/");
            },
          });
        }
      }
    }
  } else {
    // 这里需要分开判断，否则会死循环(暂时不加白名单)
    if (whiteList.includes(to.path)) {
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
  // 如果有标题则更新标题
  if (to.meta && to.meta.title) {
    // 更新title
    document.title =
      i18n.t("router." + to.meta.title) + " - " + i18n.t("system.description");
  } else {
    document.title =
      i18n.t("system.title") + " - " + i18n.t("system.description");
  }
});

export default router;
