import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const TEST: AppRouteRecordRaw = {
  path: '/test',
  name: 'test',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: '测试',
    requiresAuth: true,
    icon: 'icon-dashboard',
    order: 0,
  },
  children: [
    {
      path: 'Workplace1',
      name: 'Workplace1',
      component: () => import('@/views/dashboard/test/index.vue'),
      meta: {
        locale: '测试菜单',
        requiresAuth: true,
        roles: ['admin'],
      },
    },
  ],
};

export default TEST;
