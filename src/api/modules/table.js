import request from "../index";

// 用户登录
export function getTableData() {
  return request.get("/table");
}
