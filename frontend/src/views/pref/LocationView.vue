<script setup>
import { ref, computed } from 'vue'
import { usePreferencesStore } from '../../stores/preferences'

const store = usePreferencesStore()
const preferences = computed(() => store.preferences)

// Placeholder data - this will be replaced with real functionality later
const locations = [
  'On Campus',
  'Near Campus',
  'City Center',
  'Suburbs'
]

const selectedLocation = ref(preferences.value.location || '')

function setLocation(value) {
  selectedLocation.value = value
  store.updatePreference('location', value)
}
</script>

<template>
  <div class="animate-fade-in">
    <h2 class="text-2xl md:text-3xl xl:text-4xl font-bold text-slate-900 mb-6 md:mb-8">
      Preferred Location
    </h2>
    <div class="bg-white rounded-2xl shadow-lg p-6 md:p-8 text-center
        w-full max-w-xs 
        md:max-w-sm
        xl:max-w-lg xl:rounded-[50px]">
      
      <p class="font-judson text-center
        text-xl mb-6
        md:text-2xl md:mb-8
        xl:text-4xl xl:mb-10">
        Where would you prefer to live?
      </p>

      <div class="grid grid-cols-1 gap-4 md:gap-5">
        <button
          v-for="location in locations"
          :key="location"
          @click="setLocation(location)"
          class="p-4 md:p-5 rounded-xl border-2 transition-all text-left"
          :class="[
            selectedLocation === location
              ? 'border-[#50B8E7] bg-blue-50 text-[#50B8E7]'
              : 'border-slate-200 hover:border-slate-300 text-slate-600 hover:bg-slate-50'
          ]"
        >
          <span class="font-medium text-base md:text-lg">{{ location }}</span>
        </button>
      </div>

      <p class="mt-6 md:mt-8 text-slate-500 text-sm md:text-base italic">
        Note: Exact locations and more options will be available in future updates
      </p>
    </div>
  </div>
</template>