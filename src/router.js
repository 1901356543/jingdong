import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const Login = ()=>import('@/views/Login.vue');
const Register = ()=>import('@/views/Register.vue');
const Index = ()=>import('@/views/Index.vue');

const router = new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/register',
      component: Register
    },
    {
     path: '/login', 
     component: Login
    },
    {
      path: '/index',
      component: Index
    }
  ]
})

// 抛出模块
export default router