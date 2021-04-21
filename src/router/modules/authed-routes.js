export default [
  {
    path: "/admin-page",
    name: "adminPage",
    meta: {
      title: "adminCapability",
      icon: "el-icon-menu",
      capability: "visitAdminPage",
    },
    component: () => import("@/pages/app/capability/admin"),
  },
  {
    path: "/editor-page",
    name: "editorPage",
    meta: {
      title: "editorCapability",
      icon: "el-icon-menu",
      capability: "visitEditorPage",
    },
    component: () => import("@/pages/app/capability/editor"),
  },
];
