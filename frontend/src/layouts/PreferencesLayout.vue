<script setup>
import { useRoute } from 'vue-router'
import DoneButton from '../components/pref/DoneButton.vue'

const route = useRoute()
</script>

<template>
    <main class="flex justify-center items-center min-h-screen p-4" aria-label="Preferences screen container">
        <div class="
            flex flex-col items-center bg-white shadow-lg
            transition-all duration-300 ease-in-out text-center

            /* Phone styles (default) */
            w-full max-w-[400px] min-h-[640px] rounded-[50px] p-6

            /* Laptop styles (lg breakpoint: 1024px) */
            lg:max-w-[700px] lg:min-h-[700px] lg:rounded-[70px] lg:p-8

            /* Monitor styles (xl breakpoint: 1280px) - approx 1.5x of laptop's effective size */
            xl:max-w-[1053px] xl:min-h-[817px] xl:rounded-[100px] xl:p-12
        ">
            <div class="flex justify-center items-center w-[60%] h-[30%] my-4 lg:w-[50%] lg:h-[40%]">
                <img src="../assets/Logo.png" alt="Dormy Logo" class="max-w-full max-h-full object-contain" />
            </div>

            <!-- show "Select your preferences" only on main page -->
            <p
                v-if="route.path === '/pref/selectpref'"
                class="font-judson
                
                /* Phone */
                text-lg -mt-8 mb-4
                
                /* Laptop */
                lg:text-xl lg:-mt-16 lg:mb-6
                
                /* Monitor */
                xl:text-2xl xl:-mt-24 xl:mb-8"
            >
                Select your preferences
            </p>

            <router-view />

            <DoneButton />
        </div>
    </main>
</template>
