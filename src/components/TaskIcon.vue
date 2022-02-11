<template>
  <div class="mr-3">
    <svg
      :class="`icon-task ${color}`"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <circle cx="12" cy="12" r="11" />
      <path
        v-show="showTick"
        :class="strokeClass"
        d="m8 13 2.165 2.165a1 1 0 0 0
                1.521-.126L16 9"
        fill="none"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: "TaskIcon",
  props: {
    status: {
      type: Boolean,
      required: true,
    },
    icon: {
      type: String,
      default: "", // regular || solid
    },
  },
  data() {
    return {
      iconColor: "green",
      iconType: "",
    };
  },
  computed: {
    showTick() {
      return this.status;
    },
    strokeClass() {
      return this.icon == "solid"
        ? `icon-task-tick-3 icon-stroke-white`
        : `icon-task-tick-2`;
    },
    color() {
      this.iconColor = this.status ? "green" : "yellow";
      this.iconType = this.status && this.icon == "solid" ? "-solid" : "";
      return `icon-${this.iconColor}-color` + this.iconType;
    },
  },
};
</script>

<style scoped>
.icon-task {
  @apply w-6 h-6 flex-none stroke-2;
}
.icon-green-color {
  @apply fill-green-200 stroke-green-600;
}
.icon-green-color-solid {
  @apply fill-green-600 stroke-green-600;
}

.icon-yellow-color {
  @apply fill-yellow-200 stroke-yellow-600;
}

.icon-task-tick-1 {
  @apply stroke-1;
}
.icon-task-tick-2 {
  @apply stroke-2;
}
.icon-task-tick-3 {
  @apply stroke-[3];
}
.icon-fill-green {
  @apply fill-green-600;
}
.icon-stroke-white {
  @apply stroke-white;
}
</style>
