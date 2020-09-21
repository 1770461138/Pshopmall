import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false
//监听图片加载完成，解决bs无法滚动的bug/home.vue/goodslistitem.vue
//用于防抖函数
Vue.prototype.$bus = new Vue()
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
