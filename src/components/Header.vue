<template>
  <div class="p-4 text-center">
    <h1 class="app-title uppercase">{{ appTitle }}</h1>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: ["appTitle"],
  computed: {
    appTitle() {
      return this.appTitle ?? "Todo App";
    },
  },
};
</script>

<style>
</style>
