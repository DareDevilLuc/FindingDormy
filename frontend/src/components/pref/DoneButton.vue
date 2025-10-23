<script setup>
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

const handleDone = () => {
    if (route.name === 'selectPref') {
        // If on selectPref page, go to main/home (or wherever the next step should be)
        router.push({ name: 'home' });
    } else {
        // If on any other preference page, return to selectPref
        router.push({ name: 'selectPref' });
    }
}
</script>

<template>
    <div class="mt-[1rem] max-h-[50%] max-w-[50%]">
        <button 
            @click="handleDone"
            class="h-full w-full px-8 rounded-[12px] bg-[#DCF0FA] cursor-pointer hover:bg-[#c4e6f7] text-[20px] hover:shadow-md transition-all duration-200" 
            style="font-family: 'Judson', serif;">
            Done
        </button>
    </div>
</template>