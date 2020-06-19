/*
 * @Author: Vimalakirti
 * @Date: 2020-06-18 23:37:58
 * @LastEditTime: 2020-06-19 15:06:48
 * @Description:
 * @FilePath: \vue-manage-system\vue.config.js
 */

module.exports = {
  devServer: {
    port: 8080,
    open: true
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/scss/_variable.scss";`
      }
    }
  }
};
