<script setup>
import { ref } from 'vue'

const studyHabit = ref('');
</script>

<template>
    <div class="flex flex-col items-center justify-center w-full h-full">
        <!-- Blue box container -->
        <div class="rounded-3xl flex flex-col items-center shadow-md bg-blue-100 
            w-full max-w-xs h-auto p-6
            md:max-w-sm md:p-8 
            xl:max-w-lg xl:rounded-[50px] xl:p-12">
            
            <p class="font-judson text-center
                text-xl mb-4
                md:text-2xl md:mb-6
                xl:text-4xl xl:mb-8">
                Study and Work Habits
            </p>

             <p class="text-center text-gray-600 
                text-sm mb-4 -mt-2
                md:text-base md:mb-6 md:-mt-4
                xl:text-lg xl:mb-8 xl:-mt-6">
                Tell us about your study and work habits!
             </p>

            <textarea 
                v-model="studyHabit"
                placeholder="Describe your study and work habits..."
                class="w-full border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 resize-none
                    text-sm px-4 py-3
                    md:text-base
                    xl:text-lg xl:rounded-xl"
                rows="4"
            ></textarea>
        </div>
    </div>
</template>