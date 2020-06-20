<!--
 * @Author: Vimalakirti
 * @Date: 2020-06-20 16:53:27
 * @LastEditTime: 2020-06-20 19:22:35
 * @Description: 
 * @FilePath: \vue-manage-system\src\components\CommonTable.vue
-->
<template>
  <div class="common-table">
    <el-table :data="tableData" height="90%" stripe v-loading="config.loading">
      <el-table-column label="序号" width="85">
        <!-- temelate变量暴露出去 -->
        <template slot-scope="scope">
          <span style="margin-left: 10px">
            {{ (config.page - 1) * 20 + scope.$index + 1 }}
          </span>
        </template>
      </el-table-column>
      <el-table-column
        v-for="item in tableLabel"
        :key="item.prop"
        :label="item.label"
        show-overflow-tooltip
        :width="item.width ? item.width : 125"
      >
        <!-- temelate变量暴露出去 -->
        <template slot-scope="scope">
          <span style="margin-left: 10px">
            {{ scope.row[item.prop] }}
          </span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="180">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      class="page"
      :current-page.sync="config.page"
      layout="prev, pager, next"
      :total="config.total"
      @current-change="changePage"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  props: {
    tableData: Array,
    tableLabel: Array,
    config: Object //扩展
  },
  data() {
    return {};
  },
  methods: {
    handleEdit() {},
    handleDelete() {},
    changePage(page) {
      this.$emit("changePage", page);
    }
  }
};
</script>
<style lang="scss" scoped>
.common-table {
  height: calc(100% - 10px);
  background-color: #fff;
  overflow: hidden;
  .page {
    position: absolute;
    bottom: 30px;
    right: 20px;
  }
}
</style>
