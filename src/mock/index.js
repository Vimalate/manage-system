/*
 * @Author: Vimalakirti
 * @Date: 2020-06-19 19:08:36
 * @LastEditTime: 2020-06-19 22:45:49
 * @Description:
 * @FilePath: \vue-manage-system\src\mock\index.js
 */
import Mock from "mockjs";
import homeApi from "./home";

Mock.setup({
  timeout: "200-2000"
});

// 首页/\/home\/getData/
Mock.mock(/\/home\/getData/, "get", homeApi.getStatisticalData);
