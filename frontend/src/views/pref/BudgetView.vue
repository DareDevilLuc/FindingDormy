<script setup>
import { ref } from 'vue';

const minBudget = ref(500);
const maxBudget = ref(2000);
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
                Budget
            </p>

            <div class="w-full">
                <div class="flex justify-between mb-4
                    text-sm md:text-base xl:text-lg">
                    <span class="text-gray-600">₱{{ minBudget }}</span>
                    <span class="text-gray-600">₱{{ maxBudget }}</span>
                </div>
                
                <div class="space-y-4 md:space-y-5 xl:space-y-8">
                    <div>
                        <label class="text-gray-600
                            text-xs 
                            md:text-sm
                            xl:text-base">Min Budget</label>
                        <input 
                            v-model.number="minBudget"
                            type="range"
                            min="0"
                            max="5000"
                            step="100"
                            class="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer accent-blue-500 xl:h-3"
                        />
                    </div>
                    <div>
                        <label class="text-gray-600
                            text-xs 
                            md:text-sm
                            xl:text-base">Max Budget</label>
                        <input 
                            v-model.number="maxBudget"
                            type="range"
                            min="0"
                            max="5000"
                            step="100"
                            class="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer accent-blue-500 xl:h-3"
                        />
                    </div>
                </div>
            </div>

            <p class="text-center text-gray-700 font-semibold
                mt-6 text-base
                md:mt-8 md:text-lg
                xl:mt-10 xl:text-2xl">
                Budget Range: ₱{{ minBudget }} - ₱{{ maxBudget }}
            </p>
        </div>
    </div>
</template>

