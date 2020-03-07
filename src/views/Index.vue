<template>
  <div class="index">
    <!-- 搜索框 -->
    <search></search>

    <!-- 轮播图 -->
    <div class="slideshow">
      <cube-slide ref="slide" :data="items" @change="changePage">
        <cube-slide-item
          v-for="(item, index) in items"
          :key="index"
          @click.native="clickHandler(item, index)"
        >
          <a :href="item.url">
            <img class="banner" :src="item.image" />
          </a>
        </cube-slide-item>
      </cube-slide>
    </div>

    <!-- 滚动分类 -->
    <cube-slide ref="slidelists" :auto-play="false" :data="lists">
      <cube-slide-item v-for="(list, index) in lists" :key="index">
        <ul class="listul">
          <li class="listli" v-for="(item,index1) in list" :key="index1">
            <a :href="item.url">
              <img :src="item.image" alt />
              <p>{{item.label}}</p>
            </a>
          </li>
        </ul>
      </cube-slide-item>
    </cube-slide>

    <!-- 推荐 -->
    <div class="recommend">
      <h1>为 你 推 荐</h1>
      <ul>
        <li v-for="(list,index) in recommend" :key="index">
          <img :src="list.image" alt="">
          <p>{{list.label}}</p>
          <span>{{list.price}}</span>
        </li>
      </ul>
    </div>
    
  </div>
</template>

<script>
import search from "@/components/Search.vue";
import Vue from "vue";
import { List } from "vant";
Vue.use(List);

export default {
  data() {
    return {
      items: [], //轮播
      lists: [], //分类
      recommend: []//推荐
    };
  },
  methods: {
    changePage(current) {
      console.log("当前轮播序号为" + current);
    },
    clickHandler(item, index) {
      console.log(item, index);
    }
  },
  components: {
    search
  },
  async created() {
    try {
      //获取轮播数据
      const items = await this.$http.get("/api/banner");
      this.items = items.data;
      //获取滚动分类数据
      const lists = await this.$http.get("/api/rollinglist");
      this.lists = lists.data;
      //获取首页推荐数据
      const recommend = await this.$http.get("/api/recommend");
      this.recommend = recommend.data
    } catch (err) {
      console.log(err);
    }
  }
};
</script>

<style lang="scss" scoped>
.index {
  .slideshow {
    margin-top: 44px;
    overflow: hidden;
  }
  a {
    .banner {
      display: block;
      width: 100%;
      height: 175px;
    }
  }
  .listul {
    display: flex;
    flex-wrap: wrap;
    .listli {
      width: 20%;
      justify-content: center;
      a {
        img {
          display: block;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          padding: 5px 14px;
        }
        p {
          font-size: 14px;
          padding: 10px;
          color: #666;
          text-align: center;
        }
      }
    }
  }
  .recommend{
    z-index: 200;
    h1{
      height: 35px;
      width: 100%;
      text-align: center;
      line-height: 35px;
      margin-top: 10px;
      font-weight: bold;
      color: skyblue;
      border-bottom: 0.5px solid #666;
    }
    ul{
      li{
        width: 50%;
        height: 260px;
        float: left;
        margin-top: 10px;
       img{
        width: 175px;
        height: 175px;
        display: block;
       }
       p{
        box-sizing: border-box;
        height: 31px;
        font-size: 13px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        word-break: break-all;
        color: #232326;
        margin-top: 5px;
        line-height: 16px;
        margin-bottom: 3px;
        padding: 0 4px;
       }
       span{
         margin: 10px;
         line-height: 36px;
         color: red;
       }
      }
    }
  }
}
</style>