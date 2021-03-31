export default [
  {
    path: "/",
    name: "layout",
    redirect: "/home",
    meta: { title: "账号登录", icon: "xxx" },
    component: () => import("@/pages/layout"),
    children: [
      {
        path: "/home",
        name: "home",
        meta: { title: "系统首页", icon: "icon-home" },
        component: () => import("@/pages/app/home"),
      },
      {
        path: "/table",
        name: "table",
        meta: { title: "设备管理", icon: "icon-equi" },
        component: () => import("@/pages/app/table"),
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    meta: { title: "账号登录", icon: "xxx" },
    component: () =>
      import(/* webpackChunkName: "routelogin" */ "@/pages/login"),
  },
  {
    path: "/",
    name: "404",
    meta: { title: "404", icon: "xxx" },
    component: () => import(/* webpackChunkName: "route404" */ "@/pages/404"),
  },
];
