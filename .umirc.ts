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
      path: '/newpage',
      name: '练习生',
      component: './NewPage',
    },
    {
      path: '/',
      component: '@/pages/index',
      name: '首页',
    },
  ],
  fastRefresh: {},
});
