<template>
  <nav>
    <ul>
      <router-link
        tag="li"
        :to="data.path"
        v-for="data in navlist"
        :key="data.text"
        activeClass="kerwinactive"
      >
        <i class="iconfont" :class="data.icon"></i>
        <span>{{data.text}}</span>
      </router-link>
    </ul>
    <div class="countsum">{{countsum}}</div>
  </nav>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      navlist: [
        {
          path: "/index",
          text: "首页",
          icon: "icon-viewgallery"
        },
        {
          path: "/list",
          text: "分类",
          icon: "icon-category"
        },
        {
          path: "/cart",
          text: "购物车",
          icon: "icon-cart"
        },
        {
          path: "/mine",
          text: "我的",
          icon: "icon-account"
        }
      ]
    };
  },
  computed: {
    ...mapGetters({
      countsum: "countsum"
    })
  }
};
</script>
<style lang="scss">
.kerwinactive {
  color: red;
}

nav {
  position: fixed;
  left: 0px;
  bottom: 0px;
  width: 100%;
  height: 50px;
  background: white;
  z-index: 100;
  ul {
    display: flex;
    li {
      flex: 1;
      line-height: 25px;
      text-align: center;
      display: flex;
      flex-direction: column;
    }
    span {
      font-size: 14px;
      color: #666;
    }
  }
  div {
    position: fixed;
    bottom: 25px;
    right: 30%;
    z-index: 200;
    width: 20px;
    height: 20px;
    line-height: 20px;
    font-size: 14px;
    background: red;
    color: #fff;
    border-radius: 50%;
    text-align: center;
  }
}
</style>
