import request from "../index";

// 登录用户
export function login_user(data) {
  return request.post("/login", data);
}

// 获取用户信息
export function get_userinfo(data) {
  return request.post("/userinfo",data);
}
