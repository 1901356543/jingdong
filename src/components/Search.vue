<template>
  <div class="search">
    <input type="text">
    <span @click="clicklogin">登陆</span>
  </div>
</template>

<script>
export default {
  methods:{
    clicklogin(){
      this.$router.push({ path: '/login' })
    }
  }
}
</script>

<style lang="scss" scoped>
  .search{
    width: 100%;
    height: 44px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    background: skyblue;
    input{
      width: 270px;
      height: 32px;
      margin-top: 5px;
      margin-left: 35px;
      border-radius: 20px;
      border: none;
      outline: none;
      padding-left: 10px;
    }
    span{
      float: right;
      margin-right: 10px;
      line-height: 44px;
      cursor: pointer;
      font-size: 16px;
      color: #fff;
    }
  }
</style>