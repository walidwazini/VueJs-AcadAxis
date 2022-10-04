
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
    <button @click="isOpen = true" class="bg-slate-500 rounded-md py-1 px-4">
      Modal Toggle
    </button>
    <ModalEdit :open="isOpen" @close="isOpen = !isOpen" />
    <div>
      <ul class="mt-10 flex flex-col gap-4">
        <li v-for="course in coursesList" :key="course.id">
          <!-- <p>{{ course.title }}</p> -->
          <CourseItemVue
            :title="course.title"
            :desc="course.descripiton"
            :id="course.id"
          ></CourseItemVue>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

import CoursesControllers from "../controllers/course-ctrl";
import CourseItemVue from "@/components/CourseItem.vue";
import ModalEdit from "@/components/ModalEdit.vue";
// import CourseItem from "../components/CourseItem.vue";

export default {
  name: "CoursesView",
  components: { CourseItemVue, ModalEdit },
  data() {
    return {
      coursesList: [],
      fetchCall: null,
    };
  },
  setup() {
    const isOpen = ref(false);
    return { isOpen };
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
          descripiton: data.descripiton,
        });
      });
      this.coursesList = _tutorials;
      console.log(this.coursesList);
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