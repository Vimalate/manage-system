<!--
 * @Author: Vimalakirti
 * @Date: 2020-06-20 16:53:27
 * @LastEditTime: 2020-06-20 17:59:58
 * @Description: 
 * @FilePath: \vue-manage-system\src\components\CommonTable.vue
-->
<template>
  <div class="common-table">
    <el-table>
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped></style>
