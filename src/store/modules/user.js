const state = {
  // 用户令牌
  token: localStorage.getItem("ACCESS_TOKEN"),
  // 用户名
  name: "",
  // 用户简介
  description: "",
  // 用户头像
  avatar: "",
};

const mutations = {
  // 设置用户令牌
  SET_TOKEN: (state, token) => {
    localStorage.setItem("ACCESS_TOKEN", token);
    state.token = token;
  },
  // 设置用户名
  SET_NAME: (state, name) => {
    state.name = name;
  },
  // 设置用户简介
  SET_DESCRIPTION: (state, description) => {
    state.description = description;
  },
  // 设置用户头像
  SET_AVATAR: (state, avatar) => {
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
