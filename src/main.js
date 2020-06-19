/*
 * @Author: Vimalakirti
 * @Date: 2020-06-18 23:34:42
 * @LastEditTime: 2020-06-19 17:27:27
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

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
