<template>
  <nav>
    <ul>
      <router-link tag="li" :to="data.path" v-for="data in navlist"
      :key="data.text" activeClass="kerwinactive">
        <i class="iconfont" :class="data.icon"></i>
        <span>{{data.text}}</span>
      </router-link>
    </ul>
  </nav>
</template>
<script>
export default {
  // location.href 编程式导航
  data(){
    return {
      navlist:[
        {
          path:'/index',
          text:'首页',
          icon:'icon-viewgallery'
        },
        {
          path:'/list',
          text:'分类',
          icon:'icon-category'
        },
        {
          path:'/cart',
          text:'购物车',
          icon:'icon-cart'
        },
         {
          path:'/mine',
          text:'我的',
          icon:'icon-account'
        }
      ]
    }
  },
}
</script>
<style lang="scss">
  .kerwinactive{
    color:red;
  }

  nav{
    position: fixed;
    left:0px;
    bottom: 0px;
    width: 100%;
    height: 50px;
    background: white;
    z-index: 100;
    ul{
      display: flex;
      li{
        flex: 1;
        line-height:25px;
        text-align: center;
        display: flex;
        flex-direction: column;
      }
      span{
        font-size: 14px;
        color: #666;
      }
    }
  }
</style>
