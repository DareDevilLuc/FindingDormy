<script setup>
import { ref } from 'vue';

const minBudget = ref(500);
const maxBudget = ref(2000);
</script>

<template>
    <div class="flex flex-col items-center justify-center mt-[-2rem] max-w-[50%] max-h-[50%]">
    <!-- Blue box container -->
    <div
      class="bg-blue-100 rounded-3xl px-10 py-8 flex flex-col items-center shadow-md w-full h-full">
      <p
        class="font-judson text-[24px] mb-6 text-center"
        style="font-family: 'Judson', serif;"
      >
        Budget
      </p>

      <!-- Budget Range Slider -->
      <div class="mb-8">
        <div class="flex justify-between mb-4">
          <span class="text-sm text-gray-600">₱{{ minBudget }}</span>
          <span class="text-sm text-gray-600">₱{{ maxBudget }}</span>
        </div>
        
        <div class="space-y-3">
          <div>
            <label class="text-xs text-gray-600">Min Budget</label>
            <input 
              v-model.number="minBudget"
              type="range"
              min="0"
              max="5000"
              step="100"
              class="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
            />
          </div>
          <div>
            <label class="text-xs text-gray-600">Max Budget</label>
            <input 
              v-model.number="maxBudget"
              type="range"
              min="0"
              max="5000"
              step="100"
              class="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
            />
          </div>
        </div>
    </div>
      <!-- Budget Display -->
      <p class="text-center text-gray-700 text-[20px] font-semibold -mt-3">
        Budget Range: ₱{{ minBudget }} - ₱{{ maxBudget }}
      </p>

    </div>
  </div>
</template>

