<template>
  <div class="task" :class="color" @click="$emit('toggle-task')">
    <TaskIcon :status="todo.status" icon="solid" />
    <div class="leading-none pt-1">
      <h3 class="font-bold">{{ todo.task }}</h3>
      <p class="text-sm text-gray-600">{{ todo.time }}</p>
    </div>
  </div>
</template>

<script>
import TaskIcon from "./TaskIcon.vue";
export default {
  name: "Task",
  components: {
    TaskIcon,
  },
  props: {
    todo: Object,
  },
  methods: {},
  computed: {
    color() {
      return this.todo.status
        ? "bg-green border-green"
        : "bg-yellow border-yellow";
    },
  },
};
</script>

<style scoped>
.bg-yellow {
  @apply bg-yellow-100;
}
.bg-green {
  @apply bg-green-100;
}
.border-green {
  @apply border-b border-b-green-200;
}
.border-yellow {
  @apply border-b border-b-yellow-200;
}
</style>
