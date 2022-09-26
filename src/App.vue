<template>
  <div class="bg-slate-700 min-h-screen w-full">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  setup() {},
  name: "App",
  components: { NavBar },
};
</script>

<style>
</style>
