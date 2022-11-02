<template>
  <div class="app-container">
    <EsHeader title="购物车"></EsHeader>
    <EsGoods
      v-for="item in goodslist"
      :key="item.id"
      :id="item.id"
      :thumb="item.goods_img"
      :title="item.goods_name"
      :price="item.goods_price"
      :count="item.goods_count"
      :checked="item.goods_state"
      @stateChange="onGoodsStateChange"
      @countChange="onGoodsCountChange"
    ></EsGoods>
    <EsFooter @fullChange="onFullStateChange" :amount="amount" :total="total"></EsFooter>
  </div>
</template>

<script>
import EsHeader from './components/es-header/EsHeader.vue';
import EsFooter from './components/es-footer/EsFooter.vue';
import EsGoods from './components/es-goods/EsGoods.vue';

export default {
  name: 'MyApp',
  data() {
    return {
      //商品列表数据
      goodslist: [],
    };
  },
  created() {
    this.getGoodList();
  },
  methods: {
    //获取商品列表数据的方法
    async getGoodList() {
      const { data: res } = await this.$http.get('/api/cart');
      if (res.status !== 200) return alert('数据请求失败');
      this.goodslist = res.list;
      // console.log(res.list);
    },
    onFullStateChange(isfull) {
      // console.log(isfull);
      this.goodslist.forEach((x) => (x.goods_state = isfull));
    },
    //监听商品勾选状态变化
    onGoodsStateChange(e) {
      const findResult = this.goodslist.find((x) => x.id === e.id);
      if (findResult) {
        findResult.goods_state = e.value;
      }
    },
    //监听视频数量变化事件
    onGoodsCountChange(e) {
      const fingResult = this.goodslist.find((x) => x.id === e.id);
      if (fingResult) {
        fingResult.goods_count = e.value;
      }
    },
  },
  computed: {
    //已勾选商品总结
    amount() {
      let a = 0;
      this.goodslist
        .filter((x) => x.goods_state)
        .forEach((x) => {
          a += x.goods_price * x.goods_count;
        });
      return a;
    },
    total() {
      let t = 0;
      this.goodslist
        .filter((x) => x.goods_state)
        .forEach((x) => {
          t += x.goods_count;
        });
      return t;
    },
  },
  components: {
    EsHeader,
    EsFooter,
    EsGoods,
  },
};
</script>

<style lang="less" scoped>
.app-container {
  padding-top: 45px;
}
</style>
