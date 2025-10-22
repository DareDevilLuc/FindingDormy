<script setup>
import LoginSignupBar from '../components/auth/LoginSignupBar.vue'
</script>

<template>
    <div class="flex justify-center"><img src="../assets/Logo.png" class="lg:w-[663px]" /></div>
    <div class="flex justify-center -mt-20">
        <div class="bg-white max-w-[574px] max-h-[521px] h-[521px] sm:w-full sm:rounded-[100px] w-[360px] rounded-[50px]  p-12 px-8 my-8 mx-auto text-center">
            <h1 class="text-[2.5rem] font-outfit font-bold mb-[-0.4rem] mt-[-1.5rem]" style="font-family: 'Outfit', 'sans-serif';">Welcome !</h1>
            <p class="text-sm mb-8" style="font-family: 'Judson', serif;">Just keep swiping to find your perfect dormy !</p>
            <LoginSignupBar />
            <router-view />
        </div>
    </div>
</template>
