<script setup>
import { useRoute } from 'vue-router'
import DoneButton from '../components/pref/DoneButton.vue'

const route = useRoute()
</script>

<template>
  <div class="flex justify-center items-center min-h-screen">
    <div class="flex flex-col items-center bg-white max-w-[1053px] w-[60vw] max-h-[817px] h-[80vh] rounded-[100px] text-center">
      <div class="flex justify-center w-[50%] h-[40%] ">
        <img src="../assets/Logo.png" />
      </div>

      <!-- show "Select your preferences" only on main page -->
      <p
        v-if="route.path === '/pref/selectpref'"
        class="font-judson mt-[-6rem] text-[24px]"
        style="font-family: 'Judson', serif;"
      >
        Select your preferences
      </p>

      <router-view />

      <div class="mt-[-11rem]">
        <DoneButton />
      </div>
    </div>
  </div>
</template>
