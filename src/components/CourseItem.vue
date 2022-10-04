<template>
  <div
    class="
      relative
      w-[270px]
      h-auto
      p-4
      border border-gray-100
      shadow-xl
      rounded-xl
    "
  >
    <div class="w-full h-auto flex justify-between">
      <button
        @click="isOpen = true"
        class="
          rounded-full
          px-3
          py-1.5
          bg-green-500
          hover:bg-green-300
          text-green-600
          font-medium
          text-xs
        "
      >
        🖋️
      </button>
      <button
        @click="test(id)"
        class="
          rounded-full
          px-3
          py-1.5
          bg-red-700
          hover:bg-red-500
          font-medium
          text-xs
        "
      >
        🗑️
      </button>
    </div>
    <div class="mt-1 flex flex-col gap-1 justify-center items-center p-1">
      <div class="flex flex-col">
        <h5 class="mt-4 text-xl font-bold text-white">
          {{ title }}
        </h5>
        <h6 class="text-slate-200">
          {{ desc }}
        </h6>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "course-item",
  props: ["title", "desc", "id"],
  methods: {
    test(id) {
      console.log(id);
    },
  },
  setup() {},
};
</script>

<style>
</style>