<template>
  <TodoLayout>
    <template #top>
      <TaskAdd @add-todo="handleAddTodo" :error="error" v-model="newTodo" />
      <TaskTab
        :todoCount="todoCount"
        @show-all="filter = 'all'"
        @show-pending="filter = 'pending'"
        @show-done="filter = 'done'"
      />
    </template>
    <Task
      v-for="todo in filterdTodos"
      :todo="todo"
      :key="todo.id"
      @toggle-task="toggleTask(todo.id)"
    />
    <template #bottom>
      <ClearButton @clear-todo="handleClearTodo" />
    </template>
  </TodoLayout>
</template>

<script>
import TodoLayout from "./layouts/TodoLayout.vue";
import TaskAdd from "./components/TaskAdd.vue";
import TaskTab from "./components/TaskTab.vue";
import ClearButton from "./components/ClearButton.vue";
import Task from "./components/Task.vue";
export default {
  name: "App",
  components: {
    TodoLayout,
    TaskAdd,
    TaskTab,
    Task,
    ClearButton,
  },
  mounted() {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos) {
      this.todos = todos;
    } else {
      this.todos = [
        {
          id: this.todos.length + Date.now(),
          task: "Start your day with a awesome task! :)",
          time: "Feb 10, 2022 at 10:00 AM",
          status: true,
        },
      ];
      localStorage.setItem("todos", JSON.stringify(this.todos));
    }
  },
  watch: {
    "todos.length"(oldTodos, newTodos) {
      localStorage.setItem("todos", JSON.stringify(this.todos));
    },
  },
  data() {
    return {
      todos: [],
      error: false,
      newTodo: "",
      filter: "all",
    };
  },
  methods: {
    toggleTask(todo_id) {
      this.todos.map((todo) => {
        todo.status = todo.id == todo_id ? !todo.status : todo.status;
        return todo;
      });
    },
    handleAddTodo() {
      if (this.newTodo == "") {
        this.error = true;
        return;
      }
      this.error = false;

      this.todos.unshift({
        id: this.todos.length + Date.now(),
        task: this.newTodo,
        time: new Date().toLocaleString(),
        status: false,
      });

      this.newTodo = "";
    },
    handleClearTodo() {
      this.todos = this.todos.filter((todo) => !todo.status);
    },
  },
  computed: {
    todoCount() {
      const taskCount = this.todos.length;
      const taskDone = this.todos.filter((todo) => todo.status).length;
      return {
        all: taskCount,
        done: taskDone,
        pending: taskCount - taskDone,
      };
    },
    filterdTodos() {
      switch (this.filter) {
        case "all":
          return this.todos;
        case "pending":
          return this.todos.filter((todo) => !todo.status);
        case "done":
          return this.todos.filter((todo) => todo.status);
      }
    },
  },
};
</script>

<style>
</style>
