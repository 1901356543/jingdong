<template>
  <div class="panelsbox">
    <!-- 搜索框 -->
    <search></search>

    <cube-scroll class="leftpanels">
      <ul>
        <li
          v-for="(list,index) in tabslabel"
          @click="selectlist(index)"
          :class="list.active?'active':''"
          :key="index"
        >{{list.label}}</li>
      </ul>
    </cube-scroll>

    <cube-scroll class="rightpanels">
      <ul>
        <li v-for="(tag,index) in tags" :key="index">
          <img :src="tag.image" alt />
          <p>{{tag.label}}</p>
          <span @click="addtocart($event,tag)">
            添加购物车
            <i class="cubeic-add"></i>
          </span>
        </li>
      </ul>
    </cube-scroll>
  </div>
</template>

<script>
import search from "@/components/Search.vue";
export default {
  data() {
    return {
      tags: [],
      tabslabel: [
        {
          label: "热门推荐",
          active: true
        },
        {
          label: "手机数码",
          active: false
        },
        {
          label: "家用电器",
          active: false
        },
        {
          label: "电脑办公",
          active: false
        },
        {
          label: "美妆护肤",
          active: false
        },
        {
          label: "个护清洁",
          active: false
        },
        {
          label: "汽车生活",
          active: false
        },
        {
          label: "京东超市",
          active: false
        },
        {
          label: "男装",
          active: false
        },
        {
          label: "男鞋",
          active: false
        },
        {
          label: "女装",
          active: false
        },
        {
          label: "女鞋",
          active: false
        },
        {
          label: "运动户外",
          active: false
        },
        {
          label: "食品生鲜",
          active: false
        },
        {
          label: "礼品鲜花",
          active: false
        },
        {
          label: "农资绿植",
          active: false
        },
        {
          label: "国际品牌",
          active: false
        }
      ]
    };
  },
  methods: {
    //点击左侧分类
    selectlist(index) {
      this.tabslabel.forEach((val, ind) => {
        if (index == ind) {
          val.active = true;
        } else {
          val.active = false;
        }
      });
      this.getclassify(index);
    },
    //获取分类
    async getclassify(index) {
      const result = await this.$http.get("/api/classify", {
        params: { type: index }
      });
      this.tags = result.data;
    },
    //添加商品到购物车
    addtocart(e, tag) {
      this.$store.commit("tocart", tag);
    }
  },
  components: {
    search
  },
  created() {
    //获取默认的分类数据
    this.getclassify(0);
  },
  mounted() {
    //设置滚动盒子的高度
    const leftpanels = document.querySelector(".leftpanels");
    const rightpanels = document.querySelector(".rightpanels");
    const bodyheight = document.documentElement.clientHeight;
    leftpanels.style.height = bodyheight - 57 + "px";
    rightpanels.style.height = bodyheight - 57 + "px";
  }
};
</script>

<style lang="scss" scoped>
.panelsbox {
  display: flex;
  margin-top: 44px;
}
.leftpanels {
  width: 30%;
  li {
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #fff;
    color: #333;
    background: #f8f8f8;
    font-size: 14px;
    text-align: center;
  }
  .active {
    background: #fff;
    color: #e93b3d;
  }
}
.rightpanels {
  width: 70%;
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      margin-top: 10px;
      text-align: center;
      width: 50%;
      justify-content: center;
      align-items: center;
      font-size: 15px;
      img {
        width: 100%;
        height: 80px;
        display: block;
      }
      p {
        line-height: 26px;
      }
      span {
        .cubeic-add {
          font-size: 18px;
        }
      }
    }
  }
}
</style>


