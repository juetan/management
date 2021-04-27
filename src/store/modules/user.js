import userApi from "@/api/modules/user";

const state = {
  // 用户令牌
  token: localStorage.getItem("token"),
  // 用户名
  username: sessionStorage.getItem("username"),
  // 用户简介
  description: sessionStorage.getItem("description"),
  // 用户头像
  avatar: sessionStorage.getItem("avatar"),
  // 用户角色
  role: JSON.parse(sessionStorage.getItem("role")),
};

const mutations = {
  // token
  set_token(state, token) {
    localStorage.setItem("token", token);
    state.token = token;
  },
  remove_token(state) {
    localStorage.removeItem("token");
    state.token = "";
  },
  // 用户名
  set_username(state, name) {
    sessionStorage.setItem("username", name);
    state.username = name;
  },
  remove_username(state) {
    localStorage.removeItem("username");
    state.username = "";
  },
  // 用户简介
  set_description(state, description) {
    sessionStorage.setItem("description", description);
    state.description = description;
  },
  remove_description(state) {
    localStorage.removeItem("description");
    state.description = "";
  },
  // 用户头像
  set_avatar(state, avatar) {
    sessionStorage.setItem("avatar", avatar);
    state.avatar = avatar;
  },
  remove_avatar(state) {
    localStorage.removeItem("avatar");
    state.avatar = "";
  },
  // 用户角色
  set_role(state, role) {
    sessionStorage.setItem("role", JSON.stringify(role));
    state.role = role;
  },
  remove_role(state) {
    sessionStorage.removeItem("role");
    state.role = [];
  },
};

const actions = {
  // 登录用户
  login_user(context, userData) {
    return userApi.login_user(userData).then((data) => {
      console.log(data);
      context.commit("set_token", data.token);
      return data;
    });
  },
  // 退出用户
  logout_user(context) {
    context.commit("remove_token");
    context.commit("remove_username");
    context.commit("remove_description");
    context.commit("remove_avatar");
    context.commit("remove_role");
    return Promise.resolve();
  },
  // 获取用户信息
  get_userinfo(context) {
    return userApi.get_userinfo().then((data) => {
      const userinfo = data.data;
      context.commit("set_username", userinfo.username);
      context.commit("set_description", userinfo.description);
      context.commit("set_avatar", userinfo.avatar);
      context.commit("set_role", userinfo.role);
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
