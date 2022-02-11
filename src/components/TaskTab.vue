<template>
  <div class="task-tab-bar">
    <a
      href="#"
      class="task-tab"
      :class="{ 'tab-active': active.all }"
      @click="showAll"
    >
      All
      <span class="badge-danger">{{ todoCount.all }}</span>
    </a>
    <a
      href="#"
      class="task-tab"
      :class="{ 'tab-active': active.pending }"
      @click="showPending"
    >
      Pending
      <span class="badge-danger">{{ todoCount.pending }}</span>
    </a>
    <a
      href="#"
      class="task-tab"
      :class="{ 'tab-active': active.done }"
      @click="showDone"
    >
      Done
      <span class="badge-danger">{{ todoCount.done }}</span>
    </a>
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