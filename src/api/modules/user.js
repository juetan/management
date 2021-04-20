import request from "../request";

export default {
  // 登录用户
  login_user(data) {
    return request.post("/login", data);
  },
  // 获取用户信息
  get_userinfo() {
    return request.post("/userinfo");
  },
};
