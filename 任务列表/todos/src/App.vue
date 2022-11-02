<template>
  <div>
    <h1>APP根组件</h1>
    <hr />
    <TodoInput @add="onAddNewTask"></TodoInput>
    <TodoList :list="tasklist" class="mt-2"></TodoList>
    <TodoButton v-model:active="activeBtnIndex"></TodoButton>
  </div>
</template>

<script>
//导入todolist组件
import TodoList from './components/todo-list/TodoList.vue';
//导入todoInput组件
import TodoInput from './components/todo-input/TodoInput.vue';
//导入todobutton组件
import TodoButton from './components/todo-button/TodoButton.vue';
export default {
  name: 'MyApp',
  data() {
    return {
      todolist: [
        { id: 1, task: '周一早上六点开会', done: false },
        { id: 2, task: '周一早上八点吃饭', done: false },
        { id: 3, task: '周三上午准备演讲', done: true },
      ],
      nextId: 4,
      activeBtnIndex: 0,
    };
  },
  methods: {
    onAddNewTask(taskname) {
      this.todolist.push({
        id: this.nextId,
        task: taskname,
        done: false,
      });
      this.nextId++;
    },
  },
  components: {
    TodoList,
    TodoInput,
    TodoButton,
  },
  computed: {
    tasklist() {
      switch (this.activeBtnIndex) {
        case 0:
          return this.todolist;
        case 1:
          return this.todolist.filter((x) => x.done);
        case 2:
          return this.todolist.filter((x) => !x.done);
      }
    },
  },
};
</script>

<style lang="less" scoped></style>
