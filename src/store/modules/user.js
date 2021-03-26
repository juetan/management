const state = {
  // 用户令牌
  token: localStorage.getItem("acess_token"),
  // 用户名
  name: "",
  // 用户简介
  description: "",
  // 用户头像
  avatar: "",
};

const mutations = {
  // 设置用户令牌
  set_token: (state, token) => {
    localStorage.setItem("acess_token", token);
    state.token = token;
  },
  // 设置用户名
  set_name: (state, name) => {
    state.name = name;
  },
  // 设置用户简介
  set_description: (state, description) => {
    state.description = description;
  },
  // 设置用户头像
  set_avatar: (state, avatar) => {
    state.avatar = avatar;
  },
};

const actions = {
  auth({ commit }, data) {
    return new Promise((resolve) => {
      commit("SET_TOKEN", data.token);
      resolve();
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
