<script setup>
    import PrefBar from '../../components/pref/PrefBar.vue';
</script>

<template>
    <div class="grid grid-cols-2 gap-x-10 gap-y-3 mt-[1rem]">
        <PrefBar preference="Sleep Schedule"/>
        <PrefBar preference="Location"/>
        <PrefBar preference="Cleanliness Level"/>
        <PrefBar preference="Likes & Interests"/>
        <PrefBar preference="Study & Work Habit"/>
        <PrefBar preference="Budget"/>
    </div>
</template>