import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'swiper'
import 'swiper/dist/css/swiper.css'

// 公共配置
import config from './config'
// 工具js
import utils from './utils'
// 引入共用导航栏组件
import Header from './components/Header'

Vue.prototype.config = config
Vue.prototype.utils = utils
Vue.config.productionTip = false

// 全局组件
Vue.component('Header', Header)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
