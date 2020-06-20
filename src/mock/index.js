/*
 * @Author: Vimalakirti
 * @Date: 2020-06-19 19:08:36
 * @LastEditTime: 2020-06-20 17:00:50
 * @Description:
 * @FilePath: \vue-manage-system\src\mock\index.js
 */
import Mock from "mockjs";
import homeApi from "./home";
import userApi from "./user";
import permissionApi from "./permission";

Mock.setup({
  timeout: "200-2000"
});

// 首页/\/home\/getData/
Mock.mock(/\/home\/getData/, "get", homeApi.getStatisticalData);
// 用户相关
Mock.mock(/\/user\/getUser/, "get", userApi.getUserList);
Mock.mock(/\/user\/del/, "get", userApi.deleteUser);
Mock.mock(/\/user\/batchremove/, "get", userApi.batchremove);
Mock.mock(/\/user\/add/, "post", userApi.createUser);
Mock.mock(/\/user\/edit/, "post", userApi.updateUser);
Mock.mock(/\/home\/getData/, "get", homeApi.getStatisticalData);

// 权限相关
Mock.mock(/\/permission\/getMenu/, "post", permissionApi.getMenu);
