<script setup>
import { ref } from 'vue'

const rating = ref(0)
const hoverRating = ref(0)
const stars = [1, 2, 3, 4, 5]

function setRating(value) {
  rating.value = value
}
</script>

<template>
  <div class="flex flex-col items-center justify-center mt-[-2rem] max-w-[50%] max-h-[50%] ">
    <!-- Blue box container -->
    <div
      class="rounded-3xl px-10 py-8 flex flex-col items-center shadow-md bg-blue-100 w-full h-full">
      <p
        class="font-judson text-[24px] mb-6 text-center"
        style="font-family: 'Judson', serif;"
      >
        Cleanliness Level
      </p>

      <!-- Star Rating -->
      <div class="flex space-x-3 mb-6">
        <button
          v-for="star in stars"
          :key="star"
          @click="setRating(star)"
          @mouseenter="hoverRating = star"
          @mouseleave="hoverRating = 0"
          class="focus:outline-none transition-all duration-200 ease-out transform"
          :class="hoverRating >= star ? 'scale-125' : 'scale-100'"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-10 h-10 transition-colors duration-200"
            :class="(star <= (hoverRating || rating)) ? 'text-yellow-400' : 'text-gray-400'"
          >
            <path
              fill-rule="evenodd"
              d="M12 17.27l5.18 3.05-1.64-5.81L20 9.24l-5.91-.51L12 3 9.91 8.73 4 9.24l4.46 5.27-1.64 5.81L12 17.27z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>

      <!-- Display selected rating -->
      <p class="text-gray-700 text-[20px]">
        You rated yourself 
        <span class="font-semibold text-white-700">
          {{ rating > 0 ? rating : 'no' }}
        </span> 
        star<span v-if="rating !== 1">s</span> in cleanliness!
      </p>
    </div>
  </div>
</template>
