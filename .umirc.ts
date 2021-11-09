import { defineConfig } from 'umi';

export default defineConfig({
  layout: {
    name: '前端练习生',
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/pages/index',
      name: '首页',
    },
  ],
  fastRefresh: {},
});
