<template>
  <div class="w-full text-center m-0 mb-1 border-b">
    <button
      class="
        p-1
        w-full
        text-xs text-red-700
        hover:bg-slate-100 hover:text-red-500
      "
      @click="clearTodo"
    >
      Clear Completed
    </button>
  </div>
</template>

<script>
export default {
  name: "ClearButton",
  methods: {
    clearTodo() {
      this.$emit("clear-todo");
    },
  },
};
</script>