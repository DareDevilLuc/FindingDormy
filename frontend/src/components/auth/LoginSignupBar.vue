<script setup>
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

// determine active tab based on the route path
const activeTab = computed(() =>
  route.path.includes('signup') ? 'signup' : 'login'
)

const setActiveTab = (tab) => {
  router.push(`/auth/${tab}`)
}
</script>

<template>
    <div class="flex justify-center">
        <div class="flex gap-4 items-center bg-[#EDF7FC] rounded-full p-4 max-w-[408px] w-full max-h-[55px]">
            <div @click="setActiveTab('login')" class="flex justify-center items-center bg-[#84CDEE] w-[188px] h-[39px] rounded-full" :class="activeTab == 'login' ? 'bg-[#84CDEE] text-white' : 'hover:bg-[#B6E6F5] bg-transparent text-black duration-200'">
                LOGIN
            </div>
            <div @click="setActiveTab('signup')" class="flex justify-center items-center w-[188px] h-[39px] rounded-full hover:bg-[#B6E6F5] hover:text-white transition-colors duration-200" :class="activeTab == 'signup' ? 'bg-[#84CDEE] text-white' : 'hover:bg-[#B6E6F5] bg-transparent text-black duration-200'">
                SIGN UP
            </div>
        </div>
    </div>
</template>