/*
 * @Author: Vimalakirti
 * @Date: 2020-06-18 23:34:42
 * @LastEditTime: 2020-06-19 00:39:45
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
  {
    path: "/",
    name: "About",
    component: () => import(/* webpackChunkName: "Main" */ "../views/Main.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
