<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const dormmateData = ref({
  photo: '',
  description: '',
  sleepSchedule: '',
  from: '',
  schoolOrWork: '',
  dormCost: ''
})

const handleImageUpload = (event) => {
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      dormmateData.value.photo = e.target.result
    }
    reader.readAsDataURL(file)
  }
}

const saveDormmate = () => {
  localStorage.setItem('dormmateProfile', JSON.stringify(dormmateData.value))
  router.push('/') // redirect after saving
}

const goBack = () => {
  router.push('/') // back to previous page
}
</script>

<template>
  <div class="w-full min-h-screen flex flex-col items-center justify-center overflow-y-auto py-16 px-6">
    <!-- Header -->
    <div class="flex justify-between items-center w-full max-w-3xl mb-8 px-2">
      <h1 class="text-4xl font-bold text-gray-800">Add Dormmate Info</h1>
      <button @click="goBack" class="text-4xl text-gray-700 hover:text-gray-900">
        ✕
      </button>
    </div>

    <!-- Form Card -->
    <div class="bg-white w-full max-w-3xl rounded-3xl p-12 shadow-xl overflow-y-auto">
      <!-- Photo Upload -->
      <div class="mb-10">
        <div 
          class="w-48 h-48 bg-gray-300 rounded-xl mx-auto mb-6 flex items-center justify-center overflow-hidden cursor-pointer"
          @click="$refs.photoInput.click()"
        >
          <img v-if="dormmateData.photo" :src="dormmateData.photo" alt="Profile Photo" class="w-full h-full object-cover">
          <span v-else class="text-gray-500 text-lg text-center px-4">Add Your Photo Here</span>
        </div>
        <input
          ref="photoInput"
          type="file"
          @change="handleImageUpload"
          class="hidden"
          accept="image/*"
        >
      </div>

      <!-- Form Fields -->
      <div class="space-y-8">
        <div>
          <label class="block text-gray-700 font-semibold mb-2 text-lg">Add a description of yourself</label>
          <input
            v-model="dormmateData.description"
            type="text"
            placeholder="Tell something about yourself"
            class="w-full border-b-2 border-gray-300 focus:border-blue-400 outline-none py-3 px-2 text-gray-800 text-lg"
          >
        </div>

        <div>
          <label class="block text-gray-700 font-semibold mb-2 text-lg">Sleep Schedule</label>
          <input
            v-model="dormmateData.sleepSchedule"
            type="text"
            placeholder="e.g., Night owl, Early riser"
            class="w-full border-b-2 border-gray-300 focus:border-blue-400 outline-none py-3 px-2 text-gray-800 text-lg"
          >
        </div>

        <div>
          <label class="block text-gray-700 font-semibold mb-2 text-lg">Where you're from</label>
          <input
            v-model="dormmateData.from"
            type="text"
            placeholder="Enter your hometown or country"
            class="w-full border-b-2 border-gray-300 focus:border-blue-400 outline-none py-3 px-2 text-gray-800 text-lg"
          >
        </div>

        <div>
          <label class="block text-gray-700 font-semibold mb-2 text-lg">School/Workplace</label>
          <input
            v-model="dormmateData.schoolOrWork"
            type="text"
            placeholder="Enter your school or workplace"
            class="w-full border-b-2 border-gray-300 focus:border-blue-400 outline-none py-3 px-2 text-gray-800 text-lg"
          >
        </div>

        <div>
          <label class="block text-gray-700 font-semibold mb-2 text-lg">Dorm Cost</label>
          <input
            v-model="dormmateData.dormCost"
            type="text"
            placeholder="Enter your dorm cost"
            class="w-full border-b-2 border-gray-300 focus:border-blue-400 outline-none py-3 px-2 text-gray-800 text-lg"
          >
        </div>
      </div>

      <!-- Save Button -->
      <div class="w-full flex justify-center mt-6">
        <button 
          @click="saveDormmate"
          class="bg-blue-400 hover:bg-blue-500 text-white font-bold rounded-full w-14 h-14 flex items-center justify-center text-3xl shadow-md"
        >
          +
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
body {
  font-family: 'Judson', sans-serif;
}
</style>
