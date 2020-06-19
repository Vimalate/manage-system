<!--
 * @Author: Vimalakirti
 * @Date: 2020-06-19 00:47:14
 * @LastEditTime: 2020-06-19 18:11:06
 * @Description: 
 * @FilePath: \vue-manage-system\src\components\CommonAside.vue
-->
<template>
  <div class="aside_container">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :collapse="isCollapse"
    >
      <el-menu-item
        :index="item.path"
        v-for="item in noChildren"
        :key="item.path"
        @click="clickMenu(item)"
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
            @click="clickMenu(subItem)"
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
          name: "home",
          label: "首页",
          icon: "s-home"
        },
        {
          path: "/video",
          name: "video",
          label: "视频",
          icon: "video-play"
        },
        {
          path: "/user",
          name: "user",
          label: "用户管理",
          icon: "user"
        },
        {
          path: "/other",
          name: "other",
          label: "其他",
          icon: "user",
          children: [
            {
              path: "/page1",
              name: "page1",
              label: "页面1",
              icon: "setting"
            },
            {
              path: "/page2",
              name: "page2",
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
    },
    isCollapse() {
      return this.$store.state.tab.isCollapse;
    }
  },
  methods: {
    clickMenu(item) {
      this.$router.push({ name: item.name });
      this.$store.commit("selectMenu", item);
    }
  }
};
</script>
<style lang="scss" scoped>
.aside_container {
  height: 100%;
  .el-menu {
    height: 100%;
    border: none;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
}
</style>
