export default {
  admin: {
    visitAdminPage: true,
    visitEditorPage: false,
    editorUsername: false,
    publishPost: true,
    editPost: true,
    deletePost: true,
    readPost: true,
  },
  editor: {
    visitAdminPage: false,
    visitEditorPage: true,
    editorUsername: true,
    publishPost: false,
    editPost: true,
    deletePost: false,
    readPost: true,
  },
};
