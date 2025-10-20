<script setup>
// Imports from the 'Russel_branch' (HEAD)
import { onMounted, ref } from 'vue';

// Import from the 'main' branch
import LoginForm from '../../components/auth/LoginForm.vue';

// State and logic from the 'Russel_branch' (HEAD)
const message = ref("");

onMounted(async () => {
 try {
 const res = await fetch("http://localhost:3000/api/hello");
 const data = await res.json();
  message.value = data.message;
 } catch (err) {
 message.value = "Error connecting to backend 😢";
 console.error(err);
 }
});
</script>

<template>
 <div class="p-6 text-center">
 <h1 class="text-2xl font-bold mb-4">Connection Test</h1> 
 <p>{{ message }}</p>

 <LoginForm /> 
 </div>
</template>

<style>

</style>