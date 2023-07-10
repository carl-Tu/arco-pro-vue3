<script lang="ts" setup>
  import router from '@/router';

  function btn() {
    router.push({ name: 'Verification/VerificationDetail' });
  }
</script>

<template>
  <div>
    <div> 安装记录 </div>
    <a-button type="primary" @click="btn">跳转详情</a-button>
  </div>
</template>
