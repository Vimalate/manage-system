/*
 * @Author: Vimalakirti
 * @Date: 2020-06-19 16:04:57
 * @LastEditTime: 2020-06-19 18:12:01
 * @Description:
 * @FilePath: \vue-manage-system\src\store\tab.js
 */
export default {
  state: {
    isCollapse: false,
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
        let result = state.tabsList.findIndex(item => item.name === v.name);
        result === -1 ? state.tabsList.push(v) : "";
      } else {
        state.currentMenu = "";
      }
    },
    closetabs(state, v) {
      let result = state.tabsList.findIndex(item => item.name === v.name);
      state.tabsList.splice(result, 1);
    },
    collapseMenu(state) {
      state.isCollapse = !state.isCollapse;
    }
  },
  actions: {},
  modules: {}
};
