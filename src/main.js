import Vue from 'vue';
// import ol from 'openlayers';
// import ol from 'openlayers';
import App from './App.vue';
import router from './router';
import store from './store';

// Vue.prototype.$ol = ol;

Vue.config.productionTip = false;
// Vue.prototype.$ol =ol;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
