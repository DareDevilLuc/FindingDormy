import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePreferencesStore = defineStore('preferences', () => {
  const preferences = ref({
    gender: '',
    sleeping: '',
    cleanliness: 0,
    location: '',
    budget: 8000,
    interests: []
  })

  const updatePreference = (key, value) => {
    preferences.value[key] = value
  }

  const resetPreferences = () => {
    preferences.value = {
      gender: '',
      sleeping: '',
      cleanliness: 0,
      location: '',
      budget: 8000,
      interests: []
    }
  }

  return {
    preferences,
    updatePreference,
    resetPreferences
  }
})