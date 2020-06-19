<!--
 * @Author: Vimalakirti
 * @Date: 2020-06-19 17:07:46
 * @LastEditTime: 2020-06-19 22:58:07
 * @Description: 
 * @FilePath: \vue-manage-system\src\views\Home\index.vue
-->
<template>
  <el-row class="home" :gutter="20">
    <el-col :span="8">
      <el-card shadow="hover" style="height:290px">
        <div class="user">
          <img :src="userImg" alt="" />
          <div class="userinfo">
            <p class="name">nick</p>
            <p class="access">超级管理员</p>
          </div>
        </div>
        <div class="login-info">
          <p>上次登录时间：<span>2020-6-20</span></p>
          <p>上次登录地点：<span>广州</span></p>
        </div>
      </el-card>
      <el-card shadow="hover" style="height:522px;margin-top:20px">
        <el-table :data="tableData">
          <el-table-column
            v-for="(value, key) in tableLabel"
            :key="key"
            :prop="key"
            :label="value"
            show-overflow-tooltip
          ></el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <el-col :span="16">
      <div class="num">
        <el-card
          shadow="hover"
          v-for="item in countData"
          :key="item.id"
          :body-style="{ display: 'flex' }"
        >
          <i
            :class="`el-icon-${item.icon}`"
            :style="{ background: item.color }"
          ></i>
          <div class="detail">
            <p class="num">￥ {{ item.value }}</p>
            <p class="txt">{{ item.name }}</p>
          </div>
        </el-card>
      </div>
      <el-card shadow="hover">
        <div style="height:280px"></div>
      </el-card>
      <div class="graph">
        <el-card shadow="hover"> <div style="height:280px"></div></el-card>
        <el-card shadow="hover"> <div style="height:280px"></div></el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      userImg: require("../../assets/images/user.png"),
      countData: [
        {
          id: 1,
          name: "本月支付订单",
          value: 599,
          icon: "success",
          color: "#2ec7c8"
        },
        {
          id: 2,
          name: "本月收藏订单",
          value: 199,
          icon: "star-on",
          color: "#ffb980"
        },
        {
          id: 3,
          name: "今日未支付订单",
          value: 299,
          icon: "s-goods",
          color: "#5ab1ef"
        },
        {
          id: 4,
          name: "今日支付订单",
          value: 269,
          icon: "success",
          color: "#2ec7c8"
        },
        {
          id: 5,
          name: "今日收藏订单",
          value: 199,
          icon: "star-on",
          color: "#ffb980"
        },
        {
          id: 6,
          name: "今日未支付订单",
          value: 299,
          icon: "s-goods",
          color: "#5ab1ef"
        }
      ],
      tableData: [],
      tableLabel: {
        name: "课程",
        todayBuy: "今日购买",
        monthBuy: "本月购买",
        totalBuy: "总购买"
      }
    };
  },
  methods: {
    getTableData() {
      this.$http.get("/home/getData").then(res => {
        this.tableData = res.data.data.tableData;
        console.log(this.tableData);
      });
    }
  },
  mounted() {
    this.getTableData();
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/home";
</style>
