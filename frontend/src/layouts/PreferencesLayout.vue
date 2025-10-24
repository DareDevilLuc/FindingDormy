<script setup>
import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'
import { usePreferencesStore } from '../stores/preferences'
import DoneButton from '../components/pref/DoneButton.vue'

const route = useRoute()
const router = useRouter()
const preferencesStore = usePreferencesStore()

const goToHome = () => {
    if (route.name !== 'login' && route.name !== 'signup') {
        router.push({ name: 'home' });
    }
};

const routes = [
    { name: 'gender', title: 'Gender Preference' },
    { name: 'sleep', title: 'Sleep Schedule' },
    { name: 'cleanliness', title: 'Cleanliness' },
    { name: 'location', title: 'Location' },
    { name: 'budget', title: 'Budget' },
    { name: 'likes', title: 'Likes & Interests' },
    { name: 'review', title: 'Review' }
]

const currentStepIndex = computed(() => {
    const index = routes.findIndex(r => r.name === route.name)
    return index === -1 ? 0 : index
})

const currentStep = computed(() => currentStepIndex.value + 1)
const totalSteps = routes.length

const nextStep = () => {
    const nextIndex = currentStepIndex.value + 1
    if (nextIndex < routes.length) {
        router.push({ name: routes[nextIndex].name })
    }
}

const previousStep = () => {
    const prevIndex = currentStepIndex.value - 1
    if (prevIndex >= 0) {
        router.push({ name: routes[prevIndex].name })
    }
}

const isStepComplete = computed(() => {
    // Add validation logic based on the current route
    const prefs = preferencesStore.preferences
    switch (route.name) {
        case 'gender':
            return prefs.gender !== ''
        case 'sleep':
            return prefs.sleeping !== ''
        case 'cleanliness':
            return prefs.cleanliness > 0
        case 'location':
            return prefs.userArea !== '' && prefs.goalArea !== ''
        case 'budget':
            return prefs.budget > 0
        case 'likes':
            return prefs.interests.length > 0
        default:
            return true
    }
});

</script>

<template>
    <main class="flex justify-center items-center min-h-screen p-4" aria-label="Preferences screen container">
        <div class="
            flex flex-col items-center bg-white shadow-lg
            transition-all duration-300 ease-in-out text-center

            /* Phone styles (default) */
            w-full max-w-[400px] min-h-[640px] rounded-[50px] p-6

            /* Laptop styles (lg breakpoint: 1024px) */
            lg:max-w-[700px] lg:min-h-[700px] lg:rounded-[70px] lg:p-8

            /* Monitor styles (xl breakpoint: 1280px) - approx 1.5x of laptop's effective size */
            xl:max-w-[1053px] xl:min-h-[817px] xl:rounded-[100px] xl:p-12
        ">
            <div class="flex justify-center items-center w-[60%] h-[30%] my-4 lg:w-[50%] lg:h-[40%] cursor-pointer" @click="goToHome">
                <img src="../assets/Logo.png" alt="Dormy Logo" class="max-w-full max-h-full object-contain hover:opacity-90 transition-opacity duration-200" />
            </div>

            <!-- Progress Bar (show on all pages except selectPref) -->
            <div v-if="route.name !== 'selectPref'" class="w-full mb-8 md:mb-10">
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

            <!-- show "Select your preferences" only on main page -->
            <p
                v-if="route.name === 'selectPref'"
                class="font-judson
                
                /* Phone */
                text-lg -mt-8 mb-4
                
                /* Laptop */
                lg:text-xl lg:-mt-16 lg:mb-6
                
                /* Monitor */
                xl:text-2xl xl:-mt-24 xl:mb-8"
            > Select your preferences
            </p>

            <router-view />

            <!-- Navigation Buttons (show on all pages except selectPref) -->
            <div v-if="route.name !== 'selectPref'" class="flex gap-3 md:gap-4 w-full mt-8">
                <button
                    v-if="currentStep > 1"
                    @click="previousStep"
                    class="flex-1 px-4 md:px-6 py-3 md:py-4 rounded-lg md:rounded-xl border-2 border-slate-300 
                           text-slate-700 font-semibold hover:bg-slate-50 transition-all text-sm md:text-base"
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
                            ? 'bg-[#50B8E7] text-white hover:bg-[#3EA6D3] shadow-md hover:shadow-lg'
                            : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                    ]"
                >
                    Next
                </button>
                <button
                    v-if="currentStep === totalSteps"
                    @click="$router.push({ name: 'home' })"
                    class="flex-1 px-4 md:px-6 py-3 md:py-4 rounded-lg md:rounded-xl 
                           bg-[#50B8E7] text-white font-semibold hover:bg-[#3EA6D3] transition-all 
                           shadow-md hover:shadow-lg text-sm md:text-base"
                >
                    Complete Setup
                </button>
            </div>

            <!-- Show DoneButton only on selectPref page -->
            <DoneButton v-if="route.name === 'selectPref'" />
        </div>
    </main>
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
</style>
