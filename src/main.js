import Vue from 'vue'
import './cube-ui'
import App from './App.vue'

// 引入路由实例
import router from '@/router.js'
// 引入vuex
import store from '@/store/store'
// 引入 axios
import axios from 'axios'

import setaxios from './setaxios.js'
setaxios()

Vue.config.productionTip = false
Vue.prototype.$http=axios

// 路由守卫
router.beforeEach((to, from, next) => {
  store.commit('settoken',localStorage.getItem('token'))
  if(to.meta.requireAuth){
    if(store.state.token){
      next()
    }else{
      next({
        path:'/login',
        query:{redirect:to.fullpath}
      })
    }
  }else{
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
