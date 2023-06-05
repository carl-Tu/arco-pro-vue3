import 'vue-router';

declare module 'vue-router' {
  interface RouteMeta {
    roles?: string[]; // 控制有权访问页面的角色
    requiresAuth: boolean; // 是否需要登录才能访问当前页面（每条路由都必须声明）
    icon?: string; // 图标显示在侧菜单中
    locale?: string; // 区域设置名称显示在侧菜单和面包屑中
    hideInMenu?: boolean; // 如果为true，则不会显示在侧菜单中
    hideChildrenInMenu?: boolean; // 如果设置为true，则子菜单不会显示在侧菜单中
    activeMenu?: string; // 如果设置名称，则菜单将根据您设置的名称高亮显示
    order?: number; // Sort routing menu items. If set key, the higher the value, the more forward it is
    noAffix?: boolean; // 如果设置为true，标签将不会粘贴在标签栏中
    ignoreCache?: boolean; // 如果设置为true，则不会缓存页面
  }
}
