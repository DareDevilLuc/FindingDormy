<script setup>
import { ref } from 'vue'

const studyHabit = ref('');
</script>

<template>
    <div class="flex flex-col items-center justify-center mt-[-2rem]">
      <!-- Blue box container -->
      <div
        class="rounded-3xl px-10 py-8 flex flex-col items-center shadow-md"
        style="width: 500px; height: 300px; background-color: #DCF0FA;"
      >
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