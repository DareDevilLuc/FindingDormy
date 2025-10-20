<script setup>
import { ref } from 'vue'

const username = ref('')
const password = ref('')
const confirmPassword = ref('')

// This controls whether the popup is visible
const showPopup = ref(false)

const handleSignup = () => {
  if (password.value !== confirmPassword.value) {
    alert('Passwords do not match!')
    return
  }

  // Log values for now
  console.log('Username:', username.value)
  console.log('Password:', password.value)

  // Show the success pop-up
  showPopup.value = true
}

const closePopup = () => {
  showPopup.value = false
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

    <!-- Popup Modal -->
    <transition name="modal">
      <div v-if="showPopup" class="fixed inset-0 flex items-center justify-center backdrop-blur-sm z-50">
        <div class="bg-white p-6 rounded-lg shadow-lg w-[300px] text-center">
          <h2 class="text-xl font-bold mb-4">Sign Up Successful!</h2>
          <p class="mb-4">Welcome, {{ username }}!</p>
          <button @click="closePopup" class="bg-[#84CDEE] text-white font-semibold py-2 px-4 rounded-full hover:bg-[#B6E6F5] transition-colors duration-200">
            Close
          </button>
        </div>
      </div>
    </transition>

  </div>
</template>

<style scoped>
/* Scale + fade animation */
.modal-enter-active, .modal-leave-active {
  transition: all 0.3s ease;
}
.modal-enter-from {
  opacity: 0;
  transform: scale(0.8);
}
.modal-enter-to {
  opacity: 1;
  transform: scale(1);
}
.modal-leave-from {
  opacity: 1;
  transform: scale(1);
}
.modal-leave-to {
  opacity: 0;
  transform: scale(0.8);
}
</style>