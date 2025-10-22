<script setup>
import { ref } from 'vue'

const selectedSchedule = ref(null)
const hoveredSchedule = ref(null)

const schedules = [
  {
    id: 'night-owl',
    name: 'Night Owl',
    description: 'Awake at night, sleep during the day'
  },
  {
    id: 'early-bird',
    name: 'Early Bird',
    description: 'Wake up early, sleep early'
  },
  {
    id: 'moderate',
    name: 'Moderate',
    description: 'Regular sleep schedule, balanced hours'
  },
  {
    id: 'flexible',
    name: 'Flexible',
    description: 'Irregular sleep schedule, varies daily'
  }
]

const handleDone = () => {
  if (selectedSchedule.value) {
    console.log('Selected schedule:', selectedSchedule.value)
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

<template>
    <div class="flex flex-col items-center justify-center mt-[-3.5rem] max-w-[40%] max-h-[60%]">
      <!-- Blue box container -->
      <div
        class="rounded-3xl px-10 py-8 flex flex-col items-center shadow-md bg-blue-100 h-full w-full">
        <p
          class="font-judson text-[24px] mb-6 text-center"
          style="font-family: 'Judson', serif;"
        >
          Sleep Schedule
        </p>
  
        <div class="space-y-4 w-full">
          <div
            v-for="schedule in schedules"
            :key="schedule.id"
            class="relative"
            @mouseenter="hoveredSchedule = schedule.id"
            @mouseleave="hoveredSchedule = null"
          >
            <button
              @click="selectedSchedule = schedule.id"
              :class="[
                'w-full py-4 px-6 rounded-xl font-medium transition-all duration-200 text-lg',
                selectedSchedule === schedule.id
                  ? 'bg-[#50b8e7] text-white shadow-lg scale-[1.02]'
                  : 'bg-[#aee3f8] text-gray-700 hover:bg-[#50b8e7] hover:text-white hover:shadow-md'
              ]"
            >
              {{ schedule.name }}
            </button>
  
            <!-- Hover Tooltip -->
            <transition name="fade">
              <div
                v-if="hoveredSchedule === schedule.id"
                class="absolute top-full left-0 right-0 mt-2 bg-gray-800 text-white text-sm rounded-lg p-3 z-10 shadow-lg"
              >
                {{ schedule.description }}
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
</template>