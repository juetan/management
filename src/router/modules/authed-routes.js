export default [
  {
    path: "/admin-page",
    name: "adminPage",
    meta: {
      title: "adminCapability",
      icon: "icon-cap",
      capability: "visitAdminPage",
    },
    component: () => import("@/pages/app/capability"),
  },
  {
    path: "/editor-page",
    name: "editorPage",
    meta: {
      title: "editorCapability",
      icon: "el-icon-lock",
      capability: "visitEditorPage",
    },
    component: () => import("@/pages/app/capability"),
  },
];
