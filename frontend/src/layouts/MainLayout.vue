<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goToHome = () => {
    router.push({ name: 'home' });
};
</script>

<template>
  <main 
    class="
      relative flex flex-col items-center justify-start min-h-screen
      bg-blue-100 overflow-hidden
    "
  >
    <!-- Decorative blurred shapes (like in AuthLayout) -->
    <div class="absolute inset-0 -z-10">
      <div class="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-purple-100 rounded-full blur-3xl opacity-40 animate-pulse"></div>
      <div class="absolute bottom-[-10%] right-[-10%] w-[450px] h-[450px] bg-blue-100 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div class="absolute top-[30%] right-[40%] w-[300px] h-[300px] bg-pink-100 rounded-full blur-2xl opacity-25"></div>
      <div class="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100"></div>
    </div>

    <!-- Logo Section -->
    <div 
      class="
        flex justify-center w-full mt-10 mb-8
      "
      :class="{ 'cursor-pointer': true }"
      @click="goToHome"
    >
      <img
        src="../assets/Logo.png"
        alt="Dormy Logo"
        class="
          w-[280px] sm:w-[340px] lg:w-[460px] xl:w-[580px]
          transition-opacity duration-200 drop-shadow-lg hover:opacity-90
        "
      />
    </div>

    <!-- Main Content -->
    <div class="w-full flex justify-center px-6">
      <router-view />
    </div>
  </main>
</template>