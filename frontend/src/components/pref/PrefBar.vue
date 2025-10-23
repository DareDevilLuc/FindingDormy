<script setup>
const props = defineProps({
    preference: String,
    route: {
        type: String,
        required: true
    }
})

</script>

<template>
        <div 
            @click="$router.push({ name: route })"
            class="
            border border-gray-300 rounded-lg flex items-center justify-center bg-[#DCF0FA]
            p-2 cursor-pointer transition-all duration-200 hover:bg-blue-200 hover:border-gray-400
            
            /* Phone */
            text-xs
            
            /* Laptop */
            lg:text-base lg:rounded-xl lg:p-3
            
            /* Monitor */
            xl:text-lg xl:rounded-2xl xl:p-4
        ">
            {{ preference }}
        </div>

</template>