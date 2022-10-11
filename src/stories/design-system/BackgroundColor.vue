<template>
  <article class="story-content text-slate-700 w-full">
    <h1>Overview</h1>

    <p>
      The consistent use of color in our product keeps cognitive loads low, and
      makes for a unified and engaging user experience. The colors are designed
      to be clear and accessible.
    </p>

    <hr />

    <h2>Primary Colors</h2>

    <div class="grid grid-cols-4 gap-4">
      <colorCard
        v-for="color in primaryColors"
        :key="color"
        :colorClass="color"
      />
    </div>

    <h2 class="pt-8">Secondary Colors</h2>

    <div class="grid grid-cols-4 gap-4">
      <colorCard
        v-for="color in secondaryColors"
        :key="color"
        :colorClass="color"
      />
    </div>

    <h2 class="pt-8">Tailwind Colors</h2>

    <p>
      The entire Tailwind color palette is also available for use in the app. As
      we develop more components, we will add them to the design system.
    </p>
  </article>
</template>

<script setup lang="ts">
import colorCard from "./colorCard.vue";

const primaryColors = [
  "bg-primary-50",
  "bg-primary-100",
  "bg-primary-200",
  "bg-primary-300",
  "bg-primary-400",
  "bg-primary-500",
  "bg-primary-600",
  "bg-primary-700",
  "bg-primary-800",
  "bg-primary-900",
];

const secondaryColors = [
  "bg-secondary-50",
  "bg-secondary-100",
  "bg-secondary-200",
  "bg-secondary-300",
  "bg-secondary-400",
  "bg-secondary-500",
  "bg-secondary-600",
  "bg-secondary-700",
  "bg-secondary-800",
  "bg-secondary-900",
];
</script>
