import request from "../request";
import { user } from "../config";

export default {
  // 用户登录
  auth(data) {
    return request.post(user.auth, data);
  },
  login(data) {
    return request.post("/login", data);
  },
  // 获取用户信息
  get_userinfo() {
    return request.post("/userinfo");
  },
};
