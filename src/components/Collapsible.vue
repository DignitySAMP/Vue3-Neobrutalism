<template>
    <div class="flex flex-col gap-2">
    <span
        class="bg-neobrutalism rounded-lg border-[2px] border-black px-4 py-2 flex justify-between items-center"
    >
        <slot></slot>
        <div class="p-1 border-[2px] border-black bg-white rounded-lg" @click="showCollapsible = !showCollapsible">
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
            class="lucide lucide-chevrons-up-down h-4 w-4"
        >
            <path d="m7 15 5 5 5-5"></path>
            <path d="m7 9 5-5 5 5"></path>
        </svg>
        </div>
    </span>
    <div class="flex flex-col gap-2" v-if="showCollapsible">
        <span
        v-for="(option, index) in props.options"
        :key="index"
        class="bg-neobrutalism rounded-lg border-[2px] border-black px-4 py-2"
        >
        <h4 class="text-sm font-heading">
            {{ option }}
        </h4>
        </span>
    </div>
    </div>
</template>
<script setup>
import { ref } from "vue";

const props = defineProps({
  options: {
    type: Array,
    required: true,
  },
});

const showCollapsible = ref(false);
</script>
