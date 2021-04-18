export default [
  {
    path: "/",
    name: "layout",
    redirect: "/home",
    meta: { title: "home", icon: "xxx" },
    component: () => import("@/pages/layout"),
    children: [
      {
        path: "/home",
        name: "home",
        meta: { title: "home", icon: "icon-home" },
        component: () =>
          import(/* webpackChunkName: "chunk-home" */ "@/pages/app/home"),
      },
      {
        path: "/table",
        name: "table",
        meta: { title: "datatable", icon: "icon-equi" },
        component: () => import("@/pages/app/table"),
      },
      {
        path: "/markdown",
        name: "markdown",
        meta: { title: "markdown", icon: "el-icon-edit-outline" },
        component: () =>
          import(/* webpackChunkName: "chunk-markdown" */ "@/pages/app/card"),
      },
      {
        path: "/theme",
        name: "theme",
        meta: { title: "theme", icon: "icon-skin" },
        component: () =>
          import(/* webpackChunkName: "chunk-router" */ "@/pages/app/theme"),
      },
      {
        path: "/language",
        name: "language",
        meta: { title: "language", icon: "icon-language1" },
        component: () =>
          import(/* webpackChunkName: "chunk-router" */ "@/pages/app/language"),
      },
      {
        path: "/iconfont",
        name: "iconfont",
        meta: { title: "iconfont", icon: "icon-zh" },
        component: () =>
          import(/* webpackChunkName: "chunk-router" */ "@/pages/app/iconfont"),
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    meta: { title: "login", icon: "xxx" },
    component: () =>
      import(/* webpackChunkName: "chunk-login" */ "@/pages/login"),
  },
  {
    path: "/",
    name: "404",
    meta: { title: "404", icon: "xxx" },
    component: () =>
      import(/* webpackChunkName: "chunk-router" */ "@/pages/404"),
  },
];
