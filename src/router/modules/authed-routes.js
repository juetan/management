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
      icon: "icon-cap",
      capability: "visitEditorPage",
    },
    component: () => import("@/pages/app/capability"),
  },
];
