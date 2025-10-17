<script setup>
import AuthLayout from '../layouts/AuthLayout.vue';
import LoginForm from '../components/auth/LoginForm.vue';
import Logo from '../assets/Logo.png'
</script>

<template>
    <div style="display: flex; justify-content: center; margin-bottom: -100px;">
        <img :src ="Logo" alt="Finding Dormy Logo" style="align-self: center;"></img>
    </div>

    <AuthLayout style="background-color: white; padding: 3rem 2rem; max-width: 500px; margin: 2rem auto; border-radius: 15%;">
        <div style="text-align: center;">
            <h1 style="font-size: 2.5rem; font-family: 'Outfit', sans-serif; margin-bottom: -0.4rem; margin-top: -0.5rem;" class="font-bold">Welcome !</h1>
            <p style="margin-bottom: 2rem; font-family: 'Judson'; font-size: small;">Just keep swiping to find your perfect dormy !</p>
        </div>
        <LoginForm></LoginForm>
    </AuthLayout>


</template>

<style>

</style>