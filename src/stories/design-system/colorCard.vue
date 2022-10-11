<template>
  <div class="flex flex-col py-3 w-max">
    <div :class="`h-[80px] w-[250px] ${colorClass}`" />

    <span class="text-sm font-medium w-auto mt-2">{{ colorClass }}</span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  colorClass: {
    type: String,
    required: true,
    default: "bg-red-500",
  },
});
</script>
