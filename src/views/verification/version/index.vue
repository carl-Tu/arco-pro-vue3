<script setup lang="ts">
  import router from '@/router';

  function btn() {
    router.push({ name: 'Version/Detail' });
  }
</script>

<template>
  <div>
    <div> 版本管理 </div>
    <a-button type="primary" @click="btn">跳转详情</a-button>
  </div>
</template>
