import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import overlayPopup from '../views/overlayPopup.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/overlayPopup',
    name: 'overlayPopup',
    component: overlayPopup,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) { // 如果未匹配到路由
    // eslint-disable-next-line no-unused-expressions
    from.name ? next({ // 如果上级未匹配到路由则跳转登陆页面，如果上级能够匹配到路由则跳转到上级路由
      name: from.name,
    }) : next('/');
  } else {
    next(); // 如果匹配正确跳转
  }
});

export default router;
