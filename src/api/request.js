// 引入axios
import axios from "axios";
import { baseURL } from "./config";
import store from "@/store";

// 创建axio例
const request = axios.create({
  baseURL: baseURL.development,
  timeout: 3000,
});

// 设置请求拦截器
request.interceptors.request.use(
  (config) => {
    // 自动携带token
    const token = store.state.user.token;
    if (token) {
      config.headers["X-TOKEN"] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 设置相应拦截器
request.interceptors.response.use(
  (response) => {
    // 返回数据即可
    const data = response.data;
    return data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default request;
