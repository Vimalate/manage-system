<!--
 * @Author: Vimalakirti
 * @Date: 2020-06-19 17:09:01
 * @LastEditTime: 2020-06-20 19:12:32
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
    <common-table
      :tableData="tableData"
      :tableLabel="tableLabel"
      :config="config"
      @changePage="getList"
    ></common-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      tableLabel: [
        {
          prop: "name",
          label: "姓名"
        },
        {
          prop: "age",
          label: "年龄"
        },
        {
          prop: "sexLabel",
          label: "性别"
        },
        {
          prop: "birth",
          label: "出生日期",
          width: 200
        },
        {
          prop: "addr",
          label: "地址",
          width: 320
        }
      ],
      config: {
        page: 1,
        total: 30,
        loading: false
      },
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
  },
  methods: {
    getList(name = "") {
      this.config.loading = true;
      // 搜索时，页码需要设置为1，才能正确返回数据，因为数据是从第一页开始返回的
      name ? (this.config.page = 1) : "";
      this.$http
        .get("/api/user/getUser", {
          params: {
            page: this.config.page,
            name
          }
        })
        .then(res => {
          this.tableData = res.data.list.map(item => {
            item.sexLabel = item.sex === 0 ? "女" : "男";
            return item;
          });
          console.log(this.tableData);
          this.config.total = res.data.count;
          this.config.loading = false;
        });
    }
  },
  created() {
    this.getList();
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/common.scss";
</style>
