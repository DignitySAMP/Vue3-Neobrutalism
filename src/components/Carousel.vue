<template>
  <div class="w-fit flex justify-center items-center gap-2">
    <div
      class="bg-neobrutalism rounded-lg border-2 border-black p-2 hover:cursor-pointer"
      :class="{ 'opacity-50 pointer-events-none': currentIndex === 0 }"
      @click="handlePrevious"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="h-4 w-4"
      >
        <path d="m12 19-7-7 7-7" />
        <path d="M19 12H5" />
      </svg>
    </div>

    <div class="carousel-container overflow-hidden">
      <div
        class="carousel-wrapper flex gap-8 transition-transform duration-500"
        :style="{
          transform: `translateX(${-currentIndex * (100 + gapPercentage)}%)`,
        }"
      >
        <div
          v-for="(slide, index) in slides"
          :key="index"
          class="bg-neobrutalism rounded-lg border-2 border-black min-w-48 min-h-48 flex-shrink-0 w-full flex justify-center items-center"
          v-html="slide"
        ></div>
      </div>
    </div>

    <div
      class="bg-neobrutalism rounded-lg border-2 border-black p-2 hover:cursor-pointer"
      :class="{
        'opacity-50 pointer-events-none': currentIndex === slides.length - 1,
      }"
      @click="handleNext"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="h-4 w-4 rotate-180"
      >
        <path d="m12 19-7-7 7-7" />
        <path d="M19 12H5" />
      </svg>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  slides: {
    type: Array,
    required: true,
    default: () => [],
  },
});

const currentIndex = ref(0);
const gapPercentage = computed(() => (32 / 192) * 100); // Calculate gap percentage based on gap-8 (2rem = 32px) relative to container width (192px)

const handleNext = () => {
  if (props.slides.length === 0) return;
  currentIndex.value = (currentIndex.value + 1) % props.slides.length;
};

const handlePrevious = () => {
  if (props.slides.length === 0) return;
  currentIndex.value = (currentIndex.value - 1) % props.slides.length;
};
</script>

<style scoped>
.carousel-container {
  width: 192px; /* min-w-48 = 12rem = 192px */
}

.carousel-wrapper {
  width: 100%;
}
</style>
