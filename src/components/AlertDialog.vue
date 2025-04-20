<template>
  <div
    class="fixed inset-0 z-50 bg-[rgba(0,0,0,.8)] flex items-center justify-center"
    @click="handleOutsideClick"
  >
    <div
      class="bg-neobrutalism-light p-5 w-full max-w-lg rounded border-[3px] border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-2"
    >
      <h1 class="font-bold">{{ title }}</h1>
      <p class="text-sm font-base text-text">
        <slot></slot>
      </p>
      <div class="flex justify-end gap-4">
        <Button type="secondary" @click="$emit('close')">
          {{ closeButtonText }}
        </Button>
        <Button v-if="actionFunction" type="primary" @click="handleAction">
          {{ actionButtonText }}
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";
import Button from "@/components/Button.vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  closeButtonText: {
    type: String,
    default: "Close",
  },
  actionButtonText: {
    type: String,
    default: "",
  },
  actionFunction: {
    type: Function,
    default: null,
  },
});

const emit = defineEmits(["close"]);

const handleOutsideClick = (event) => {
  if (event.target === event.currentTarget) {
    emit("close");
  }
};

const handleAction = async () => {
  if (props.actionFunction) {
    await props.actionFunction();
    emit("close");
  }
};

const handleEscapeKey = (event) => {
  if (event.key === "Escape") {
    emit("close");
  }
};

onMounted(() => {
  document.addEventListener("keydown", handleEscapeKey);
});

onUnmounted(() => {
  document.removeEventListener("keydown", handleEscapeKey);
});
</script>
