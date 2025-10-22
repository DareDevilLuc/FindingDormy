<script setup>
    import PrefBar from '../../components/pref/PrefBar.vue';
</script>

<template>
    <div class="grid grid-cols-2 gap-x-8 gap-y-1 mt-[-2rem] px-8 w-[90%] h-[60%]">
        <PrefBar preference="Sleep Schedule"/>
        <PrefBar preference="Location"/>
        <PrefBar preference="Cleanliness Level"/>
        <PrefBar preference="Likes & Interests"/>
        <PrefBar preference="Study & Work Habit"/>
        <PrefBar preference="Budget"/>
    </div>
</template>