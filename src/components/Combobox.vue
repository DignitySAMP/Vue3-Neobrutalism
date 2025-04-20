<template>
  <div class="flex flex-col gap-1">
    <span
      class="bg-neobrutalism rounded-lg border-[2px] border-black px-4 py-2 flex items-center justify-between hover:cursor-pointer"
      @click="showCombobox = !showCombobox"
    >
      {{ optionText }}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-chevrons-up-down h-4 w-4 shrink-0"
      >
        <path d="m7 15 5 5 5-5"></path>
        <path d="m7 9 5-5 5 5"></path>
      </svg>
    </span>
    <div
      v-if="showCombobox"
      class="flex flex-col gap-1 bg-neobrutalism rounded-lg border-[2px] border-black w-full"
    >
      <div class="border-b-[2px] border-black px-2 py-1">
        <div class="p-2 flex gap-2 items-center">
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
            class="lucide lucide-search mr-2 h-4 w-4 shrink-0"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>
          <input
            type="text"
            v-model="searchText"
            :placeholder="'Search ' + props.title.toLowerCase()"
            class="w-full border-0 rounded-md bg-transparent text-sm outline-none placeholder:text-gray-700 placeholder:ml-1 disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>
      </div>
      <div class="p-2">
        <div
          v-if="filteredOptions.length === 0"
          class="text-sm px-2 py-1"
        >
          No {{ props.title.toLocaleLowerCase() }} found
        </div>
        <div
          v-else
          class="w-full"
          v-for="(item, index) in filteredOptions"
          :key="index"
        >
          <p
            @click="onComboboxSelect(item)"
            class="w-full px-2 py-1 hover:cursor-pointer hover:border-[2px] hover:border-black hover:rounded-lg flex items-center gap-2"
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
              class="lucide lucide-check mr-2 h-4 w-4 opacity-0"
              :class="optionText === item ? 'opacity-100' : ''"
            >
              <path d="M20 6 9 17l-5-5"></path>
            </svg>
            {{ item }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onBeforeMount, ref, computed } from "vue";

const showCombobox = ref(false);
const optionText = ref("");
const searchText = ref("");

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  items: {
    type: Array,
    required: true,
  },
  modelValue: {
    type: String,
    required: true,
  },
});

onBeforeMount(() => {
  optionText.value = 'Select ' + props.title.toLowerCase();
});

const emit = defineEmits(["update:modelValue"]);

const onComboboxSelect = (item) => {
  showCombobox.value = false;
  optionText.value = item;
  emit("update:modelValue", item);
};

const filteredOptions = computed(() => {
  if (!searchText.value) return props.items;
  return props.items.filter((item) =>
    item.toLowerCase().includes(searchText.value.toLowerCase())
  );
});
</script>
