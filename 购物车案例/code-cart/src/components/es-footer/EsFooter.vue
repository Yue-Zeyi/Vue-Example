<template>
  <div class="footer-container">
    <div class="custom-control custom-checkbox">
      <input
        type="checkbox"
        class="custom-control-input"
        id="fullcheck"
        :checked="isfull"
        @change="onCheckBoxChange"
      />
      <label class="custom-control-label" for="fullcheck">全选</label>
    </div>
    <!-- 合计 -->
    <div>
      <span>合计：</span>
      <span class="amount">￥ {{ amount }}.00</span>
    </div>
    <!-- 结算按钮 -->
    <button type="button" class="btn btn-primary btn-settle" :disabled="total === 0">
      结算({{ total }})
    </button>
  </div>
</template>

<script>
export default {
  name: 'EsFooter',
  emits: ['fullChange'],
  props: {
    //已勾选商品总价格
    amount: {
      type: Number,
      default: 0,
    },
    total: {
      type: Number,
      default: 0,
    },
    isfull: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    //监听checkbox选中状态变化的事件
    onCheckBoxChange(e) {
      //   console.log(e.target.checked);
      this.$emit('fullChange', e.target.checked);
    },
  },
};
</script>

<style lang="less" scoped>
.footer-container {
  //设置高宽
  height: 50px;
  width: 100%;
  background-color: white;
  border-top: 1px solid #efefef;

  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
}
.amount {
  font-weight: bold;
  color: red;
}
.btn-settle {
  min-width: 90px;
  height: 38px;
  border-radius: 19px;
}
</style>
