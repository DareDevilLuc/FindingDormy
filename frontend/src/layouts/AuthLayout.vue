<script setup>
import LoginSignupBar from '../components/auth/LoginSignupBar.vue'
</script>

<template>
    <main class="flex flex-col items-center justify-center min-h-screen p-4" aria-label="Welcome screen container">
        <div class="flex justify-center w-full px-4">
            <img src="../assets/Logo.png" alt="Dormy Logo" class="w-full max-w-[300px] lg:max-w-[663px]" />
        </div>
        <div class="flex justify-center w-full px-4 -mt-10 lg:-mt-20">
            <div class="
                bg-white my-8 mx-auto text-center shadow-lg transition-all duration-300 ease-in-out
                flex flex-col justify-center
                
                /* Phone styles (default) */
                w-[360px] max-w-full min-h-[400px] rounded-[30px] p-8

                /* Laptop styles (lg breakpoint: 1024px) */
                lg:w-[574px] lg:min-h-[521px] lg:rounded-[100px] lg:p-12

                /* Monitor styles (xl breakpoint: 1280px) - approx 1.5x laptop */
                xl:w-[860px] xl:min-h-[780px] xl:rounded-[150px] xl:p-16
            ">
                <h1 class="text-[2.5rem] font-outfit font-bold mb-[-0.4rem] mt-[-1.5rem] xl:text-[3.75rem] xl:mt-[-2.5rem]">Welcome !</h1>
                <p class="text-sm mb-8 font-judson xl:text-xl xl:mb-12">Just keep swiping to find your perfect dormy !</p>
                <LoginSignupBar />
                <router-view />
            </div>
        </div>
    </main>
</template>
