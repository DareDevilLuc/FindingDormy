<script setup>
import DoneButton from '../components/pref/DoneButton.vue';
</script>

<template>
    <div class="flex justify-center items-center min-h-screen">
        <div class="flex flex-col items-center bg-white max-w-[1053px] w-[1053px] max-h-[817px] h-[817px] rounded-[100px] text-center">
            <div class="flex justify-center w-[663px] h-[442px] mt-[-5rem]"><img src="../assets/Logo.png" /></div>
            <p class="font-judson mt-[-6rem] text-[24px]" style="font-family: 'Judson', serif;">Select your preferences</p>
                <router-view />
            <div class="mt-[1rem]">
                <DoneButton/>
            </div>
        </div>
    </div>
</template>