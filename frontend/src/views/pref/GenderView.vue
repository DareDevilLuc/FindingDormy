<script setup>
import { ref, computed } from 'vue'
import { usePreferencesStore } from '../../stores/preferences'

const store = usePreferencesStore()
const preferences = computed(() => store.preferences)

const genderOptions = ['Male', 'Female', 'Do not mind']
const hoveredOption = ref(null)

const selectGender = (option) => {
  store.updatePreference('gender', option)
}

const getOptionDescription = (option) => {
  const descriptions = {
    'Male': 'Prefer male roommates',
    'Female': 'Prefer female roommates',
    'Do not mind': 'Open to any gender'
  }
  return descriptions[option] || ''
}
</script>

<template>
  <div class="animate-fade-in">
    <h2 class="text-2xl md:text-3xl xl:text-4xl font-bold text-slate-900 mb-6 md:mb-8">
      Gender Preference
    </h2>
    <div class="space-y-3 md:space-y-4">
      <div
        v-for="option in genderOptions"
        :key="option"
        class="relative"
        @mouseenter="hoveredOption = option"
        @mouseleave="hoveredOption = null"
      >
        <button
          @click="preferences.gender = option"
          :class="[
            'w-full p-4 md:p-5 lg:p-6 rounded-xl md:rounded-2xl border-2 transition-all text-left font-medium',
            'text-base md:text-lg lg:text-xl',
            preferences.gender === option
              ? 'border-blue-600 bg-blue-50 text-blue-900 shadow-md scale-[1.02]'
              : 'border-slate-200 bg-white text-slate-700 hover:border-blue-400 hover:shadow-md'
          ]"
        >
          {{ option }}
        </button>
        <!-- Tooltip -->
        <transition name="fade">
          <div
            v-if="hoveredOption === option"
            class="absolute top-full left-1/2 -translate-x-1/2 w-4/5 mt-2 bg-gray-800 text-white rounded-lg p-2 md:p-3 z-10 shadow-lg text-xs md:text-sm"
          >
            {{ getOptionDescription(option) }}
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

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