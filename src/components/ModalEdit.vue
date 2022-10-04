<template>
  <!-- <div class="w-full min-h-screen bg-slate-800 opacity-20"> -->
  <div
    class="
      fixed
      top-60
      z-20
      w-[500px]
      h-[250px]
      rounded-lg
      shadow-md
      bg-blue-400
      flex flex-col
      items-center
      justify-center
    "
    v-show="open"
  >
    <div class="basis-1/6 flex justify-end items-center w-full p-2">
      <button
        @click="$emit('close')"
        class="rounded-full bg-slate-200 hover:bg-gray-600 p-1"
      >
        ❌
      </button>
    </div>
    <div
      class="basis-3/6 flex flex-col gap-3 justify-center items-center w-full"
    >
      <input
        class="rounded-lg w-3/4 p-2 text-md text-black"
        placeholder="title"
      />
      <input
        class="rounded-lg w-3/4 p-2 text-md text-black"
        placeholder="description"
      />
    </div>
    <div class="basis-2/6 mt-2">
      <button
        @click="$emit('close')"
        class="
          w-auto
          py-3
          px-6
          text-md
          bg-green-600
          hover:bg-green-400
          font-semibold
          hover:font-extrabold
          rounded-md
          shadow-sm
        "
      >
        Update
      </button>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
export default {
  props: {
    open: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style>
</style>