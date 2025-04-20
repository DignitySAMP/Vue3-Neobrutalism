<template>
  <div
    class="w-fit p-2 bg-neobrutalism rounded-lg border-[2px] border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]"
  >
    <div class="flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0">
      <div class="space-y-4">

        
        <div class="flex justify-center text-text pt-1 relative items-center">
          <div class="text-sm" aria-live="polite" role="presentation">
            {{ formatDate(currentDate) }}
          </div>
          <div class="space-x-1 flex items-center">
            <button
              @click="previousMonth"
              class="p-2 rounded-lg h-7 w-7 text-sm font-base text-text flex flex-row justify-center items-center border-2 border-black hover:cursor-pointer absolute left-1"
              aria-label="Previous month"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              @click="nextMonth"
              class="p-2 rounded-lg h-7 w-7 text-sm font-base text-text flex flex-row justify-center items-center border-2 border-black hover:cursor-pointer absolute right-1"
              aria-label="Next month"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>


        <table class="w-full border-collapse space-y-1">
          <thead>
            <tr class="flex">
              <th
                v-for="day in weekDays"
                :key="day"
                class="text-text rounded-lg w-9 font-base text-[0.8rem]"
              >
                {{ day }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(week, weekIndex) in calendarDays"
              :key="weekIndex"
              class="flex w-full mt-2"
            >
              <td
                v-for="(date, dateIndex) in week"
                :key="dateIndex"
                class="h-9 w-9 text-center text-sm p-0 relative"
              >
                <button
                  @click="selectDate(date)"
                  :class="[
                    'p-2 rounded-lg h-9 w-9 text-sm font-base',
                    'flex flex-row justify-center items-center',
                    'border-2 border-black',
                    'hover:cursor-pointer',
                    'transition duration-150 ease-in-out',
                    {
                      'opacity-50': date.month !== currentDate.getMonth(),
                      'bg-black text-white': isSelected(date),
                      'bg-neobrutalism-light': !isSelected(date),
                    },
                  ]"
                >
                  {{ date.day }}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

// Define props and emits
const props = defineProps({
  modelValue: {
    type: Date,
    default: () => new Date(),
  },
});

const emit = defineEmits(["update:modelValue", "dateSelected"]);

// State
const currentDate = ref(new Date(props.modelValue));
const selectedDate = ref(new Date(props.modelValue));

// Constants
const weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// Helper functions
const getDaysInMonth = (year, month) => {
  return new Date(year, month + 1, 0).getDate();
};

const getFirstDayOfMonth = (year, month) => {
  return new Date(year, month, 1).getDay();
};

const padNumber = (number) => {
  return number.toString().padStart(2, "0");
};

// Format date for header
const formatDate = (date) => {
  return `${months[date.getMonth()]} ${date.getFullYear()}`;
};

// Format date for output
const formatDateOutput = (date) => {
  const year = date.getFullYear();
  const month = padNumber(date.getMonth() + 1);
  const day = padNumber(date.getDate());
  return `${year}-${month}-${day}`;
};

// Calendar computation
const calendarDays = computed(() => {
  const year = currentDate.value.getFullYear();
  const month = currentDate.value.getMonth();

  const daysInMonth = getDaysInMonth(year, month);
  const firstDayOfMonth = getFirstDayOfMonth(year, month);

  const daysInPrevMonth = getDaysInMonth(year, month - 1);
  const prevMonth = month - 1 < 0 ? 11 : month - 1;
  const prevMonthYear = month - 1 < 0 ? year - 1 : year;

  const nextMonth = month + 1 > 11 ? 0 : month + 1;
  const nextMonthYear = month + 1 > 11 ? year + 1 : year;

  const days = [];
  let week = [];

  // Previous month days
  for (let i = firstDayOfMonth - 1; i >= 0; i--) {
    week.push({
      day: daysInPrevMonth - i,
      month: prevMonth,
      year: prevMonthYear,
      date: new Date(prevMonthYear, prevMonth, daysInPrevMonth - i),
    });
  }

  // Current month days
  for (let i = 1; i <= daysInMonth; i++) {
    week.push({
      day: i,
      month: month,
      year: year,
      date: new Date(year, month, i),
    });

    if (week.length === 7) {
      days.push(week);
      week = [];
    }
  }

  // Next month days
  let dayCounter = 1;
  while (week.length < 7) {
    week.push({
      day: dayCounter,
      month: nextMonth,
      year: nextMonthYear,
      date: new Date(nextMonthYear, nextMonth, dayCounter),
    });
    dayCounter++;
  }
  days.push(week);

  // Fill remaining weeks
  while (days.length < 6) {
    week = [];
    for (let i = 0; i < 7; i++) {
      week.push({
        day: dayCounter,
        month: nextMonth,
        year: nextMonthYear,
        date: new Date(nextMonthYear, nextMonth, dayCounter),
      });
      dayCounter++;
    }
    days.push(week);
  }

  return days;
});

// Methods
const nextMonth = () => {
  const newDate = new Date(currentDate.value);
  newDate.setMonth(newDate.getMonth() + 1);
  currentDate.value = newDate;
};

const previousMonth = () => {
  const newDate = new Date(currentDate.value);
  newDate.setMonth(newDate.getMonth() - 1);
  currentDate.value = newDate;
};

const selectDate = (dateObj) => {
  selectedDate.value = dateObj.date;
  emit("update:modelValue", dateObj.date);
  emit("dateSelected", formatDateOutput(dateObj.date));
};

const isSelected = (dateObj) => {
  return (
    selectedDate.value &&
    dateObj.day === selectedDate.value.getDate() &&
    dateObj.month === selectedDate.value.getMonth() &&
    dateObj.year === selectedDate.value.getFullYear()
  );
};

defineExpose({
  selectedDate,
  formattedSelectedDate: computed(() => formatDateOutput(selectedDate.value)),
});
</script>
