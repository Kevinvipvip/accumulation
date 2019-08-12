import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 公共配置
import config from './config'
// 工具js
import utils from './utils'

Vue.prototype.config = config
Vue.prototype.utils = utils
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
