import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      redirect: '/login'
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/Register.vue')
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Login.vue')
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('./views/Index.vue')
    },
    {
      path: '/list',
      name: 'list',
      component: () => import('./views/List.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      meta:{
        requireAuth:true // 当有这个字段，就需要登陆权限
      },
      component: () => import('./views/Cart.vue')
    },
    {
      path: '/mine',
      name: 'mine',
      meta:{
        requireAuth:true // 当有这个字段，就需要登陆权限
      },
      component: () => import('./views/Mine.vue')
    },
  ]
})
