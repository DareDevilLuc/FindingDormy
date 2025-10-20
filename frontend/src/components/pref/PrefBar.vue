<script setup>
const props = defineProps({
    preference : String
})

</script>

<template>
    <div class="w-[462px] h-[130px] bg-[#DCF0FA] rounded-[100px]">
        <h1 class="text-[24px] mt-[0.5rem]" style="font-family: 'Judson', serif;">{{ preference }}</h1>
    </div>

</template>