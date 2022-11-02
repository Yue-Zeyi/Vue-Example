<template>
  <div>
    <h1>App根组件</h1>
    <hr />
    <!-- 使用表格组件 -->
    <MyTable :data="goodslist">
      <template #header>
        <th>#</th>
        <th>商品名称</th>
        <th>价格</th>
        <th>标签</th>
        <th>操作</th>
      </template>

      <template #body="{ row, index }">
        <td>{{ index + 1 }}</td>
        <td>{{ row.goods_name }}</td>
        <td>{{ row.goods_price }}元</td>
        <td>
          <input
            type="text"
            class="form-control form-control-sm form-ipt"
            v-if="row.inputVisible"
            v-focus
            v-model.trim="row.inputValue"
            @blur="onInputConfirm(row)"
            @keyup.enter="onInputConfirm(row)"
            @keyup.esc="row.inputValue = ''"
          />
          <button
            type="button"
            class="btn btn-primary btn-sm"
            v-else
            @click="row.inputVisible = true"
          >
            +Tag
          </button>
          <!-- //循环渲染标签信息 -->
          <span class="badge badge-warning ml-2" v-for="item in row.tags" :key="item">{{
            item
          }}</span>
        </td>
        <td>
          <button type="button" class="btn btn-danger btn-sm" @click="onRemove(row.id)">
            删除
          </button>
        </td>
      </template>
    </MyTable>
  </div>
</template>

<script>
import MyTable from './components/my-table/MyTable.vue';

export default {
  naem: 'MyApp',
  data() {
    return {
      //商品列表数据
      goodslist: [],
    };
  },
  created() {
    //发起请求
    this.getGoodsList();
  },
  methods: {
    async getGoodsList() {
      const { data: res } = await this.$http.get('/api/goods');

      this.goodslist = res.data;
    },
    //根据id删除商品
    onRemove(id) {
      this.goodslist = this.goodslist.filter((x) => x.id !== id);
    },
    onInputConfirm(row) {
      //把用户输入的值预先转存到常量val中
      const val = row.inputValue;
      //清空文本框的值
      row.inputValue = '';
      //隐藏文本框
      row.inputVisible = false;
      // console.log(val);
      if (!val || row.tags.indexOf(val) !== -1) return;
      row.tags.push(val);
    },
  },
  components: {
    MyTable,
  },
  directives: {
    focus(el) {
      el.focus();
    },
  },
};
</script>

<style lang="less" scoped>
.form-ipt {
  width: 80px;
  display: inline;
}
</style>
