/*
 * @Author: Vimalakirti
 * @Date: 2020-06-21 20:36:42
 * @LastEditTime: 2020-06-21 20:39:58
 * @Description:
 * @FilePath: \vue-manage-system\src\store\user.js
 */
import Cookie from "js-cookie";
export default {
  state: {
    token: ""
  },
  mutations: {
    setToken(state, v) {
      state.token = v;
      Cookie.set("token", v);
    },
    clearToken(state) {
      state.token = "";
      Cookie.remove("token");
    },
    getToken(state) {
      state.token = Cookie.get("token");
    }
  }
};
