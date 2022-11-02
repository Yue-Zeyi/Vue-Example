<template>
  <table class="table table-bordered table-striped">
    <!-- 表格的标题区域 -->
    <thead>
      <tr>
        <!-- 命名插槽 -->
        <slot name="header"></slot>
      </tr>
    </thead>
    <!-- 表格的主体区域 -->
    <tbody>
      <tr v-for="(item, index) in data" :key="item.id">
        <slot name="body" :row="item" :index="index"></slot>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'MyTable',
  props: {
    //表格的数据源
    data: {
      typer: Array,
      required: true,
      default: [],
    },
  },
};
</script>
<style lang="less" scoped></style>
