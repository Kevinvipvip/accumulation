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

import Bmob from 'hydrogen-js-sdk'

// 初始化 SDK版本 2.0.0 以下保留之前的初始化方法
Bmob.initialize(config.Bmob_id, config.api_key)

// 挂载到全局使用
Vue.prototype.Bmob = Bmob

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
