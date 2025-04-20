<template>
  <div
    class="py-1 px-2.5 text-xs text-text font-base rounded border-2 border-black flex justify-center items-center"
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
  }
});
</script>
