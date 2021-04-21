export default {
  admin: {
    publishPost: true,
    visitAdminPage: true,
    visitEditorPage: false,
    editorUsername: false,
    editPost: true,
    addNewPost: true,
    changeAuthor: true,
  },
  editor: {
    publishPost: false,
    visitAdminPage: false,
    visitEditorPage: true,
    editorUsername: true,
    editPost: true,
    addNewPost: false,
    changeAuthor: false,
  },
};
