// 引入axios
import axios from "axios";
import store from "@/store";
import i18n from "@/lang";
import loading from "@/helper/loading";
import { message } from "@/plugins/element-ui";

// 创建axio例
const request = axios.create({
  // 基本URL(纯MOCKJS情况下无效)
  baseURL: process.env.VUE_APP_API_BASE_URL,
  // 请求超时时间
  timeout: 3000,
});

// 设置请求拦截器
request.interceptors.request.use((config) => {
  // 打开loading
  loading.open();
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
  // 关闭loading
  loading.close();
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
      isError = true;
      break;
  }
  // 自定义状态码异常处理
  if (isError) {
    // 弹窗提示错误信息
    message({
      type: "error",
      message: "请求错误：" + data.message,
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
      error.message = i18n.t("request.error400");
      break;
    case 401:
      error.message = i18n.t("request.error401");
      break;
    case 403:
      error.message = i18n.t("request.error403");
      break;
    case 404:
      error.message = i18n.t("request.error404");
      break;
    case 500:
      error.message = i18n.t("request.error500");
      break;
    case 501:
      error.message = i18n.t("request.error501");
      break;
    case 502:
      error.message = i18n.t("request.error502");
      break;
    case 503:
      error.message = i18n.t("request.error503");
      break;
    case 504:
      error.message = i18n.t("request.error504");
      break;
    default:
      error.message = i18n.t("request.errorunknow");
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
