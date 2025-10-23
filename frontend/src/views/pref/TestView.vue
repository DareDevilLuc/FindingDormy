<template>
      <!-- Blue container wrapper -->
<div class="relative -top-8 rounded-3xl flex flex-col shadow-md bg-[#DCF0FA] 
    w-full max-w-xs h-auto p-6
    md:max-w-2xl md:p-8 
    xl:max-w-4xl xl:rounded-[50px] xl:p-12">

        <!-- Header -->
        <div class="mb-6 md:mb-8">
          <p class="text-slate-600 text-center
              text-sm
              md:text-base
              xl:text-lg">
            Before we start swiping, let's set up your preferences first!
          </p>
        </div>
  
        <!-- Progress Bar -->
        <div class="mb-8 md:mb-10">
  <div class="flex justify-between items-center mb-3">
    <span class="text-sm font-medium text-slate-700 md:text-base">
      Step {{ currentStep }} of {{ totalSteps }}
    </span>
    <span class="text-sm text-slate-600 md:text-base">
      {{ Math.round((currentStep / totalSteps) * 100) }}%
    </span>
  </div>

  <div class="w-full bg-slate-300 rounded-full h-2 md:h-3">
    <div
      class="bg-[#50B8E7] h-2 md:h-3 rounded-full transition-all duration-300"
      :style="{ width: `${(currentStep / totalSteps) * 100}%` }"
    ></div>
  </div>
</div>

  
        <!-- Step Content -->
        <div class="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8 md:mb-10">
          <!-- Step 1: Gender Preference -->
          <div v-if="currentStep === 1" class="animate-fade-in">
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
  
          <!-- Step 2: Sleeping Habit -->
          <div v-if="currentStep === 2" class="animate-fade-in">
            <h2 class="text-2xl md:text-3xl xl:text-4xl font-bold text-slate-900 mb-6 md:mb-8">
              Sleeping Habit
            </h2>
            <div class="space-y-3 md:space-y-4">
              <div
                v-for="option in sleepingOptions"
                :key="option"
                class="relative"
                @mouseenter="hoveredOption = option"
                @mouseleave="hoveredOption = null"
              >
                <button
                  @click="preferences.sleeping = option"
                  :class="[
                    'w-full p-4 md:p-5 lg:p-6 rounded-xl md:rounded-2xl border-2 transition-all text-left font-medium',
                    'text-base md:text-lg lg:text-xl',
                    preferences.sleeping === option
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
                    {{ getSleepingDescription(option) }}
                  </div>
                </transition>
              </div>
            </div>
          </div>
  
          <!-- Step 3: Cleanliness Level -->
