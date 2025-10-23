<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goToHome = () => {
    router.push({ name: 'home' });
};
</script>

<template>
    <div class="min-h-screen flex flex-col justify-start">
        <div class="flex mt-[-4rem] cursor-pointer" @click="goToHome">
            <img src="../assets/Logo.png" alt="Dormy Logo" class="hover:opacity-90 transition-opacity duration-200" />
        </div>
        <router-view/>
    </div>
</template>