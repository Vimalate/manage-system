/*
 * @Author: Vimalakirti
 * @Date: 2020-06-18 23:34:42
 * @LastEditTime: 2020-06-19 00:09:58
 * @Description:
 * @FilePath: \vue-manage-system\src\router\index.js
 */

import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home
  // }
  // {
  //   path: "/about",
  //   name: "About",
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  routes
});

export default router;
