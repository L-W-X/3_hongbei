import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import '@/static/minireset.min.css'
import * as API from '@/axios/index.js'
import VideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'
Vue.use(VideoPlayer)

Vue.config.productionTip = false
Vue.prototype.$API=API
Vue.prototype.$bus=new Vue()


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
