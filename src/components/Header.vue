<template>
  <div class="p-4 text-center">
    <h1 class="app-title uppercase">{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: ["appTitle"],
  computed: {
    title() {
      return this.appTitle ?? "Todo App";
    },
  },
};
</script>

<style>
</style>
