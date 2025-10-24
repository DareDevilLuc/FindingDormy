<script setup>
import { useRouter } from 'vue-router';
import { User, MessageCircle } from 'lucide-vue-next';

const router = useRouter();

const goToHome = () => {
  router.push({ name: 'home' });
};

const goToProfiles = () => {
  router.push({ name: 'profile' });
};

const goToMessaging = () => {
  router.push({ name: 'messaging' });
};
</script>

<template>
  <main class="relative flex flex-col items-center min-h-screen p-6 overflow-hidden bg-blue-100">
    <!-- Decorative background accents -->
    <div class="absolute inset-0">
      <div class="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100 -z-20"></div>
      <div class="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-400 rounded-full blur-3xl opacity-50 animate-pulse z-0"></div>
      <div class="absolute bottom-[-15%] right-[-15%] w-[600px] h-[600px] bg-blue-400 rounded-full blur-3xl opacity-40 animate-pulse z-0"></div>
      <div class="absolute top-[25%] right-[35%] w-[350px] h-[350px] bg-blue-400 rounded-full blur-2xl opacity-40 z-0"></div>
    </div>

    <!-- Top section with logo and icons -->
    <div class="flex justify-center items-center mt-[-2rem] relative z-10">
      <div class="flex cursor-pointer" @click="goToHome">
        <img
          src="../assets/Logo.png"
          alt="Dormy Logo"
          class="w-[280px] sm:w-[340px] lg:w-[460px] xl:w-[580px] transition-opacity duration-200 drop-shadow-lg hover:opacity-90"
        />
      </div>

      <!-- Icons -->
      <div class="flex gap-4 ml-6">
        <button
          @click="goToProfiles"
          class="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
          aria-label="Go to profiles"
        >
          <User size="48" class="text-gray-700 hover:text-gray-900" />
        </button>
        <button
          @click="goToMessaging"
          class="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
          aria-label="Go to messaging"
        >
          <MessageCircle size="48" class="text-gray-700 hover:text-gray-900" />
        </button>
      </div>
    </div>

    <!-- Main content -->
    <div class="flex-1 w-full flex justify-center px-6 py-8 relative z-10">
      <router-view class="w-full max-w-5xl" />
    </div>
  </main>
</template>