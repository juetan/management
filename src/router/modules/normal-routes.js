export default [
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
