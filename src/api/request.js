// 引入axios
import axios from "axios";
import store from "@/store";
import { message, loading } from "@/plugins/element-ui";

let loadinger;
// 创建axio例
const request = axios.create({
  // 基本URL(纯MOCKJS情况下无效)
  baseURL: process.env.VUE_APP_API_BASE_URL,
  // 请求超时时间
  timeout: 3000,
});

// 设置请求拦截器
request.interceptors.request.use((config) => {
  loadinger = loading.service({
    spinner: "el-icon-loading",
    text: "请求数据中...",
    background: "transparent",
  });
  // 获取本地token
  const token = store.state.user.token;
  if (token) {
    // 如果本地有TOEKN则携带
    config.headers["X-TOKEN"] = token;
  }
  return config;
}, errorHandler);

// 设置相应拦截器
request.interceptors.response.use((response) => {
  loadinger.close();
  // 返回数据即可
  const data = response.data;
  // 判断自定义状态码
  let isError;
  switch (data.code) {
    case 2000:
      break;
    case 4000:
      isError = true;
      break;
    default:
      break;
  }
  // 自定义状态码异常处理
  if (isError) {
    // 弹窗提示错误信息
    message({
      type: "error",
      message: data.message,
    });
  } else {
    return data;
  }
}, errorHandler);

// 异常处理
function errorHandler(error) {
  // 遍历http状态码
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
  // 弹窗提示错误信息
  message({
    type: "error",
    message: error.message,
  });
  return Promise.reject(error);
}

export default request;
