/*
 * @Author: Vimalakirti
 * @Date: 2020-06-18 23:34:42
 * @LastEditTime: 2020-06-19 17:28:07
 * @Description:
 * @FilePath: \vue-manage-system\src\router\index.js
 */

import Vue from "vue";
import VueRouter from "vue-router";
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import(/* webpackChunkName: "Main" */ "../views/Main.vue"),
    children: [
      {
        path: "/",
        name: "home",
        component: () =>
          import(/* webpackChunkName: "Main" */ "../views/Home/index.vue")
      },
      {
        path: "/video",
        name: "video",
        component: () => import(/* webpackChunkName: "Main" */ "../views/Video")
      },
      {
        path: "/user",
        name: "user",
        component: () =>
          import(/* webpackChunkName: "Main" */ "../views/User/index.vue")
      },
      {
        path: "/page1",
        name: "page1",
        component: () =>
          import(/* webpackChunkName: "Main" */ "../views/Other/PageOne.vue")
      },
      {
        path: "/page2",
        name: "page2",
        component: () =>
          import(/* webpackChunkName: "Main" */ "../views/Other/PageTwo.vue")
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
