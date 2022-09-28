<template>
  <ul>
    <li>{{ course.title }}</li>
  </ul>
</template>

<script>
export default {
  name: "course-item",
  props: ["course"],
};
</script>

<style>
</style>