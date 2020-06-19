/*
 * @Author: Vimalakirti
 * @Date: 2020-06-18 23:34:42
 * @LastEditTime: 2020-06-19 16:06:21
 * @Description:
 * @FilePath: \vue-manage-system\src\store\index.js
 */

import Vue from "vue";
import Vuex from "vuex";
import tab from "./tab";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    tab
  }
});
