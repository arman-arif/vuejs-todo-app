<template>
  <form class="w-full" @submit.prevent="$emit('add-todo', $event)">
    <input
      type="text"
      placeholder="Add new todo"
      class="todo-input"
      name="task"
      v-model="newTodo"
    />
    <button type="submit" class="btn-blue">ADD</button>
  </form>
</template>

<script>
export default {
  name: "TaskAdd",
  data() {
    return {
      newTodo: "",
    };
  },
};
</script>

<style>
</style>
