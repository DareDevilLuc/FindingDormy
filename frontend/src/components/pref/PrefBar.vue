<script setup>
const props = defineProps({
    preference : String
})

</script>

<template>
        <div class="
            border border-gray-300 rounded-lg flex items-center justify-center
            p-2 cursor-pointer transition-all duration-200 hover:bg-gray-100 hover:border-gray-400
            
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