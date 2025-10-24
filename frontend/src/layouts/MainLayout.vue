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
    <div class="min-h-screen flex flex-col justify-start">
        <!-- Added top navigation bar with logo and icons -->
        <div class="flex justify-center items-center mt-[-2rem]">
            <div class="flex cursor-pointer" @click="goToHome">
                <img src="../assets/Logo.png" alt="Dormy Logo" class="hover:opacity-90 transition-opacity duration-200" />
            </div>
            
            <!-- Added icons container at top right -->
            <div class="flex gap-4">
                <button 
                    @click="goToProfiles"
                    class="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                    aria-label="Go to profiles"
                >
                    <User size="48" class="text-gray-700 hover:text-gray-900" />
                </button>
                <button 
                    @click="goToMessaging"
                    class="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                    aria-label="Go to messaging"
                >
                    <MessageCircle size="48" class="text-gray-700 hover:text-gray-900" />
                </button>
            </div>
        </div>
        
        <router-view/>
    </div>
</template>