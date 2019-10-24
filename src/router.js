import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    }, {
      path: '/zhuangyuanqi',
      name: 'zhuangyuanqi',
      component: () => import('./views/ZhuangYuanQi.vue')
    }, {
      path: '/test',
      name: 'test',
      component: () => import('./views/Test.vue')
    }, {
      path: '/swiper',
      name: 'swiper',
      component: () => import('./views/Swiper.vue')
    }, {
      path: '/countdown',
      name: 'countdown',
      component: () => import('./views/CountDown.vue')
    }, {
      path: '/add_data',
      name: 'add_data',
      component: () => import('./views/AddData.vue')
    }
  ],
  mode: 'history'
})
