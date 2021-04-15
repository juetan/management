// 引入axios
import axios from "axios";
import store from "@/store";

// 创建axio例
const request = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
  timeout: 3000,
});

// 异常处理
function errorHandler(error) {
  let status = error.status;
  switch (status) {
    case 400:
      error.message = "请求错误";
      break;
    case 401:
      error.message = "未登录";
      break;
    case 403:
      error.message = "拒绝访问";
      break;
    case 404:
      error.message = `请求地址出错`;
      break;
    case 500:
      error.message = "服务器内部错误";
      break;
    case 501:
      error.message = "请求方法暂不支持";
      break;
    case 502:
      error.message = "网关错误";
      break;
    case 503:
      error.message = "服务暂时不可用";
      break;
    case 504:
      error.message = "网关超时";
      break;
    default:
      error.message = "未知错误";
      break;
  }
  return Promise.reject(error);
}

// 设置请求拦截器
request.interceptors.request.use((config) => {
  // 自动携带token
  const token = store.state.user.token;
  if (token) {
    config.headers["X-TOKEN"] = token;
  }
  return config;
}, errorHandler);

// 设置相应拦截器
request.interceptors.response.use((response) => {
  // 返回数据即可
  const data = response.data;
  return data;
}, errorHandler);

export default request;
