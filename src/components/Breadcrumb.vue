<template>
  <nav aria-label="breadcrumb" class="m500:text-xs">
    <ol
      class="flex flex-wrap items-center gap-1.5 font-base break-words text-sm text-text dark:text-darkText sm:gap-2.5"
    >
      <template v-for="(item, index) in displayItems" :key="index">
        <li class="inline-flex items-center gap-1.5">
          <template v-if="item.type === 'ellipsis'">
            <span class="px-1">...</span>
          </template>
          <template v-else>
            <template v-if="index === displayItems.length - 1">
              <span
                role="link"
                aria-disabled="true"
                aria-current="page"
                class=""
              >
                {{ item.label }}
              </span>
            </template>
            <template v-else>
              <a :href="item.url">{{ item.label }}</a>
            </template>
          </template>
        </li>

        <li
          v-if="index < displayItems.length - 1"
          role="presentation"
          aria-hidden="true"
          class="[&>svg]:size-3.5"
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
            class="lucide lucide-chevron-right"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </li>
      </template>
    </ol>
  </nav>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  items: {
    type: Array,
    required: true,
    validator: (items) => {
      return items.every(
        (item) => typeof item === "object" && "label" in item && "url" in item
      );
    },
  },
});

const displayItems = computed(() => {
  if (props.items.length <= 3) {
    return props.items;
  }

  return [props.items[0], { type: "ellipsis" }, ...props.items.slice(-2)];
});
</script>
