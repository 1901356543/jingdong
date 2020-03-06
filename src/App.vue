<template>
  <div id="app">
    <tabbar></tabbar>
    <!-- 路由容器(基于slot封装) -->
    <transition name="app" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import tabbar from '@/components/Tabbar.vue'

export default {
  components: {
    tabbar
  },
}
</script>

<style lang="scss" >
  *{
    margin:0;
    padding: 0;
  }
  ul{
    list-style:none;
  }

  .app-enter-active {
    animation: aaa .6s;
  }
  .app-leave-active {
    animation: aaa .6s reverse;
  }
  @keyframes aaa {
    0% {
      opacity: 0;
      transform: translateY(15px);
    }

    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }
</style>
