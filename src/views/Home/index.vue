<!--
 * @Author: Vimalakirti
 * @Date: 2020-06-19 17:07:46
 * @LastEditTime: 2020-06-19 19:22:23
 * @Description: 
 * @FilePath: \vue-manage-system\src\views\Home\index.vue
-->
<template>
  <div>
    home
  </div>
</template>

<script>
export default {
  mounted() {
    console.log("ok");
    this.$http.get("/home/getData").then(res => {
      console.log(res.data);
    });
  }
};
</script>

<style lang="scss" scoped></style>
