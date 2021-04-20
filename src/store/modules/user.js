import userApi from "@/api/modules/user";

const state = {
  // 用户令牌
  token: localStorage.getItem("access_token"),
  // 用户名
  username: "",
  // 用户简介
  description: "",
  // 用户头像
  avatar: "",
  // 用户角色
  role: [],
};

const mutations = {
  // 设置token
  set_token(state, token) {
    localStorage.setItem("access_token", token);
    state.token = token;
  },
  // 移除token
  remove_token(state) {
    state.token = "";
    localStorage.removeItem("access_token");
  },
  // 设置用户名
  set_username(state, name) {
    state.username = name;
  },
  // 设置用户简介
  set_description(state, description) {
    state.description = description;
  },
  // 设置用户头像
  set_avatar(state, avatar) {
    state.avatar = avatar;
  },
  // 设置用户角色
  set_role(state, role) {
    state.role = role;
  },
};

const actions = {
  // 登录用户
  login_user(context, userData) {
    return userApi.login_user(userData).then((data) => {
      context.commit("set_token", data.token);
      return data;
    });
  },
  // 退出用户
  logout_user(context) {
    context.commit("remove_token");
    context.commit("set_username", "");
    context.commit("set_description", "");
    context.commit("set_avatar", "");
    context.commit("set_role", []);
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
