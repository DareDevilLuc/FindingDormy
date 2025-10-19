<script setup>
import { ref } from 'vue'

const email = ref('')
const username = ref('')
const password = ref('')
const confirmPassword = ref('')

const handleSignup = () => {
  if (password.value !== confirmPassword.value) {
    alert('Passwords do not match!')
    return
  }

  // For now, just log values to console
  console.log('Email:', email.value)
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

    <input
      v-model="confirmPassword"
      type="password"
      placeholder="Confirm Password"
      class="w-[300px] p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#84CDEE]"
    />

    <button
      @click="handleSignup"
      class="w-[300px] bg-[#84CDEE] text-white font-semibold py-3 rounded-full hover:bg-[#B6E6F5] transition-colors duration-200"
    >
      Sign Up
    </button>
  </div>
</template>