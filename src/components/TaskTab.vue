<template>
  <div class="task-tab-bar">
    <button
      class="task-tab"
      :class="{ 'tab-active': active.all }"
      @click="showAll"
    >
      All
      <span class="badge-danger">{{ todoCount.all }}</span>
    </button>
    <button
      class="task-tab"
      :class="{ 'tab-active': active.pending }"
      @click="showPending"
    >
      Pending
      <span class="badge-danger">{{ todoCount.pending }}</span>
    </button>
    <button
      class="task-tab"
      :class="{ 'tab-active': active.done }"
      @click="showDone"
    >
      Completed
      <span class="badge-danger">{{ todoCount.done }}</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "TaskTab",
  props: {
    todoCount: Object,
  },
  data() {
    return {
      active: {
        all: true,
        pending: false,
        done: false,
      },
    };
  },
  methods: {
    showAll() {
      this.$emit("show-all");
      this.active.all = true;
      this.active.pending = false;
      this.active.done = false;
    },
    showPending() {
      this.$emit("show-pending");
      this.active.all = false;
      this.active.pending = true;
      this.active.done = false;
    },
    showDone() {
      this.$emit("show-done");
      this.active.all = false;
      this.active.pending = false;
      this.active.done = true;
    },
  },
};
</script>