<script setup>
    import PrefBar from '../../components/pref/PrefBar.vue';
</script>

<template>
    <div class="
        grid grid-cols-2 w-full flex-grow
        
        /* Phone */
        gap-x-4 gap-y-2 px-4
        
        /* Laptop */
        lg:gap-x-6 lg:gap-y-3 lg:px-6
        
        /* Monitor */
        xl:gap-x-8 xl:gap-y-4 xl:px-8
    ">
        <PrefBar preference="Sleep Schedule"/>
        <PrefBar preference="Location"/>
        <PrefBar preference="Cleanliness Level"/>
        <PrefBar preference="Likes & Interests"/>
        <PrefBar preference="Study & Work Habit"/>
        <PrefBar preference="Budget"/>
    </div>
</template>