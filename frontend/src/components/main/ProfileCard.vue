<script setup>
const props = defineProps({
    person: {
        type: Object,
        required: true
    }
})
</script>

<template>
        <img :src="person.pictureUrl" :alt="person.name" class="w-full h-1/2 object-cover" />
        
        <div class="p-4 flex-grow flex flex-col justify-between md:p-6">
            <div>
                <h3 class="font-outfit font-bold text-xl md:text-2xl xl:text-3xl text-left">{{ person.name }}</h3>
                <p class="text-gray-600 text-left text-sm mt-1 md:text-base xl:text-lg">{{ person.description }}</p>

                <div class="mt-3 md:mt-4">
                    <h4 class="font-bold text-left text-sm text-gray-800 md:text-base xl:text-lg">Preferences:</h4>
                    <div class="flex flex-wrap gap-2 mt-1">
                        <span v-for="pref in person.preferences" :key="pref" class="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full md:text-sm">{{ pref }}</span>
                    </div>
                </div>

                <div class="mt-3 md:mt-4">
                    <h4 class="font-bold text-left text-sm text-gray-800 md:text-base xl:text-lg">Interests:</h4>
                    <div class="flex flex-wrap gap-2 mt-1">
                        <span v-for="interest in person.interests" :key="interest" class="bg-pink-100 text-pink-800 text-xs font-semibold px-3 py-1 rounded-full md:text-sm">{{ interest }}</span>
                    </div>
                </div>
            </div>
        </div>
</template>