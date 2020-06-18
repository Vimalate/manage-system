<!--
 * @Author: Vimalakirti
 * @Date: 2020-06-19 00:47:14
 * @LastEditTime: 2020-06-19 01:22:10
 * @Description: 
 * @FilePath: \vue-manage-system\src\components\CommonAside.vue
-->
<template>
  <div class="aside_container">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#33aef0"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item
        :index="item.path"
        v-for="item in noChildren"
        :key="item.path"
      >
        <i :class="'el-icon-' + item.icon"></i>
        <span slot="title">{{ item.label }}</span>
      </el-menu-item>
      <el-submenu
        :index="item.path"
        v-for="(item, index) in hasChildren"
        :key="index"
      >
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{ item.label }}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item
            :index="subItem.path"
            v-for="(subItem, index) in item.children"
            :key="index"
            >{{ subItem.label }}</el-menu-item
          >
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      asideMenu: [
        {
          path: "/",
          label: "首页",
          icon: "home"
        },
        {
          path: "/video",
          label: "视频",
          icon: "video-play"
        },
        {
          path: "/user",
          label: "用户管理",
          icon: "user"
        },
        {
          path: "/other",
          label: "其他",
          icon: "user",
          children: [
            {
              path: "/page1",
              label: "页面1",
              icon: "setting"
            },
            {
              path: "/page2",
              label: "页面2",
              icon: "setting"
            }
          ]
        }
      ]
    };
  },
  computed: {
    noChildren() {
      return this.asideMenu.filter(item => !item.children);
    },
    hasChildren() {
      return this.asideMenu.filter(item => item.children);
    }
  }
};
</script>
<style lang="scss" scoped>
.aside_container {
  height: 100%;
  .el-menu {
    height: 100%;
  }
}
</style>
