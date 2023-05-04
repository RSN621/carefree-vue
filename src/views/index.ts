import type { RouteComponent } from 'vue-router';

export const views: Record<RouterPage.LastDegreeRouteKey, RouteComponent | (() => Promise<RouteComponent>)> = {
  403: () => import('./_builtin/403/index.vue'),
  404: () => import('./_builtin/404/index.vue'),
  500: () => import('./_builtin/500/index.vue'),
  'constant-page': () => import('./_builtin/constant-page/index.vue'),
  login: () => import('./_builtin/login/index.vue'),
  'not-found': () => import('./_builtin/not-found/index.vue'),
  carefree_item: () => import('./carefree/item/index.vue'),
  carefree_role: () => import('./carefree/role/index.vue'),
  carefree_user: () => import('./carefree/user/index.vue'),
  dongtian_fudi: () => import('./dongtian/fudi/index.vue'),
  dongtian_woekbench: () => import('./dongtian/woekbench/index.vue'),
  kjlj: () => import('./kjlj/index.vue'),
  'multi-menu_first_second-new_third': () => import('./multi-menu/first/second-new/third/index.vue'),
  'multi-menu_first_second': () => import('./multi-menu/first/second/index.vue'),
  shangpin_item: () => import('./shangpin/item/index.vue'),
  slw_ccl: () => import('./slw/ccl/index.vue'),
  slw_hyq: () => import('./slw/hyq/index.vue'),
  slw_jc: () => import('./slw/jc/index.vue'),
  slw_zhr: () => import('./slw/zhr/index.vue')
};
