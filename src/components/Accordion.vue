<template>
  <div
    class="rounded border-[3px] border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[5px] hover:translate-y-[5px] transition duration-150 ease-in-out hover:cursor-pointer"
    @click="accordionValue = !accordionValue"
  >
    <div
      class="flex items-center justify-between p-3 text-left bg-neobrutalism hover:cursor-pointer"
    >
      {{ props.title }}
      <svg
        :class="{ 'rotate-180': accordionValue }"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-chevron-down h-5 w-5 shrink-0 transition-transform duration-200"
      >
        <path d="m6 9 6 6 6-6"></path>
      </svg>
    </div>
    <transition
      name="accordion"
      @enter="onEnter"
      @after-enter="onAfterEnter"
      @leave="onLeave"
    >
      <div
        v-show="accordionValue"
        class="bg-gray-100 border-t-[3px] border-black overflow-hidden"
      >
        <div class="p-3">
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});

const accordionValue = ref(false);

function onEnter(el) {
  el.style.height = "0";

  void el.offsetHeight;
  el.style.height = el.scrollHeight + "px";
}

function onAfterEnter(el) {
  el.style.height = "auto";
}

function onLeave(el) {
  el.style.height = el.scrollHeight + "px";

  void el.offsetHeight;
  el.style.height = "0";
}
</script>

<style>
.accordion-enter-active,
.accordion-leave-active {
  transition: height 0.2s ease-out;
}

.accordion-enter-from,
.accordion-leave-to {
  height: 0;
}
</style>
