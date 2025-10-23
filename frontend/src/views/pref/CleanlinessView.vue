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
      <div class="flex flex-col items-center justify-center w-full h-full">
        <div class="rounded-3xl flex flex-col items-center shadow-md bg-blue-100 
            w-full max-w-xs h-auto p-6
            md:max-w-sm md:p-8 
            xl:max-w-lg xl:rounded-[50px] xl:p-12">
          <p class="font-judson text-center
            text-xl mb-4
            md:text-2xl md:mb-6
            xl:text-4xl xl:mb-8">
            Cleanliness Level
          </p>

          <div class="flex mb-6 
            space-x-2 
            md:space-x-3 
            xl:space-x-5 xl:mb-10">
            <button
              v-for="star in stars"
              :key="star"
              @click="setRating(star)"
              @mouseenter="hoverRating = star"
              @mouseleave="hoverRating = 0"
              class="focus:outline-none transition-transform duration-200 ease-out"
              :class="hoverRating >= star ? 'scale-125' : 'scale-100'"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="transition-colors duration-200 
                w-8 h-8 
                md:w-10 md:h-10 
                xl:w-16 xl:h-16"
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

          <p class="text-gray-700 text-center
            text-base
            md:text-lg
            xl:text-2xl">
            You rated yourself 
            <span class="font-semibold text-gray-800">
              {{ rating > 0 ? rating : 'no' }}
            </span> 
            star<span v-if="rating !== 1">s</span> in cleanliness!
          </p>
        </div>
      </div>
</template>
