import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const TEST: AppRouteRecordRaw = {
  path: '/test',
  name: 'test',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: '系统管理',
    requiresAuth: true,
    icon: 'icon-settings',
    order: 1,
  },
  children: [
    {
      path: 'AccountNumber',
      name: 'AccountNumber',
      component: () => import('@/views/system/accountNumber/AccountNumber.vue'),
      meta: {
        locale: '账号管理',
        requiresAuth: true,
        roles: ['admin'],
      },
    },
  ],
};

export default TEST;
