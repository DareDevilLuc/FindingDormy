<script setup>
import { computed } from 'vue';
import { usePreferencesStore } from '../../stores/preferences'

const store = usePreferencesStore()
const preferences = computed(() => store.preferences)

const updateBudget = (value) => {
    store.updatePreference('budget', value)
}
</script>

<template>
    <div class="animate-fade-in">
        <h2 class="text-2xl md:text-3xl xl:text-4xl font-bold text-slate-900 mb-6 md:mb-8">
            Budget Range
        </h2>
        <div class="space-y-4 md:space-y-6 bg-white rounded-2xl shadow-lg p-6 md:p-8
            w-full max-w-xs h-auto
            md:max-w-sm 
            xl:max-w-lg xl:rounded-[50px] xl:p-12">
            
            <p class="font-judson text-center
                text-xl mb-4
                md:text-2xl md:mb-6
                xl:text-4xl xl:mb-8">
                Budget
            </p>

            <div class="flex items-center justify-between">
                <span class="text-slate-700 font-medium text-lg md:text-xl">
                    ₱{{ preferences.budget.toLocaleString() }}
                </span>
                <span class="text-slate-600 text-base md:text-lg">per month</span>
            </div>
            
            <input
                :value="preferences.budget"
                @input="e => updateBudget(Number(e.target.value))"
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
</template>

