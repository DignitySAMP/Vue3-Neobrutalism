<template>
  <div
    class="p-2 rounded-lg h-10 px-4 py-2 text-sm font-base text-text flex flex-row justify-center items-center border-[3px] border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[5px] hover:translate-y-[5px] transition duration-150 ease-in-out hover:cursor-pointer"
    :class="{
      'bg-neobrutalism': props.type === 'primary',
      'bg-gray-100': props.type === 'secondary',
      'bg-zinc-900 text-white': props.type === 'destructive',
    }"
  >
    <slot></slot>
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
});
</script>
