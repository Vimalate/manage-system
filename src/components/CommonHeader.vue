<!--
 * @Author: Vimalakirti
 * @Date: 2020-06-19 00:46:44
 * @LastEditTime: 2020-06-19 18:05:28
 * @Description: 
 * @FilePath: \vue-manage-system\src\components\CommonHeader.vue
-->
<template>
  <header>
    <div class="l_content">
      <el-button
        type="primary"
        icon="el-icon-menu"
        size="mini"
        @click="collapseMenu"
      ></el-button>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="current.path" v-if="current">
          {{ current.label }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="r_content">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          <el-image
            style="width: 45px; height: 45px; border-radius:50%"
            :src="userImg"
          ></el-image>
        </span>
        <el-dropdown-menu slot="dropdown" size="mini">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      userImg: require("../assets/images/user.png")
    };
  },
  methods: {
    collapseMenu() {
      this.$store.commit("collapseMenu");
    }
  },
  computed: {
    ...mapState({
      current: state => state.tab.currentMenu
    })
  }
};
</script>
<style lang="scss" scoped>
header {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .l_content {
    display: flex;
    align-items: center;
    .el-button {
      margin-right: 20px;
    }
  }
}
</style>
<style lang="scss">
.el-breadcrumb__item {
  .el-breadcrumb__inner {
    color: #666;
    font-weight: normal;
  }
  &:last-child {
    .el-breadcrumb__inner {
      color: #fff;
    }
  }
}
</style>