<div v-if="currentStep === 3" class="animate-fade-in">
  <h2 class="text-2xl md:text-3xl xl:text-4xl font-bold text-slate-900 mb-6 md:mb-8">
    Cleanliness Level
  </h2>

  <div class="flex justify-center gap-4 md:gap-6">
    <button
      v-for="star in 5"
      :key="star"
      @click="preferences.cleanliness = star"
      class="text-4xl md:text-5xl xl:text-6xl transition-all hover:scale-125"
      :class="star <= preferences.cleanliness ? 'text-yellow-400' : 'text-slate-300'"
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

  
          <!-- Step 4: Location -->
          <div v-if="currentStep === 4" class="animate-fade-in">
            <h2 class="text-2xl md:text-3xl xl:text-4xl font-bold text-slate-900 mb-6 md:mb-8">
              Location
            </h2>
            <select
              v-model="preferences.location"
              class="w-full p-4 md:p-5 rounded-xl md:rounded-2xl border-2 border-slate-200 focus:border-blue-600 focus:outline-none text-slate-700 font-medium text-base md:text-lg transition-all"
            >
              <option value="">Select a city in Cebu</option>
              <option v-for="city in cebuCities" :key="city" :value="city">
                {{ city }}
              </option>
            </select>
          </div>
  
          <!-- Step 5: Budget -->
          <div v-if="currentStep === 5" class="animate-fade-in">
            <h2 class="text-2xl md:text-3xl xl:text-4xl font-bold text-slate-900 mb-6 md:mb-8">
              Budget Range
            </h2>
            <div class="space-y-4 md:space-y-6">
              <div class="flex items-center justify-between">
                <span class="text-slate-700 font-medium text-lg md:text-xl">
                  ₱{{ preferences.budget.toLocaleString() }}
                </span>
                <span class="text-slate-600 text-base md:text-lg">per month</span>
              </div>
              <input
                v-model.number="preferences.budget"
                type="range"
                min="1000"
                max="15000"
                step="500"
                class="w-full h-2 md:h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div class="flex justify-between text-sm md:text-base text-slate-600">
                <span>₱1,000</span>
                <span>₱15,000</span>
              </div>
            </div>
          </div>
  
          <!-- Step 6: Interests -->
          <div v-if="currentStep === 6" class="animate-fade-in">
            <h2 class="text-2xl md:text-3xl xl:text-4xl font-bold text-slate-900 mb-2 md:mb-4">
              Likes & Interests
            </h2>
            <p class="text-slate-600 mb-6 md:mb-8 text-base md:text-lg">
              Choose up to 5 interests
            </p>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              <button
                v-for="interest in interestOptions"
                :key="interest"
                @click="toggleInterest(interest)"
                :disabled="preferences.interests.length >= 5 && !preferences.interests.includes(interest)"
                :class="[
                  'p-3 md:p-4 rounded-lg md:rounded-xl border-2 transition-all font-medium text-sm md:text-base',
                  preferences.interests.includes(interest)
                    ? 'border-blue-600 bg-blue-50 text-blue-900 shadow-md scale-[1.02]'
                    : 'border-slate-200 bg-white text-slate-700 hover:border-blue-400 hover:shadow-md',
                  preferences.interests.length >= 5 && !preferences.interests.includes(interest)
                    ? 'opacity-50 cursor-not-allowed'
                    : ''
                ]"
              >
                {{ interest }}
              </button>
            </div>
            <p class="text-sm md:text-base text-slate-600 mt-4 md:mt-6">
              {{ preferences.interests.length }} / 5 selected
            </p>
          </div>
  
          <!-- Step 7: Review -->
          <div v-if="currentStep === 7" class="animate-fade-in">
            <h2 class="text-2xl md:text-3xl xl:text-4xl font-bold text-slate-900 mb-6 md:mb-8">
              Review Your Preferences
            </h2>
            <div class="space-y-4 md:space-y-5">
              <div class="bg-slate-50 p-4 md:p-5 rounded-lg md:rounded-xl border border-slate-200">
                <p class="text-xs md:text-sm text-slate-600">Gender Preference</p>
                <p class="font-semibold text-slate-900 text-base md:text-lg">{{ preferences.gender }}</p>
              </div>
              <div class="bg-slate-50 p-4 md:p-5 rounded-lg md:rounded-xl border border-slate-200">
                <p class="text-xs md:text-sm text-slate-600">Sleeping Habit</p>
                <p class="font-semibold text-slate-900 text-base md:text-lg">{{ preferences.sleeping }}</p>
              </div>
              <div class="bg-slate-50 p-4 md:p-5 rounded-lg md:rounded-xl border border-slate-200">
                <p class="text-xs md:text-sm text-slate-600">Cleanliness Level</p>
                <p class="font-semibold text-slate-900 text-base md:text-lg">{{ preferences.cleanliness }} / 5 ★</p>
              </div>
              <div class="bg-slate-50 p-4 md:p-5 rounded-lg md:rounded-xl border border-slate-200">
                <p class="text-xs md:text-sm text-slate-600">Location</p>
                <p class="font-semibold text-slate-900 text-base md:text-lg">{{ preferences.location }}</p>
              </div>
              <div class="bg-slate-50 p-4 md:p-5 rounded-lg md:rounded-xl border border-slate-200">
                <p class="text-xs md:text-sm text-slate-600">Budget</p>
                <p class="font-semibold text-slate-900 text-base md:text-lg">
                  ₱{{ preferences.budget.toLocaleString() }} / month
                </p>
              </div>
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
        </div>
  
        <!-- Navigation Buttons -->
        <div class="flex gap-3 md:gap-4 w-full">
          <button
            v-if="currentStep > 1"
            @click="previousStep"
            class="flex-1 px-4 md:px-6 py-3 md:py-4 rounded-lg md:rounded-xl border-2 border-slate-300 text-slate-700 font-semibold hover:bg-slate-50 transition-all text-sm md:text-base"
          >
            Back
          </button>
          <button
            v-if="currentStep < totalSteps"
            @click="nextStep"
            :disabled="!isStepComplete"
            :class="[
              'flex-1 px-4 md:px-6 py-3 md:py-4 rounded-lg md:rounded-xl font-semibold transition-all text-sm md:text-base',
              isStepComplete
                ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg'
                : 'bg-slate-200 text-slate-400 cursor-not-allowed'
            ]"
          >
            Next
          </button>
          <button
  v-if="currentStep === totalSteps"
  @click="submitPreferences"
  class="flex-1 px-4 md:px-6 py-3 md:py-4 rounded-lg md:rounded-xl 
         bg-[#50B8E7] text-white font-semibold 
         hover:bg-[#3EA6D3] transition-all 
         shadow-md hover:shadow-lg text-sm md:text-base"
>
  Complete Setup
</button>

        </div>
      </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  
  const currentStep = ref(1)
  const totalSteps = 7
  const hoveredOption = ref(null)
  
  const genderOptions = ['Male', 'Female', 'Do not mind']
  const sleepingOptions = ['Night Owl', 'Early Bird', 'Moderate', 'Flexible']
  const cebuCities = [
    'Cebu City',
    'Lapu-Lapu City',
    'Mandaue City',
    'Talisay City',
    'Consolacion',
    'Liloan',
    'Compostela',
    'Danao City',
    'Bogo City'
  ]
  const interestOptions = [
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
  
  const preferences = ref({
    gender: '',
    sleeping: '',
    cleanliness: 0,
    location: '',
    budget: 8000,
    interests: []
  })
  
  const isStepComplete = computed(() => {
    switch (currentStep.value) {
      case 1:
        return preferences.value.gender !== ''
      case 2:
        return preferences.value.sleeping !== ''
      case 3:
        return preferences.value.cleanliness > 0
      case 4:
        return preferences.value.location !== ''
      case 5:
        return preferences.value.budget > 0
      case 6:
        return preferences.value.interests.length > 0
      case 7:
        return true
      default:
        return false
    }
  })
  
  const getOptionDescription = (option) => {
    const descriptions = {
      'Male': 'Prefer male roommates',
      'Female': 'Prefer female roommates',
      'Do not mind': 'Open to any gender'
    }
    return descriptions[option] || ''
  }
  
  const getSleepingDescription = (option) => {
    const descriptions = {
      'Night Owl': 'Awake at night, sleep during the day',
      'Early Bird': 'Wake up early, sleep early',
      'Moderate': 'Regular sleep schedule, balanced hours',
      'Flexible': 'Irregular sleep schedule, varies daily'
    }
    return descriptions[option] || ''
  }
  
  const nextStep = () => {
    if (currentStep.value < totalSteps) {
      currentStep.value++
    }
  }
  
  const previousStep = () => {
    if (currentStep.value > 1) {
      currentStep.value--
    }
  }
  
  const toggleInterest = (interest) => {
    const index = preferences.value.interests.indexOf(interest)
    if (index > -1) {
      preferences.value.interests.splice(index, 1)
    } else if (preferences.value.interests.length < 5) {
      preferences.value.interests.push(interest)
    }
  }
  
  const submitPreferences = () => {
    console.log('Preferences submitted:', preferences.value)
    alert('Preferences saved! Ready to find your perfect dorm match.')
  }
  </script>
  
  <style scoped>
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
  
  .animate-fade-in {
    animation: fade-in 0.3s ease-in-out;
  }
  
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.2s ease;
  }
  
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  </style>
  