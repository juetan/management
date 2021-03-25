export default [
  {
    path: "/home",
    name: "home",
    meta: {
      title: "系统首页",
      icon: "el-icon-menu",
      role: ["admin", "editor"],
    },
    component: () => import("@/views/application/equiment"),
  },
];
