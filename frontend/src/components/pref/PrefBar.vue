<script setup>
const props = defineProps({
    preference : String
})

</script>

<template>
    <div class="w-[462px] h-[130px] bg-[#DCF0FA] rounded-[100px]">
        <button class="rounded-[100px] w-full h-full text-[24px] cursor-pointer hover:bg-[#c4e6f7] hover:shadow-md transition-all duration-200" style="font-family: 'Judson', serif;">{{ preference }}</button>
    </div>

</template>