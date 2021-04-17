import request from "../request";

export default {
  // 用户登录
  getTableData() {
    return request.get("/table");
  },
};
