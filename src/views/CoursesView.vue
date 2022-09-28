
<template>
  <div
    class="
      w-full
      min-h-full
      flex flex-col
      p-4
      items-center
      jusitfy-center
      text-white
    "
  >
    <div>Course 1</div>
    <div>
      <ol>
        <li v-for="course in coursesList" :key="course.id">
          {{ course.title }} asd
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
import CoursesControllers from "../controllers/course-ctrl";
import CourseItemVue from "@/components/CourseItem.vue";

export default {
  name: "CoursesView",
  components: [CourseItemVue],
  data() {
    return {
      coursesList: [],
      fetchCall: null,
    };
  },
  methods: {
    loadCourses(items) {
      let _tutorials = [];

      items.forEach((item) => {
        let id = item.id;
        let data = item.data();
        _tutorials.push({
          id: id,
          title: data.title,
          // description: data.description,
        });
      });

      this.coursesList = _tutorials;
      console.log(_tutorials);
    },
  },
  mounted() {
    this.fetchCall = CoursesControllers.getAll().onSnapshot(this.loadCourses);
  },
  beforeUnmount() {
    this.fetchCall();
  },
};
</script>

<style>
</style>