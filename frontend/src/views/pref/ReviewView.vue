<template>
  <div class="animate-fade-in">
    <h2 class="text-2xl md:text-3xl xl:text-4xl font-bold text-slate-900 mb-6 md:mb-8">
      Review Your Preferences
    </h2>

    <div class="space-y-4 md:space-y-5">
      <!-- Gender Preference -->
      <div class="bg-slate-50 p-4 md:p-5 rounded-lg md:rounded-xl border border-slate-200">
        <p class="text-xs md:text-sm text-slate-600">Gender Preference</p>
        <p class="font-semibold text-slate-900 text-base md:text-lg">
          {{ preferences.gender }}
        </p>
      </div>

      <!-- Sleeping Habit -->
      <div class="bg-slate-50 p-4 md:p-5 rounded-lg md:rounded-xl border border-slate-200">
        <p class="text-xs md:text-sm text-slate-600">Sleeping Habit</p>
        <p class="font-semibold text-slate-900 text-base md:text-lg">
          {{ preferences.sleeping }}
        </p>
      </div>

      <!-- Cleanliness Level -->
      <div class="bg-slate-50 p-4 md:p-5 rounded-lg md:rounded-xl border border-slate-200">
        <p class="text-xs md:text-sm text-slate-600">Cleanliness Level</p>
        <p class="font-semibold text-slate-900 text-base md:text-lg">
          {{ preferences.cleanliness }} / 5 ★
        </p>
      </div>

      <!-- Location -->
      <div class="bg-slate-50 p-4 md:p-5 rounded-lg md:rounded-xl border border-slate-200">
        <p class="text-xs md:text-sm text-slate-600">Location</p>
        <p class="font-semibold text-slate-900 text-base md:text-lg">
          {{ preferences.location }}
        </p>
      </div>

      <!-- Budget -->
      <div class="bg-slate-50 p-4 md:p-5 rounded-lg md:rounded-xl border border-slate-200">
        <p class="text-xs md:text-sm text-slate-600">Budget</p>
        <p class="font-semibold text-slate-900 text-base md:text-lg">
          ₱{{ preferences.budget?.toLocaleString() }} / month
        </p>
      </div>

      <!-- Interests -->
      <div class="bg-slate-50 p-4 md:p-5 rounded-lg md:rounded-xl border border-slate-200">
        <p class="text-xs md:text-sm text-slate-600">Interests</p>
        <div class="flex flex-wrap gap-2 mt-3">
          <span
            v-for="interest in preferences.interests"
            :key="interest"
            class="bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-xs md:text-sm font-medium"
          >
            {{ interest }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { usePreferencesStore } from '../../stores/preferences'

const preferencesStore = usePreferencesStore()
const preferences = computed(() => preferencesStore.preferences)
</script>

<style scoped>
.animate-fade-in {
  animation: fade-in 0.3s ease-in-out;
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
