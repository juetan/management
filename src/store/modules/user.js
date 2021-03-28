const state = {
  // 用户令牌
  token: localStorage.getItem("access_token"),
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
    localStorage.setItem("access_token", token);
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

  logout_user: (state) => {
    localStorage.removeItem("access_token");
    state.token = null;
    state.name = null;
    state.description = null;
    state.avatar = null;
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
