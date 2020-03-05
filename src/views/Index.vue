<template>
  <div class="index">
    <cube-slide ref="slide" :data="items" @change="changePage">
    <cube-slide-item v-for="(item, index) in items" :key="index" @click.native="clickHandler(item, index)">
      <a :href="item.url">
        <img class="banner" :src="item.image">
      </a>
    </cube-slide-item>
</cube-slide>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          url: 'https://mapi.m.jd.com/',
          image: '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/103806/19/14030/153344/5e6074acEd00048e1/555b1b4a66630f65.jpg!cr_1125x445_0_171!q70.jpg.dpg'
        },
        {
          url: 'https://mapi.m.jd.com/',
          image: '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/104744/2/13908/95216/5e5f4dd2Eb59a3b50/ca237c37c0f2ce10.jpg!cr_1125x445_0_171!q70.jpg.dpg'
        },
        {
          url: 'https://mapi.m.jd.com/',
          image: '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/52022/13/4372/116319/5d202c35E94762c27/329610707ce90c1a.jpg!cr_1125x445_0_171!q70.jpg.dpg'
        },
        {
          url: 'https://mapi.m.jd.com/',
          image: '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/88409/37/13768/67424/5e5e0d14E366916d3/2a758416a5aefe97.jpg!cr_1125x445_0_171!q70.jpg.dpg'
        }
      ]
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
  }
</style>