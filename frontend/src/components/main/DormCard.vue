<script setup>
const props = defineProps({
    dorm: {
        type: Object,
        required: true
    }
})
</script>

<template>
        <div class="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col h-full">
            <img :src="dorm.pictureUrl" :alt="dorm.title" class="w-full h-2/5 object-cover object-center">
            <div class="p-4 md:p-6 flex-grow flex flex-col min-h-0">
                <div class="flex-grow overflow-y-auto">
                    <h3 class="font-outfit font-bold text-xl md:text-2xl xl:text-3xl text-left">{{ dorm.title }}</h3>
                    <p class="text-gray-500 text-left text-sm mt-1">Posted by: {{ dorm.poster }}</p>
                    
                    <div class="grid grid-cols-3 gap-4 my-4 text-center">
                        <div class="flex flex-col items-center justify-center p-2 rounded-lg bg-gray-50">
                             <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            <span class="font-bold text-sm text-gray-800">{{ dorm.price }}</span>
                        </div>
                        <div class="flex flex-col items-center justify-center p-2 rounded-lg bg-gray-50">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21v-1a6 6 0 00-1.78-4.125a4 4 0 00-6.44 0A6 6 0 003 20v1h12z" /></svg>
                            <span class="font-bold text-sm text-gray-800">{{ dorm.capacity }}</span>
                        </div>
                        <div class="flex flex-col items-center justify-center p-2 rounded-lg bg-gray-50">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span class="font-bold text-sm text-gray-800">{{ dorm.travelTime }}</span>
                        </div>
                    </div>

                    <p class="text-gray-600 text-left text-sm mt-1 md:text-base">{{ dorm.description }}</p>

                     <div class="mt-4">
                        <h4 class="font-bold text-left text-sm text-gray-800 md:text-base">Amenities:</h4>
                        <div class="flex flex-wrap gap-2 mt-2">
                            <span v-for="amenity in dorm.amenities" :key="amenity" class="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full md:text-sm">{{ amenity }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>