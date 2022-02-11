<template>
  <form class="w-full" @submit.prevent="$emit('add-todo')">
    <input
      type="text"
      placeholder="Add new todo"
      class="todo-input"
      :class="{
        error: error,
      }"
      name="task"
      :value="modelValue"
      @keyup="$emit('update:modelValue', $event.target.value)"
      autofocus="true"
    />
    <!-- <button type="submit" class="btn-blue">ADD</button> -->
  </form>
</template>

<script>
export default {
  name: "TaskAdd",
  props: {
    error: Boolean,
    modelValue: String,
  },
};
</script>

<style>
.btn-blue {
  @apply bg-sky-600 border-sky-600 border text-white p-2 w-[10%];
}
.todo-input {
  @apply w-full py-2 px-3 border border-sky-600 rounded-none text-center;
}
.todo-input.error {
  @apply border-red-dark;
}
</style>
