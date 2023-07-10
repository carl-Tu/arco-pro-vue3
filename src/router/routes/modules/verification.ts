import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const VERIFICATION: AppRouteRecordRaw = {
  path: '/verification',
  name: 'verification',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: '核验一体机',
    requiresAuth: true,
    icon: 'icon-dashboard',
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
