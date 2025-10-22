<script setup>
const props = defineProps({
    preference : String
})

</script>

<template>
    <div class="w-full max-w-[462px] h-[full] max-h-[80px] bg-[#DCF0FA] rounded-[100px]">
        <button class="text-[100%] rounded-[2rem] w-full h-full text-2xl cursor-pointer hover:bg-[#c4e6f7] hover:shadow-md transition-all duration-200" style="font-family: 'Judson', serif;">{{ preference }}</button>
    </div>

</template>