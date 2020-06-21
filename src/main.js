/*
 * @Author: Vimalakirti
 * @Date: 2020-06-18 23:34:42
 * @LastEditTime: 2020-06-21 20:48:48
 * @Description:
 * @FilePath: \vue-manage-system\src\main.js
 */

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/scss/reset.scss";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import http from "@/api/config";
import "./mock";
Vue.use(ElementUI);

Vue.config.productionTip = false;
Vue.prototype.$http = http;

router.beforeEach((to, from, next) => {
  // 防止刷新后vuex里丢失token
  store.commit("getToken");
  // 防止刷新后vuex里丢失标签列表tagList
  store.commit("getMenu");
  let token = store.state.user.token;
  // 过滤登录页，防止死循环
  if (!token && to.name !== "login") {
    next({ name: "login" });
  } else {
    next();
  }
});

new Vue({
  router,
  store,
  render: h => h(App),
  // created() {
  //   store.commit("addMenu", router);
  // },
  created() {
    store.commit("addMenu", router);
  }
}).$mount("#app");
