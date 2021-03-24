export const baseURL = (function() {
  if (process.env.NODE_ENV === "production") {
    return "https://www.fastmock.site/mock/7522085e7af7a7b98bc42530bd1ddfb7/management";
  } else {
    return "https://www.fastmock.site/mock/7522085e7af7a7b98bc42530bd1ddfb7/management";
  }
})();

export const user = {
  auth: "user/auth",
  create: "user/create",
  delete: "user/delete",
  update: "user/update",
  select: "user/select",
};

export const equiments = {
  select: "equiments/select",
  all: "equiments/all",
};
