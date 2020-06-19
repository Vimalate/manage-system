<!--
 * @Author: Vimalakirti
 * @Date: 2020-06-19 16:38:22
 * @LastEditTime: 2020-06-19 17:04:50
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
      close: "closetabs"
    }),
    handleClose(tag) {
      this.close(tag);
    }
  }
};
</script>

<style lang="scss" scoped>
.tabs {
  padding: 20px;
  el-tag {
    margin-right: 15px;
  }
  .el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
}
</style>
