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
        meta: { title: "markdown", icon: "el-icon-edit" },
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
        meta: { title: "iconfont", icon: "el-icon-star-off" },
        component: () =>
          import(/* webpackChunkName: "chunk-router" */ "@/pages/app/iconfont"),
      },
      {
        path: "/nested",
        name: "nested",
        redirect: "/nested1",
        meta: { title: "nested", icon: "el-icon-connection" },
        component: () =>
          import(/* webpackChunkName: "chunk-router" */ "@/pages/app/nested"),
        children: [
          {
            path: "/nested1",
            name: "nested1",
            redirect: "/nested1_1",
            meta: { title: "second", icon: "el-icon-lollipop" },
            component: () =>
              import(
                /* webpackChunkName: "chunk-router" */ "@/pages/app/nested/nested1.vue"
              ),
            children: [
              {
                path: "/nested1_1",
                name: "nested1_1",
                meta: { title: "thirdRoute", icon: "el-icon-ice-cream-square" },
                component: () =>
                  import(
                    /* webpackChunkName: "chunk-router" */ "@/pages/app/nested/nested1-1.vue"
                  ),
              },
            ],
          },
          {
            path: "/nested2",
            name: "nested2",
            meta: { title: "secondRoute", icon: "el-icon-ice-cream-round" },
            component: () =>
              import(
                /* webpackChunkName: "chunk-router" */ "@/pages/app/nested/nested2.vue"
              ),
          },
        ],
      },
      {
        path: "https://www.juetan.cn",
        name: "juetan",
        meta: { title: "external", icon: "el-icon-link", link: true },
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
