<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const navigateToFindPeople = () => {
    router.push({ name: 'findPeople' });
};

const navigateToFindDorm = () => {
    router.push({ name: 'findDorm' });
};
</script>

<template>
    <div class="flex flex-col justify-center items-center w-full">
        <!-- Card 1: Find a Roommate -->
        <button 
            @click="navigateToFindPeople"
            class="flex flex-col bg-white justify-center items-center shadow-lg text-center transition-transform transform hover:scale-105
            w-full max-w-xs p-4 rounded-[30px] -mt-6
            md:max-w-md md:p-6 md:rounded-[50px] md:-mt-8
            xl:w-[825px] xl:max-w-none xl:h-[229px] xl:p-8 xl:rounded-[65px] xl:-mt-12">
            
            <img src="../../assets/people.png" alt="People icon" class="
                w-16 h-16 mb-2
                md:w-20 md:h-20 md:mb-3
                xl:w-[87px] xl:h-[84px] xl:mb-4" />
            
            <p class="font-judson
                text-lg
                md:text-xl
                xl:text-2xl">
                I'm looking for a Roommate
            </p>
        </button>
        
        <!-- Card 2: Find a Room -->
        <button 
            @click="navigateToFindDorm"
            class="flex flex-col bg-white justify-center items-center shadow-lg text-center transition-transform transform hover:scale-105
            w-full max-w-xs p-4 rounded-[30px] mt-8
            md:max-w-md md:p-6 md:rounded-[50px] md:mt-12
            xl:w-[825px] xl:max-w-none xl:h-[229px] xl:p-8 xl:rounded-[65px] xl:mt-20">
            
            <img src="../../assets/house.png" alt="House icon" class="
                w-16 h-16 mb-2
                md:w-20 md:h-20 md:mb-3
                xl:w-[87px] xl:h-[84px] xl:mb-4" />
            
            <p class="font-judson
                text-lg
                md:text-xl
                xl:text-2xl">
                I'm looking for a Room
            </p>
        </button>
    </div>
</template>