<script setup>
import { ref } from 'vue'

// reactive variables to store input values
const username = ref('')
const password = ref('')

const handleLogin = () => {
  // For now, just log values to the console
  console.log('Username:', username.value)
  console.log('Password:', password.value)

  // RUSSEL HERE I THINK IBUTANG IMONG LOGIC?
}
</script>

<template>
  <div class="flex flex-col items-center mt-6 space-y-6">
    <input
      v-model="username"
      type="text"
      placeholder="Username"
      class="w-[300px] p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#84CDEE]"
    />

    <input
      v-model="password"
      type="password"
      placeholder="Password"
      class="w-[300px] p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#84CDEE]"
    />

    <button
      @click="handleLogin"
      class="w-[300px] bg-[#84CDEE] text-white font-semibold py-3 rounded-full hover:bg-[#B6E6F5] transition-colors duration-200"
    >
      Log In
    </button>
  </div>
</template>
