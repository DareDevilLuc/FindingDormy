<script setup>
import { ref, computed } from 'vue'
import { usePreferencesStore } from '../../stores/preferences'

const store = usePreferencesStore()
const preferences = computed(() => store.preferences)
const hoverRating = ref(0)
const stars = [1, 2, 3, 4, 5]

function setRating(value) {
  store.updatePreference('cleanliness', value)
}
</script>

<template>
      <div class="animate-fade-in">
        <h2 class="text-2xl md:text-3xl xl:text-4xl font-bold text-slate-900 mb-6 md:mb-8">
          Cleanliness Level
        </h2>
        <div class="bg-white rounded-2xl shadow-lg p-6 md:p-8 text-center
            w-full max-w-xs h-auto
            md:max-w-sm 
            xl:max-w-lg xl:rounded-[50px] xl:p-12">
          
          <div class="flex justify-center gap-4 md:gap-6">
            <button
              v-for="star in stars"
              :key="star"
              @click="setRating(star)"
              @mouseenter="hoverRating = star"
              @mouseleave="hoverRating = 0"
              class="text-4xl md:text-5xl xl:text-6xl transition-all hover:scale-125"
              :class="star <= (hoverRating || preferences.cleanliness) ? 'text-yellow-400' : 'text-slate-300'"
            >
              ★
            </button>
          </div>

          <p class="text-center mt-6 md:mt-8 text-slate-600 font-medium text-base md:text-lg">
            {{ preferences.cleanliness 
              ? `You rated yourself ${preferences.cleanliness} out of 5 stars in cleanliness!` 
              : 'Select a rating' }}
          </p>
        </div>
      </div>
</template>
