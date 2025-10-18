<script setup>
import LoginSignupBar from '../components/auth/LoginSignupBar.vue'
</script>

<template>
    <div class="flex justify-center"><img src="../assets/Logo.png" /></div>
    <div class="flex justify-center -mt-20">
        <div class="bg-white max-w-[574px] w-full rounded-[100px] p-12 px-8 my-8 mx-auto text-center">
            <h1 class="text-[2.5rem] font-outfit font-bold mb-[-0.4rem] mt-[-1.5rem]">Welcome !</h1>
            <p class="font-judson text-sm mb-8">Just keep swiping to find your perfect dormy !</p>
            <LoginSignupBar />
            <router-view />
        </div>
    </div>
</template>
