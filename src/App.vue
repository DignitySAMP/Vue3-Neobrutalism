<template>
  <div class="w-full h-full bg-neobrutalism-light pt-5 pb-5">
    <div class="bg-neobrutalism-light container mx-auto flex flex-col gap-5">
      <Accordion title="Is it accessible?">
        Yes! This accordion is fully accessible.
      </Accordion>

      
      <div class="flex gap-2">
        <Button>Primary</Button>
        <Button type="secondary">Secondary</Button>
        <Button type="destructive">Destructive</Button>
      </div>

      <Button type="secondary" @click="showAlert = !showAlert"
        >Show Alert</Button
      >

      <AlertDialog
        v-if="showAlert"
        title="Save Changes"
        close-button-text="Cancel"
        action-button-text="Save"
        :action-function="handleSave"
        @close="showAlert = false"
      >
        Do you want to save your changes?
      </AlertDialog>

      <Alert title="Primary">
        <p class="text-sm font-base">
          You can add components and dependencies to your app using the cli.
        </p>
      </Alert>

      <Alert title="Secondary" type="secondary">
        <p class="text-sm font-base">
          You can add components and dependencies to your app using the cli.
        </p>
      </Alert>

      <Alert title="Destructive" type="destructive">
        <p class="text-sm font-base">
          You can add components and dependencies to your app using the cli.
        </p>
      </Alert>

      <div class="flex gap-2">
        <Avatar />
        <Skeleton />
      </div>

      <div class="flex gap-2">
        <Badge type="primary">Primary</Badge>
        <Badge type="secondary">Secondary</Badge>
        <Badge type="destructive">Destructive</Badge>
      </div>

      <Breadcrumb :items="breadcrumbItems" />
      <Breadcrumb :items="breadcrumbItems2" />

      <div class="flex flex-col gap-2">
        <Calendar v-model="selectedDate" @dateSelected="handleDateSelected" />
        
        {{ new Date(selectedDate).toDateString() }}
      </div>
      <Card>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, enim.
        Amet, consectetur itaque expedita culpa totam ullam ducimus fugiat nihil
        eius? Maiores ad recusandae voluptas odit odio corrupti est vero!
      </Card>

      <Carousel :slides="slides" />

      <div class="flex gap-2">
        <Checkbox v-model="isChecked" :checked="true" />
        {{ isChecked ? 'Checked' : 'Unchecked' }}
      </div> 

      <div class="mt-64"></div>
      <Collapsible :options="collapsibleOptions"> Click here to collapse the options! </Collapsible>
      <div class="mt-64"></div>

      <Combobox title="Options" :items="collapsibleOptions" v-model="comboboxModel" :modelValue="comboboxModel">Click here.</Combobox>
      <div class="mt-64"></div>

    </div>
  </div>
</template>

<script setup>
// TODO: Add the select button for datepicker: https://www.neobrutalism.dev/components/date-picker
// Then do https://www.neobrutalism.dev/components/drawer
// Don't forget input
import { ref } from "vue";

import Accordion from "@/components/Accordion.vue";
import AlertDialog from "@/components/AlertDialog.vue";
import Alert from "@/components/Alert.vue";
import Button from "@/components/Button.vue";
import Avatar from "@/components/Avatar.vue";
import Skeleton from "@/components/Skeleton.vue";
import Badge from "@/components/Badge.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
import Calendar from "@/components/Calendar.vue";
import Card from "@/components/Card.vue";
import Carousel from "./components/Carousel.vue";
import Checkbox from "./components/Checkbox.vue";
import Collapsible from "./components/Collapsible.vue";
import Combobox from "./components/Combobox.vue";

const showAlert = ref(false);
const handleSave = async () => {
  console.log("Clicked 'save' button in the alert.");
};

const breadcrumbItems = [
  { label: "One", url: "#" },
  { label: "Two", url: "#" },
  { label: "Three", url: "#" },
];
const breadcrumbItems2 = [
  { label: "One", url: "#" },
  { label: "Two", url: "#" },
  { label: "Three", url: "#" },
  { label: "Four", url: "#" },
  { label: "Five", url: "#" },
];

const selectedDate = ref(new Date());
const handleDateSelected = (formattedDate) => {
  console.log("Selected date:", formattedDate); // Format: "YYYY-MM-DD"
};

const slides = ref([
  "<div>Content 1</div>",
  "<div>Content 2</div>",
  "<div>Content 3</div>",
]);

const isChecked = ref(false);

const collapsibleOptions = ref(['Option 1', 'Option 2', 'Option 3', 'Option 4']);
const comboboxModel = ref('');

</script>
