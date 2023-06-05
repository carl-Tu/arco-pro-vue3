<template>
  <div class="container">
    <Breadcrumb :items="['测试', 'test']" />
    <div class="layout">
      <div class="layout-left-side"> 1测试 </div>
      <div class="layout-content"> 2测试 </div>
      <div class="layout-right-side"> 3测试 </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<script lang="ts">
  export default {
    name: 'Test', // If you want the include property of keep-alive to take effect, you must name the component
  };
</script>

<style lang="less" scoped>
  .container {
    padding: 0 20px 20px 20px;
    .layout {
      background: #fff;
    }
  }
</style>
