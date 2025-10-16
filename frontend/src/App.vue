<script setup>
import TailwindTest from './components/TailwindTest.vue'
import { ref, onMounted } from 'vue'

const message = ref("Loading...")

onMounted(async () => {
  const res = await fetch("http://localhost:3000/api/hello")
  const data = await res.json()
  message.value = data.message
})

</script>

<template> 
  <div>
    <TailwindTest></TailwindTest>
  </div>
</template>

<style scoped>

</style>
