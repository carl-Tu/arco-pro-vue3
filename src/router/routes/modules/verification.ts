import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const VERIFICATION: AppRouteRecordRaw = {
  path: '/verification',
  name: 'verification',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: '核验一体机',
    requiresAuth: true,
    icon: 'icon-robot',
    order: 0,
  },
  children: [
    {
      path: 'Verification',
      name: 'Verification',
      component: () => import('@/views/verification/device/index.vue'),
      meta: {
        locale: '设备管理',
        requiresAuth: true,
        roles: ['admin'],
      },
    },
    {
      path: 'Verification/VerificationDetail',
      name: 'Verification/VerificationDetail',
      component: () => import('@/views/verification/device/detail/index.vue'),
      meta: {
        locale: '设备详情',
        requiresAuth: true,
        roles: ['admin'],
        hideInMenu: true,
      },
    },
    {
      path: 'Version',
      name: 'Version',
      component: () => import('@/views/verification/version/index.vue'),
      meta: {
        locale: '版本管理',
        requiresAuth: true,
        roles: ['admin'],
      },
    },
    {
      path: 'Version/Detail',
      name: 'Version/Detail',
      component: () => import('@/views/verification/version/detail/index.vue'),
      meta: {
        locale: '版本详情',
        requiresAuth: true,
        roles: ['admin'],
        hideInMenu: true,
      },
    },
    {
      path: 'Install',
      name: 'Install',
      component: () => import('@/views/verification/install/index.vue'),
      meta: {
        locale: '安装记录',
        requiresAuth: true,
        roles: ['admin'],
      },
    },
  ],
};

export default VERIFICATION;
