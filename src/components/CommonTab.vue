<!--
 * @Author: Vimalakirti
 * @Date: 2020-06-19 16:38:22
 * @LastEditTime: 2020-06-21 21:03:01
 * @Description: 
 * @FilePath: \vue-manage-system\src\components\CommonTab.vue
-->
<template>
  <div class="tabs">
    <el-tag
      :key="tag.name"
      size="medium"
      v-for="tag in tags"
      :closable="tag.name !== 'home'"
      :disable-transitions="false"
      @close="handleClose(tag)"
      @click="changeMenu(tag)"
      :effect="$route.name === tag.name ? 'dark' : 'plain'"
    >
      {{ tag.label }}
    </el-tag>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      dynamicTags: ["标签一", "标签二", "标签三"],
      inputVisible: false,
      inputValue: ""
    };
  },

  computed: {
    ...mapState({
      tags: state => state.tab.tabsList
    })
  },
  methods: {
    ...mapMutations({
      close: "closetab"
    }),
    handleClose(tag) {
      this.close(tag);
      this.$router.go(-1);
    },
    changeMenu(item) {
      this.$router.push({ name: item.name });
      this.$store.commit("selectMenu", item);
    }
  }
};
</script>

<style lang="scss" scoped>
.tabs {
  padding: 20px;
  .el-tag {
    margin-right: 15px;
    cursor: pointer;
  }
}
</style>
