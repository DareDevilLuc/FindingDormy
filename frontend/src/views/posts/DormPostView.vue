<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const dormData = ref({
  photo: '',
  description: '',
  location: '',
  cost: '',
  roommates: '',
  amenities: []
})

// Amenity options
const amenityOptions = [
  'Wi-Fi',
  'Laundry',
  'Aircon',
  'Kitchen',
  'Study Area',
  'Parking',
  'CCTV',
  'Water Heater',
  'Gym',
  'Common Room',
  'Fan',
]

// Toggle amenities selection (max 5)
const toggleAmenity = (amenity) => {
  const selected = dormData.value.amenities
  const index = selected.indexOf(amenity)
  if (index !== -1) {
    selected.splice(index, 1) // remove if already selected
  } else if (selected.length < 5) {
    selected.push(amenity) // add if less than 5
  }
}

const handleImageUpload = (event) => {
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      dormData.value.photo = e.target.result
    }
    reader.readAsDataURL(file)
  }
}

const saveDorm = () => {
  localStorage.setItem('dormPost', JSON.stringify(dormData.value))
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
      <h1 class="text-4xl font-bold text-gray-800">Add Dorm Post</h1>
      <button @click="goBack" class="text-4xl text-gray-700 hover:text-gray-900">✕</button>
    </div>

    <!-- Form Card -->
    <div class="bg-white w-full max-w-3xl rounded-3xl p-12 shadow-xl overflow-y-auto">
      <!-- Dorm Photo Upload -->
      <div class="mb-10">
        <div
          class="w-48 h-48 bg-gray-300 rounded-xl mx-auto mb-6 flex items-center justify-center overflow-hidden cursor-pointer"
          @click="$refs.photoInput.click()"
        >
          <img v-if="dormData.photo" :src="dormData.photo" alt="Dorm Photo" class="w-full h-full object-cover">
          <span v-else class="text-gray-500 text-lg text-center px-4">Add Dorm Photo</span>
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
          <label class="block text-gray-700 font-semibold mb-2 text-lg">Description</label>
          <input
            v-model="dormData.description"
            type="text"
            placeholder="Describe the dorm"
            class="w-full border-b-2 border-gray-300 focus:border-blue-400 outline-none py-3 px-2 text-gray-800 text-lg"
          >
        </div>

        <div>
          <label class="block text-gray-700 font-semibold mb-2 text-lg">Location</label>
          <input
            v-model="dormData.location"
            type="text"
            placeholder="Enter dorm location"
            class="w-full border-b-2 border-gray-300 focus:border-blue-400 outline-none py-3 px-2 text-gray-800 text-lg"
          >
        </div>

        <div>
          <label class="block text-gray-700 font-semibold mb-2 text-lg">Dorm Cost</label>
          <input
            v-model="dormData.cost"
            type="text"
            placeholder="Enter monthly cost"
            class="w-full border-b-2 border-gray-300 focus:border-blue-400 outline-none py-3 px-2 text-gray-800 text-lg"
          >
        </div>

        <div>
          <label class="block text-gray-700 font-semibold mb-2 text-lg">Number of Roommates</label>
          <input
            v-model="dormData.roommates"
            type="text"
            placeholder="Enter number of roommates"
            class="w-full border-b-2 border-gray-300 focus:border-blue-400 outline-none py-3 px-2 text-gray-800 text-lg"
          >
        </div>

        <!-- ✅ Amenities Selection -->
        <div>
          <label class="block text-gray-700 font-semibold mb-3 text-lg">Amenities</label>
          <p class="text-gray-500 text-sm mb-3">Choose up to 5 amenities</p>
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <button
              v-for="amenity in amenityOptions"
              :key="amenity"
              @click="toggleAmenity(amenity)"
              :disabled="dormData.amenities.length >= 5 && !dormData.amenities.includes(amenity)"
              :class="[
                'p-3 rounded-lg border-2 transition-all font-medium text-sm',
                dormData.amenities.includes(amenity)
                  ? 'border-blue-600 bg-blue-50 text-blue-900 shadow-md scale-[1.02]'
                  : 'border-gray-200 bg-white text-gray-700 hover:border-blue-400 hover:shadow-md',
                dormData.amenities.length >= 5 && !dormData.amenities.includes(amenity)
                  ? 'opacity-50 cursor-not-allowed'
                  : ''
              ]"
            >
              {{ amenity }}
            </button>
          </div>
          <p class="text-sm text-gray-600 mt-3">
            {{ dormData.amenities.length }} / 5 selected
          </p>
        </div>
      </div>

      <!-- Save Button -->
      <div class="w-full flex justify-center mt-8">
        <button
          @click="saveDorm"
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
