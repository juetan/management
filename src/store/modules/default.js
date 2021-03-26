const state = {
  // 侧边栏是否折叠
  collapsed: false,
};

const mutations = {
  // 设置collapsed
  set_collapsed: (state, value) => {
    state.collapsed = value;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
};
