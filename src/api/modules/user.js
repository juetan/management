import request from "../request";
import { user } from "../config";

export default {
  // 用户登录
  auth(data) {
    return request.post(user.auth, data);
  },
  // 新增用户
  create(data) {
    return request.post(user.create, data);
  },
  // 删除用户
  delete(data) {
    return request.post(user.delete, data);
  },
  // 更新用户
  update(data) {
    return request.post(user.update, data);
  },
  // 获取用户
  select(data) {
    return request.get(user.select, data);
  },
};
