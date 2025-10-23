<script setup>
const props = defineProps({
    person: {
        type: Object,
        required: true
    }
})
</script>

<template>
        <div class="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col h-full">
            <img :src="person.pictureUrl" :alt="person.name" class="w-full h-2/5 object-cover object-center">
            <div class="p-4 md:p-6 flex-grow flex flex-col min-h-0">
                <div class="flex-grow overflow-y-auto">
                    <h3 class="font-outfit font-bold text-xl md:text-2xl xl:text-3xl text-left">{{ person.name }}</h3>
                    <p class="text-gray-600 text-left text-sm mt-1 md:text-base">{{ person.description }}</p>

                    <div class="mt-4">
                        <h4 class="font-bold text-left text-sm text-gray-800 md:text-base">Details:</h4>
                        <div class="grid grid-cols-2 gap-x-4 gap-y-2 mt-2 text-sm md:text-base">
                            <div class="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h12v10h-4a2 2 0 00-2-2H4a2 2 0 00-2 2v4a2 2 0 002 2h8a2 2 0 002-2v-2h4a2 2 0 002-2V6a2 2 0 00-2-2H4zm10 4a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" /></svg>
                                <span class="text-gray-700">{{ person.budget }}</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" /></svg>
                                <span class="text-gray-700">{{ person.location }}</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor"><path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-3-5 3V4z" /></svg>
                                <span class="text-gray-700">{{ person.education }}</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg>
                                <span class="text-gray-700">{{ person.sleepSchedule }}</span>
                            </div>
                             <div class="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <div class="flex">
                                    <span v-for="n in 5" :key="n">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" :class="n <= person.cleanliness ? 'text-yellow-400' : 'text-gray-300'" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <div class="flex items-center gap-2">
                               <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm2 0v8h10V5H5z" clip-rule="evenodd" />
                                    <path d="M1 15h18v1a1 1 0 01-1 1H2a1 1 0 01-1-1v-1z" />
                               </svg>
                                <span class="text-gray-700">{{ person.studyWorkHabit }}</span>
                            </div>
                        </div>
                    </div>
                     <div class="mt-4">
                        <h4 class="font-bold text-left text-sm text-gray-800 md:text-base">Interests:</h4>
                        <div class="flex flex-wrap gap-2 mt-2">
                            <span v-for="interest in person.interests" :key="interest" class="bg-pink-100 text-pink-800 text-xs font-semibold px-3 py-1 rounded-full md:text-sm">{{ interest }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>