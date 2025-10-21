<script setup>
import { ref } from 'vue';

// track the selected rating (1 to 5)
const rating = ref(0);

// stars array just for looping through 1–5 stars
const stars = [1, 2, 3, 4, 5];

// when user clicks a star
function setRating(value) {
  rating.value = value;
}
</script>

<template>
  <div class="flex flex-col items-center justify-center mt-[-2rem]">
    <p class="font-judson text-[30px] mb-4" style="font-family: 'Judson', serif;">
      Cleanliness Level
    </p>

    <!-- Star Rating -->
    <div class="flex space-x-2 mb-6">
      <button
        v-for="star in stars"
        :key="star"
        @click="setRating(star)"
        class="focus:outline-none transition-all"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-10 h-10"
          :class="star <= rating ? 'text-yellow-400' : 'text-gray-400'"
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
    <p class="text-gray-600 text-[18px]" v-if="rating > 0">
      You rated yourself {{ rating }} star<span v-if="rating > 1">s in cleanliness !</span>
    </p>
  </div>
</template>
