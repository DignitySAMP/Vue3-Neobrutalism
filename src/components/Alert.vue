<template>
  <div
    class="flex items-center gap-2 p-2 rounded border-[3px] border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]"
    :class="{
      'bg-neobrutalism': props.type === 'primary',
      'bg-gray-100': props.type === 'secondary',
      'bg-zinc-900 text-white': props.type === 'destructive',
    }"
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
      class="lucide lucide-terminal h-4 w-4"
    >
      <polyline points="4 17 10 11 4 5"></polyline>
      <line x1="12" x2="20" y1="19" y2="19"></line>
    </svg>
    <div>
      <h5 class="font-bold">{{ props.title }}</h5>
      <div class="text-sm font-base text-text">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: "primary",
    validator: (value) =>
      ["primary", "secondary", "destructive"].includes(value),
  },
  title: {
    type: String,
    required: true,
  },
});
</script>
