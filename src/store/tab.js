/*
 * @Author: Vimalakirti
 * @Date: 2020-06-19 16:04:57
 * @LastEditTime: 2020-06-19 17:03:12
 * @Description:
 * @FilePath: \vue-manage-system\src\store\tab.js
 */
export default {
  state: {
    menu: [],
    currentMenu: {},
    tabsList: [
      {
        path: "/",
        name: "home",
        label: "首页",
        icon: "home"
      }
    ]
  },
  mutations: {
    selectMenu(state, v) {
      if (v.name !== "home") {
        state.currentMenu = v;
        let result = state.tabsList.indexOf(v.name);
        result === -1 ? state.tabsList.push(v) : "";
      } else {
        state.currentMenu = "";
      }
    },
    closetabs(state, v) {
      let result = state.tabsList.findIndex(item => item.name === v.name);
      state.tabsList.splice(result, 1);
    }
  },
  actions: {},
  modules: {}
};
