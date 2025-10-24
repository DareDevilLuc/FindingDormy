<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const formData = ref({
  name: '',
  age: '',
  location: '',
  gender: '',
  distance: '',
  bio: '',
  avatar: ''
})

onMounted(() => {
  const savedProfile = localStorage.getItem('userProfile')
  if (savedProfile) {
    formData.value = JSON.parse(savedProfile)
  }
})

const handleImageUpload = (event) => {
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      formData.value.avatar = e.target.result
    }
    reader.readAsDataURL(file)
  }
}

const saveProfile = () => {
  localStorage.setItem('userProfile', JSON.stringify(formData.value))
  router.push('/') // Go back to Profiles.vue
}

const goBack = () => {
  router.push('/main/profile') // Cancel and go back
}
</script>

<template>
  <div class="w-full min-h-screen flex flex-col items-center justify-center overflow-y-auto py-16 px-6">
    <!-- Header -->
    <div class="flex justify-between items-center w-full max-w-3xl mb-8 px-2">
      <h1 class="text-4xl font-bold text-gray-800">Edit Profile</h1>
      <button @click="goBack" class="text-4xl text-gray-700 hover:text-gray-900">
        ✕
      </button>
    </div>

    <!-- Edit Form Card -->
    <div class="bg-white w-full max-w-3xl rounded-3xl p-12 shadow-xl overflow-y-auto">
      <!-- Avatar Upload -->
      <div class="mb-10">
        <div class="w-48 h-48 bg-gray-300 rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden">
          <img v-if="formData.avatar" :src="formData.avatar" alt="Profile" class="w-full h-full object-cover">
          <span v-else class="text-gray-500 text-lg">Photo</span>
        </div>
        <input 
          type="file" 
          @change="handleImageUpload"
          class="w-full text-center text-gray-600 cursor-pointer"
          accept="image/*"
        >
      </div>

      <!-- Form Fields -->
      <div class="space-y-8">
        <div>
          <label class="block text-gray-700 font-semibold mb-2 text-lg">Name</label>
          <input 
            v-model="formData.name"
            type="text"
            placeholder="Enter your name"
            class="w-full border-b-2 border-gray-300 focus:border-blue-400 outline-none py-3 px-2 text-gray-800 text-lg"
          >
        </div>

        <div>
          <label class="block text-gray-700 font-semibold mb-2 text-lg">Age</label>
          <input 
            v-model="formData.age"
            type="number"
            placeholder="Enter your age"
            class="w-full border-b-2 border-gray-300 focus:border-blue-400 outline-none py-3 px-2 text-gray-800 text-lg"
          >
        </div>

        <div>
          <label class="block text-gray-700 font-semibold mb-2 text-lg">Location</label>
          <input 
            v-model="formData.location"
            type="text"
            placeholder="Enter your location"
            class="w-full border-b-2 border-gray-300 focus:border-blue-400 outline-none py-3 px-2 text-gray-800 text-lg"
          >
        </div>

        <div>
          <label class="block text-gray-700 font-semibold mb-2 text-lg">Gender</label>
          <select 
            v-model="formData.gender"
            class="w-full border-b-2 border-gray-300 focus:border-blue-400 outline-none py-3 px-2 text-gray-800 text-lg"
          >
            <option value="">Select gender</option>
            <option value="M">Male</option>
            <option value="F">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label class="block text-gray-700 font-semibold mb-2 text-lg">Distance Away</label>
          <input 
            v-model="formData.distance"
            type="text"
            placeholder="e.g., 3 km away"
            class="w-full border-b-2 border-gray-300 focus:border-blue-400 outline-none py-3 px-2 text-gray-800 text-lg"
          >
        </div>

      </div>

      <!-- Action Buttons -->
      <div class="flex gap-6 mt-12">
        <button 
          @click="goBack"
          class="flex-1 bg-gray-300 text-gray-800 font-semibold py-4 px-6 rounded-full hover:bg-gray-400 transition text-lg"
        >
          Cancel
        </button>
        <button 
          @click="saveProfile"
          class="flex-1 bg-blue-400 text-white font-semibold py-4 px-6 rounded-full hover:bg-blue-500 transition text-lg"
        >
          Save Profile
        </button>
      </div>
    </div>
  </div>
</template>
