/*
 * @Author: Vimalakirti
 * @Date: 2020-06-19 18:57:36
 * @LastEditTime: 2020-06-19 19:04:57
 * @Description:
 * @FilePath: \vue-manage-system\src\api\config.js
 */
import axios from "axios";

const service = axios.create({
  timeout: 3000
});
service.interceptors.request.use(
  config => {
    // if (store.state.user.token) {
    //   config.headers.Authorization = `token ${store.state.user.token}`;
    // }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

service.interceptors.response.use(
  response => {
    let res = {};
    res.status = response.status;
    res.data = response.data;
    return res;
  },
  err => {
    return Promise.reject(err);
  }
);
export default service;
