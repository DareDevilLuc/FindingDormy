<script setup>
import { ref } from 'vue'

const userArea = ref('')
const goalArea = ref('')

// cities in Cebu
const cebuCities = [
  "Cebu City", "Mandaue City", "Lapu-Lapu City", "Talisay City", "Danao City",
  "Naga City", "Carcar City", "Bogo City", "Toledo City"
]

// Cebu City barangays
const barangays = [
  "Adlaon", "Agsungot", "Apas", "Babag", "Bacayan", "Banilad", "Basak Pardo", "Basak San Nicolas", 
  "Bonbon", "Budlaan", "Buhisan", "Bulacao", "Busay", "Calamba", "Cambinocot", "Capitol Site", 
  "Carreta", "Cogon Pardo", "Cogon Ramos", "Day-as", "Duljo-Fatima", "Ermita", "Guadalupe", 
  "Guba", "Hipodromo", "Inayawan", "Kalubihan", "Kamagayan", "Kasambagan", 
  "Kinasang-an", "Labangon", "Lahug", "Lorega San Miguel", "Lusaran", "Luz", 
  "Mabini", "Mabolo", "Malubog", "Mambaling", "Pahina Central", "Pahina San Nicolas", 
  "Pamutan", "Pari-an", "Paril", "Pit-os", "Pulangbato", "Pung-ol Sibugay", "Pardo", 
  "San Antonio", "San Jose", "San Nicolas Proper", "Sambag I", "Sambag II", 
  "Sapangdaku", "Sawang Calero", "Sinsin", "Sirao", "Suba", "Sudlon I", "Sudlon II", 
  "T. Padilla", "Talamban", "Taptap", "Tejero", "Tinago", "To-ong"
]

// Action handler
const done = () => {
  console.log('User area:', userArea.value)
  console.log('Goal area:', goalArea.value)
  // Navigation or emit event can go here later
}
</script>

<template>
  <div class="flex flex-col items-center justify-center mt-[-2rem]">
    <!-- Card Container -->
    <div
      class="bg-blue-100 rounded-3xl px-10 py-8 flex flex-col items-center shadow-md"
      style="width: 500px; height: 330px; background-color: #DCF0FA"
    >
      <!-- Title -->
      <h2 class="text-2xl font-serif text-gray-900 mb-6">Location</h2>

      <!-- Question 1: Cities in Cebu -->
      <div class="mb-4 w-full">
        <p class="text-gray-700 mb-2">Where are you from?</p>
        <select
          v-model="userArea"
          class="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option disabled value="">Select your city</option>
          <option v-for="city in cebuCities" :key="city" :value="city">
            {{ city }}
          </option>
        </select>
      </div>

      <!-- Question 2: Barangays in Cebu City -->
      <div class="mb-6 w-full">
        <p class="text-gray-700 mb-2">Where do you want to find a dorm?</p>
        <select
          v-model="goalArea"
          class="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option disabled value="">Select goal area</option>
          <option v-for="barangay in barangays" :key="barangay" :value="barangay">
            {{ barangay }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>
