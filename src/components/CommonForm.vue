<!--
 * @Author: Vimalakirti
 * @Date: 2020-06-20 16:52:42
 * @LastEditTime: 2020-06-20 17:43:19
 * @Description: 
 * @FilePath: \vue-manage-system\src\components\CommonForm.vue
-->
<template>
  <el-form
    :inline="inline"
    :model="form"
    ref="form"
    label-width="100px"
    class="demo-ruleForm"
  >
    <el-form-item
      label="年龄"
      prop="age"
      v-for="(item, index) in formLabel"
      :key="index"
    >
      <el-input
        v-model="form[item.model]"
        :placeholder="'请输入' + item.label"
        autocomplete="off"
        v-if="!item.type"
      ></el-input>
      <el-select
        v-model="form[item.model]"
        placeholder="请选择活动区域"
        v-if="item.type === 'select'"
      >
        <el-option
          v-for="(item, index) in item.opts"
          :key="index"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <el-switch
        v-model="form[item.model]"
        v-if="item.type === 'switch'"
      ></el-switch>
    </el-form-item>
    <el-form-item>
      <slot></slot>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  props: {
    form: Object,
    formLabel: Array,
    inline: Boolean
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped></style>
