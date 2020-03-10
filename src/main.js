import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Video from 'video.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'video.js/dist/video-js.css'
import './assets/css/common.css'
import './assets/font/iconfont.css'
import './utils'
Vue.config.productionTip = false
Vue.prototype.$video = Video

Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
