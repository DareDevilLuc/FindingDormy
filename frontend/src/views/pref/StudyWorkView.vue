<script setup>
import { ref } from 'vue'

const studyHabit = ref('');
</script>

<template>
    <div class="flex flex-col items-center justify-center mt-[-2rem] max-h-[60%] max-w-[50%]">
      <!-- Blue box container -->
      <div
        class="rounded-3xl px-16 py-2 flex flex-col items-center shadow-md h-full w-full bg-blue-100">
        <p
          class="font-judson text-[24px] mb-6 text-center"
          style="font-family: 'Judson', serif;"
        >
          Study and Work Habits
        </p>
        <p class="text-center text-gray-600 text-sm mb-6">Tell us about your study and work habits !</p>
        <textarea 
        v-model="studyHabit"
        placeholder="Describe your study and work habits..."
        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 mb-8 resize-none"
        rows="4"
      ></textarea>
    </div> 
    </div>
</template>