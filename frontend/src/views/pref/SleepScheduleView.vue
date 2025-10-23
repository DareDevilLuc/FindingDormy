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
    <div class="flex flex-col items-center justify-center w-full h-full">
        <!-- Blue box container -->
        <div class="rounded-3xl flex flex-col items-center shadow-md bg-blue-100 
            w-full max-w-xs h-auto p-6
            md:max-w-sm md:p-8 
            xl:max-w-lg xl:rounded-[50px] xl:p-12">
            
            <p class="font-judson text-center
                text-xl mb-4
                md:text-2xl md:mb-6
                xl:text-4xl xl:mb-8">
                Sleep Schedule
            </p>

            <div class="w-full
                space-y-3
                md:space-y-4
                xl:space-y-5">
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
                            'w-full rounded-xl font-medium transition-all duration-200',
                            'py-3 px-4 text-base',
                            'md:py-4 md:px-6 md:text-lg',
                            'xl:py-5 xl:px-8 xl:text-xl xl:rounded-2xl',
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
                            class="absolute top-full left-1/2 -translate-x-1/2 w-4/5 mt-2 bg-gray-800 text-white rounded-lg p-3 z-10 shadow-lg
                                text-xs
                                md:text-sm
                                xl:text-base xl:p-4"
                        >
                            {{ schedule.description }}
                        </div>
                    </transition>
                </div>
            </div>
        </div>
    </div>
</template>