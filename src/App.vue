<template>
  <TodoLayout>
    <template #top>
      <TaskAdd @add-todo="handleAddTodo" />
      <TaskTab />
    </template>
    <Task
      v-for="todo in todos"
      :todo="todo"
      :key="todo.id"
      @toggle-task="toggleTask(todo.id)"
    />
  </TodoLayout>
</template>

<script>
import TodoLayout from "./layouts/TodoLayout.vue";
import TaskAdd from "./components/TaskAdd.vue";
import TaskTab from "./components/TaskTab.vue";
import Task from "./components/Task.vue";
export default {
  name: "TodoHome",
  components: {
    Task,
    TaskTab,
    TaskAdd,
    TodoLayout,
  },
  data() {
    return {
      todos: [
        {
          id: 1,
          task: "The Task 1",
          time: "Feb 10, 2022 at 10:00 AM",
          status: false,
        },
        {
          id: 2,
          task: "The Task 2",
          time: "Feb 10, 2022 at 10:00 AM",
          status: true,
        },
        {
          id: 3,
          task: "The Task 3",
          time: "Feb 10, 2022 at 10:00 AM",
          status: true,
        },
      ],
    };
  },
  methods: {
    toggleTask(todo_id) {
      this.todos.map((todo) => {
        todo.status = todo.id == todo_id ? !todo.status : todo.status;
        return todo;
      });
    },
    handleAddTodo(e) {
      const todo = {
        id: this.todos.length + Date.now(),
        task: e.target.elements.task.value,
        time: Date.toLocaleDateString(),
        status: false,
      };
      this.todos.push(todo);
      // this.newTodo = "";
      e.target.elements.task.value = "";
    },
  },
  computed: {},
};
</script>

<style>
</style>
