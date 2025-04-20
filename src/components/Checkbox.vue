<template>
  <div class="relative inline-flex h-5 w-5">
    <input
      type="checkbox"
      class="peer h-full w-full border-2 border-black appearance-none cursor-pointer focus:outline-none checked:bg-neobrutalism"
      v-model="isChecked"
      @change="onChange"
    />
    <span
      class="absolute inset-0 flex items-center justify-center opacity-0 peer-checked:opacity-100 pointer-events-none"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="h-4 w-4"
      >
        <path d="M20 6 9 17l-5-5"></path>
      </svg>
    </span>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const props = defineProps({
  checked: {
    type: Boolean,
    default: false,
  },
});

const isChecked = ref(props.checked);
const emit = defineEmits(["update:modelValue"]);

const onChange = () => {
  emit("update:modelValue", isChecked.value);
};

onMounted(() => {
  isChecked.value = props.checked;
  emit("update:modelValue", isChecked.value);
})
</script>
