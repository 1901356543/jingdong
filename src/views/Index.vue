<template>
  <div class="index">

    <!-- 轮播图 -->
    <cube-slide ref="slide" :data="items" @change="changePage">
      <cube-slide-item v-for="(item, index) in items" :key="index" @click.native="clickHandler(item, index)">
        <a :href="item.url">
          <img class="banner" :src="item.image">
        </a>
      </cube-slide-item>
    </cube-slide>

    <!-- 滚动分类 -->
    <cube-slide ref="slidelists" :auto-play="false" :data="lists">
      <cube-slide-item v-for="(list, index) in lists" :key="index">
          <ul class="listul">
              <li class="listli" v-for="(item,index1) in list" :key="index1">
                <a :href="item.url">
                  <img :src="item.image" alt="">
                  <p>{{item.label}}</p>
                </a>
              </li>
          </ul>
      </cube-slide-item>
    </cube-slide>

  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],//轮播
      lists: []//分类
    }
  },
  methods: {
    changePage(current) {
      console.log('当前轮播序号为' + current)
    },
    clickHandler(item, index){
      console.log(item, index)
    }
  },
  async created(){
    try{
      //获取轮播数据
      const items=await this.$http.get('/api/banner')
      this.items=items.data
      //获取滚动分类数据
      const lists=await this.$http.get('/api/rollinglist')
      this.lists=lists.data
    }catch(err){
      console.log(err)
    }
  }
}
</script>

<style lang="scss" scoped>
  .index{
    a {
      .banner{
        display: block;
        width: 100%;
        height: 175px;
      } 
    }
     .listul{
        display: flex;
        flex-wrap: wrap;
        .listli{
          width: 20%;
          justify-content: center;
          a{
            img{
              display: block;
              width: 40px;
              height: 40px;
              border-radius: 50%;
              padding: 5px 14px;
            }
            p{
              font-size: 14px;
              padding: 10px;
              color: #666;
              text-align: center;
            }
          }
        }
      }
  }
</style>