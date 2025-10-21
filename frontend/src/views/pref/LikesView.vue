<script setup>
import { ref } from 'vue'

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
}
</script>

<template>
    <div class="flex flex-col items-center justify-center mt-[-2rem]">
      <!-- Blue box container -->
      <div
        class="rounded-3xl px-10 py-8 flex flex-col items-center shadow-md"
        style="width: 800px; height: 400px; background-color: #DCF0FA;"
      >
        <p
          class="font-judson text-[24px] mb-6 text-center"
          style="font-family: 'Judson', serif;"
        >
          Likes and Interests
        </p>
        <!-- Interest Buttons Grid -->
        <div class="grid grid-cols-4 gap-3 mb-6">
          <button
            v-for="interest in interests"
            :key="interest"
            @click="toggleInterest(interest)"
            @mouseenter="hoveredInterest = interest"
            @mouseleave="hoveredInterest = null"
            :class="[
              'py-2 px-3 rounded-lg font-medium text-sm transition-all duration-200',
              selectedInterests.includes(interest)
                ? 'bg-blue-600 text-white'
                : hoveredInterest === interest
                ? 'bg-blue-500 text-white'
                : 'bg-blue-400 text-white'
            ]"
          >
            {{ interest }}
          </button>
        </div>

        <!-- Selected Section -->
        <div class="bg-white bg-opacity-50 rounded-lg p-4">
          <p class="text-gray-700 font-semibold mb-2">
            Selected: <span class="text-blue-600">{{ selectedInterests.length }}/5</span>
          </p>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="interest in selectedInterests"
              :key="interest"
              class="bg-blue-500 text-white px-5 py-1 rounded-full text-sm"
            >
              {{ interest }}
            </span>
            <span v-if="selectedInterests.length === 0" class="text-gray-500 text-sm">
              No interests selected yet
            </span>
          </div>
        </div>
    </div>
    </div>
</template>