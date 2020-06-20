<!--
 * @Author: Vimalakirti
 * @Date: 2020-06-19 17:09:01
 * @LastEditTime: 2020-06-20 17:44:04
 * @Description: 
 * @FilePath: \vue-manage-system\src\views\User\index.vue
-->
<template>
  <div class="manage">
    <div class="manage-header">
      <el-button type="primary">+ 新增</el-button>
      <common-form inline :formLabel="formLabel" :form="searchForm">
        <el-button type="primary">搜索</el-button>
      </common-form>
    </div>
    <div class="manage-content">
      <common-table></common-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchForm: {
        keyword: ""
      },
      formLabel: [
        {
          model: "keyword",
          label: ""
        }
      ]
    };
  },
  components: {
    CommonForm: () => import("../../components/CommonForm"),
    CommonTable: () => import("../../components/CommonTable")
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/common.scss";
</style>
