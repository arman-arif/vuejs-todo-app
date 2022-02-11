<template>
  <div class="app-wrap">
    <div class="app-body">
      <Header appTitle="Todo Task" />
      <main class="main">
        <slot name="top" />
        <div class="task-content">
          <slot />
        </div>
      </main>
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
export default {
  name: "TodoLayout",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
</style>
