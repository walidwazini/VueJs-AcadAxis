<template>
  <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
    <div class="max-w-lg mx-auto text-center">
      <h1 class="text-2xl font-bold sm:text-3xl">Add new Course</h1>
    </div>

    <form
      @submit.prevent="submitHandler"
      action=""
      class="max-w-md mx-auto mt-8 mb-0 space-y-4"
    >
      <div>
        <label for="email" class="sr-only">Title</label>

        <div class="relative">
          <input
            type="text"
            v-model="course.title"
            placeholder="Enter Title"
            class="
              w-full
              p-4
              pr-12
              text-sm
              border-gray-200
              rounded-lg
              shadow-sm
            "
          />
        </div>
      </div>

      <div>
        <label for="password" class="sr-only">Description</label>
        <div class="relative">
          <input
            type="text"
            v-model="course.description"
            class="
              w-full
              p-4
              pr-12
              text-sm
              border-gray-200
              rounded-lg
              shadow-sm
            "
            placeholder="Enter description"
          />
        </div>
      </div>

      <div class="flex w-full flex-col items-center justify-between">
        <button
          type="submit"
          class="
            inline-block
            w-1/2
            px-5
            py-3
            ml-3
            text-lg
            font-medium
            text-white
            bg-green-500
            rounded-lg
          "
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import CoursesControllers from "../controllers/course-ctrl";

export default {
  data() {
    return {
      course: {
        title: "",
        description: "",
      },
    };
  },
  methods: {
    submitHandler() {
      const data = {
        // title: this.$refs.title.value,
        // descripiton: this.$refs.description.value,
        title: this.course.title,
        descripiton: this.course.description,
        student: [""],
      };
      console.log(data);
      CoursesControllers.create(data)
        .then(() => {
          this.course.title = "";
          this.course.description = "";
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style>
</style>