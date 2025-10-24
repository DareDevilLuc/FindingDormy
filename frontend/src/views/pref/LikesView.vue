<script setup>
import { ref } from 'vue'
import { usePreferencesStore } from '../../stores/preferences'

const store = usePreferencesStore()
const interests = [
  'Music',
  'Movies',
  'Gaming',
  'Sports',
  'Travel',
  'Food',
  'Reading',
  'Art',
  'Photography',
  'Fitness',
  'Fashion',
  'Technology',
  'Animals',
  'Nature',
  'Cooking',
  'Dancing',
  'Writing',
  'Learning',
  'Shopping',
  'Social Media'
]

const selectedInterests = ref([])
const hoveredInterest = ref(null)

const toggleInterest = (interest) => {
  const index = selectedInterests.value.indexOf(interest)
  
  if (index > -1) {
    // Remove if already selected
    selectedInterests.value.splice(index, 1)
  } else if (selectedInterests.value.length < 5) {
    // Add if not at max limit
    selectedInterests.value.push(interest)
  }
  
  // Update store with current selections
  store.updatePreference('interests', selectedInterests.value)
}
</script>

<template>
    <div class="flex flex-col items-center justify-center w-full h-full">
        <!-- Blue box container -->
        <div class="rounded-3xl flex flex-col items-center shadow-md bg-blue-100 
            w-full max-w-sm h-auto p-6
            md:max-w-md md:p-8 
            xl:max-w-2xl xl:rounded-[50px] xl:p-10">
            
            <p class="font-judson text-center
                text-xl mb-4
                md:text-2xl md:mb-5
                xl:text-4xl xl:mb-6">
                Likes and Interests
            </p>

            <!-- Interest Buttons Grid -->
            <div class="grid gap-2 mb-4 w-full
                grid-cols-4
                md:grid-cols-5 md:gap-3
                xl:grid-cols-5 xl:gap-4">
              <button
                v-for="interest in interests"
                :key="interest"
                @click="toggleInterest(interest)"
                @mouseenter="hoveredInterest = interest"
                @mouseleave="hoveredInterest = null"
                :class="[
                  'rounded-lg font-medium transition-all duration-200',
                  'text-[8px] py-2 px-1',
                  'md:text-[8px] md:py-2 md:px-2',
                  'xl:text-[12px] xl:py-3 xl:px-4',
                  selectedInterests.includes(interest)
                    ? 'bg-blue-600 text-white transform scale-105 shadow-md'
                    : hoveredInterest === interest
                    ? 'bg-blue-500 text-white'
                    : 'bg-blue-400 text-white'
                ]"
              >
                {{ interest }}
              </button>
            </div>

            <!-- Selected Section -->
            <div class="bg-white bg-opacity-50 rounded-lg p-3 w-full
                md:p-4
                xl:p-5 xl:rounded-xl">
              <p class="font-semibold mb-2
                text-[10px] text-gray-700
                md:text-sm
                xl:text-base">
                Selected: <span class="text-blue-600">{{ selectedInterests.length }}/5</span>
              </p>
              <div class="flex flex-wrap gap-2 min-h-[2.5rem] xl:min-h-[3rem]">
                <span
                  v-for="interest in selectedInterests"
                  :key="interest"
                  class="bg-blue-500 text-white rounded-full
                    text-[10px] px-3 py-1
                    md:text-sm md:px-4
                    xl:text-base xl:px-5"
                >
                  {{ interest }}
                </span>
                <span v-if="selectedInterests.length === 0" 
                    class="text-gray-500
                    text-[10px]
                    md:text-sm
                    xl:text-base">
                  Select up to 5 interests
                </span>
              </div>
            </div>
        </div>
    </div>
</template>
