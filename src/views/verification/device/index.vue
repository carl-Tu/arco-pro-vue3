<script lang="ts" setup>
  // import router from '@/router';
  import { reactive } from 'vue';

  const data = reactive([
    {
      key: '1',
      name: 'Jane Doe',
      salary: 23000,
      address: '32 Park Road, London',
      email: 'jane.doe@example.com',
    },
    {
      key: '2',
      name: 'Alisa Ross',
      salary: 25000,
      address: '35 Park Road, London',
      email: 'alisa.ross@example.com',
    },
    {
      key: '3',
      name: 'Kevin Sandra',
      salary: 22000,
      address: '31 Park Road, London',
      email: 'kevin.sandra@example.com',
    },
    {
      key: '4',
      name: 'Ed Hellen',
      salary: 17000,
      address: '42 Park Road, London',
      email: 'ed.hellen@example.com',
    },
    {
      key: '5',
      name: 'William Smith',
      salary: 27000,
      address: '62 Park Road, London',
      email: 'william.smith@example.com',
    },
  ]);
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Salary',
      dataIndex: 'salary',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
  ];
</script>

<template>
  <div class="container">
    <!-- <Breadcrumb :items="['测试', '二级']" /> -->
    <div class="title">设备管理</div>
    <div class="layout">
      <div class="layout-top">
        <a-button type="primary">绑定设备</a-button>
        <div>
          <a-select :style="{ width: '160px' }" placeholder="Please select ...">
            <a-option>Beijing</a-option>
            <a-option>Shanghai</a-option>
            <a-option>Guangzhou</a-option>
          </a-select>
          <a-select :style="{ width: '160px' }" placeholder="Please select ...">
            <a-option>Beijing</a-option>
            <a-option>Shanghai</a-option>
            <a-option>Guangzhou</a-option>
          </a-select>
          <a-select :style="{ width: '160px' }" placeholder="Please select ...">
            <a-option>Beijing</a-option>
            <a-option>Shanghai</a-option>
            <a-option>Guangzhou</a-option>
          </a-select>
          <a-select :style="{ width: '160px' }" placeholder="Please select ...">
            <a-option>Beijing</a-option>
            <a-option>Shanghai</a-option>
            <a-option>Guangzhou</a-option>
          </a-select>
          <a-input
            :style="{ width: '320px' }"
            placeholder="Please enter something"
            allow-clear
          />
        </div>
      </div>

      <a-table
        :pagination="false"
        :bordered="false"
        :columns="columns"
        :data="data"
      />
      <a-pagination
        :page-item-style="{ background: '#fff', border: '1px solid #e5e6eb' }"
        :active-page-item-style="{
          background: '#fff',
          border: '1px solid #165dff',
        }"
        :total="200"
        show-total
        show-page-size
      />
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Test', // If you want the include property of keep-alive to take effect, you must name the component
  };
</script>

<style lang="less" scoped>
  .container {
    padding: 0 20px 20px;

    .title {
      padding-top: 16px;
      padding-bottom: 16px;
      color: #1d2129;
      font-weight: 500;
      font-size: 16px;
    }

    .layout {
      padding: 24px;
      background: #fff;
      border-radius: 4px;

      .layout-top {
        display: flex;
        justify-content: space-between;
        margin-bottom: 24px;
      }
    }
  }

  :deep(.arco-select-view-single) {
    margin-right: 8px;
    background: #fff;
    border: 1px solid #e5e6eb;
  }

  :deep(.arco-input-wrapper) {
    background: #fff;
    border: 1px solid #e5e6eb;
  }

  :deep(.arco-table-th) {
    color: rgb(0 0 0 / 88%);
    font-weight: 600;
    font-size: 14px;
    background: #f2f3f5;
  }

  :deep(.arco-pagination) {
    justify-content: flex-end;
    margin-top: 24px;
  }
</style>
