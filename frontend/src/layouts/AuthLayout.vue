<script setup>
import LoginSignupBar from '../components/auth/LoginSignupBar.vue'
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

const goToHome = () => {
    // Don't navigate if we're in login or signup pages
    if (route.name !== 'login' && route.name !== 'signup') {
        router.push({ name: 'home' });
    }
};
</script>

<template>
  <main 
    class="
      relative flex flex-col items-center justify-center min-h-screen p-6 
       overflow-hidden bg-blue-100
    "
    aria-label="Welcome screen container"
  >
    <!-- Decorative background accents -->
    <div class="absolute inset-0 -z-10">
      <!-- Soft gradient overlay -->
      <div class="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100"></div>

      <!-- Floating blurred shapes -->
      <div class="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-purple-100 rounded-full blur-3xl opacity-40 animate-pulse"></div>
      <div class="absolute bottom-[-10%] right-[-10%] w-[450px] h-[450px] bg-blue-100 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div class="absolute top-[30%] right-[40%] w-[300px] h-[300px] bg-pink-100 rounded-full blur-2xl opacity-25"></div>
    </div>

    <!-- Logo -->
    <div 
      class="flex justify-center w-full mb-8"
      :class="{ 'cursor-pointer': !['login', 'signup'].includes(route.name) }"
      @click="goToHome"
    >
      <img
        src="../assets/Logo.png"
        alt="Dormy Logo"
        class="
          w-[280px] sm:w-[340px] lg:w-[460px] xl:w-[580px]
          transition-opacity duration-200 drop-shadow-lg
        "
        :class="{ 'hover:opacity-90': !['login', 'signup'].includes(route.name) }"
      />
    </div>

    <!-- Main Card -->
    <div
      class="
        bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl text-center
          w-full max-w-md p-8
          lg:max-w-2xl lg:rounded-[60px] lg:p-12
          xl:max-w-4xl xl:rounded-[100px] xl:p-16
          transition-all duration-300
          -mt-6 sm:-mt-8 lg:-mt-10
          "
    >
      <h1 class="font-outfit font-bold text-4xl xl:text-6xl mb-2 drop-shadow-sm">Welcome!</h1>
      <p class="font-judson text-gray-600 text-base xl:text-xl mb-10">
        Just keep swiping to find your perfect dormy
      </p>

      <LoginSignupBar />
      <router-view />
    </div>
  </main>
</template>
