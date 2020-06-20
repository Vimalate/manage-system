<!--
 * @Author: Vimalakirti
 * @Date: 2020-06-19 00:38:13
 * @LastEditTime: 2020-06-20 18:54:28
 * @Description: 
 * @FilePath: \vue-manage-system\src\views\Main.vue
-->
<template>
  <div class="main_container">
    <el-container style="height:100%">
      <el-aside width="auto">
        <common-aside></common-aside>
      </el-aside>
      <el-container>
        <el-header><common-header></common-header></el-header>
        <common-tab></common-tab>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {
    CommonHeader: () => import("../components/CommonHeader"),
    CommonAside: () => import("../components/CommonAside"),
    CommonTab: () => import("../components/CommonTab")
  }
};
</script>
<style lang="scss" scoped>
.main_container {
  height: 100%;
  .el-header {
    background: #333;
  }
  .el-main {
    padding-top: 0;
  }
}
</style>
