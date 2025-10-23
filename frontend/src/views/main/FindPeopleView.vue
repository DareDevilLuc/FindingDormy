<script setup>
    import { ref, computed } from 'vue'
    import dave from '../../assets/dave.png'

    const peopleData = [
    {
        id: 1,
        name: 'Jessica, 21',
        pictureUrl: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%',
        description: 'Design student who loves plants and indie music. Looking for a quiet and clean roommate to share a cozy space.',
        preferences: ['Early Bird', 'Clean', 'Quiet Study'],
        interests: ['Music', 'Art', 'Reading', 'Photography', 'Nature']
    },
    {
        id: 2,
        name: 'Mark, 23',
        pictureUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Software engineer by day, gamer by night. I’m pretty laid back and looking for someone who is respectful and easygoing.',
        preferences: ['Night Owl', 'Flexible', 'Social'],
        interests: ['Gaming', 'Movies', 'Technology', 'Food', 'Travel']
    },
    {
        id: 3,
        name: 'Chloe, 22',
        pictureUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Med student, so I study a lot! I keep my space tidy and appreciate a roommate who does the same. I enjoy weekend hikes and trying new cafes.',
        preferences: ['Moderate', 'Very Clean', 'Focused'],
        interests: ['Fitness', 'Cooking', 'Travel', 'Learning', 'Animals']
    },
    {
        id: 4,
        name: 'Alex, 24',
        pictureUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Musician and coffee enthusiast. My ideal roommate is someone who is creative, open-minded, and enjoys spontaneous jam sessions.',
        preferences: ['Night Owl', 'Creative', 'Social'],
        interests: ['Music', 'Coffee', 'Art', 'Concerts', 'Philosophy']
    },
    {
        id: 5,
        name: 'Sophia, 20',
        pictureUrl: 'https://images.unsplash.com/photo-1619895862022-09114b41f16f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Literature major who loves books more than people (just kidding... mostly). Looking for a fellow bookworm to share a quiet apartment with.',
        preferences: ['Early Bird', 'Quiet', 'Tidy'],
        interests: ['Reading', 'Writing', 'History', 'Tea', 'Cats']
    }
];

    const people = ref(peopleData);
    const currentIndex = ref(0);
    const animation = ref({ direction: null, key: 0 });

    const nextPerson = (action) => {
        if (currentIndex.value >= people.value.length || animation.value.direction) return;
        
        console.log(`${action} person with id: ${people.value[currentIndex.value].id}`);
        animation.value = { 
            direction: action === 'liked' ? 'right' : 'left', 
            key: people.value[currentIndex.value].id 
        };
    };
    
    const handleAnimationEnd = () => {
        currentIndex.value++;
        animation.value = { direction: null, key: 0 };
    };

    const visiblePeople = computed(() => {
        return people.value.slice(currentIndex.value, currentIndex.value + 3).reverse();
    });

    const getCardStyle = (person, index) => {
        const offset = (visiblePeople.value.length - 1) - index;
        const scale = 1 - offset * 0.05;
        const translateY = offset * -20;
        
        const isAnimating = animation.value.direction && animation.value.key === person.id;

        return {
            zIndex: isAnimating ? 99 : index,
            transform: `translateY(${translateY}px) scale(${scale})`,
            opacity: 1,
        };
    };

    const getCardClass = (person, index) => {
        const classes = ['profile-card'];
        const isTopCard = index === visiblePeople.value.length - 1;

        if (animation.value.direction) { // An animation is active
            if (isTopCard && animation.value.key === person.id) {
                // This is the card being animated out
                classes.push(animation.value.direction === 'left' ? 'card-exit-left' : 'card-exit-right');
            } else {
                // These are the cards in the stack below, freeze them
                classes.push('no-transition');
            }
        }
        
        return classes.join(' ');
    };

</script>

<template>
    <div class="flex flex-col items-center justify-center w-full h-screen p-4">
        <div class="card-stack-container">
            <template v-if="visiblePeople.length > 0">
                <div 
                    v-for="(person, index) in visiblePeople" 
                    :key="person.id"
                    :class="[getCardClass(person, index), 'bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col']"
                    :style="getCardStyle(person, index)"
                    @animationend="index === visiblePeople.length - 1 && handleAnimationEnd()">
                    
                    <img :src="person.pictureUrl" :alt="person.name" class="w-full h-1/2 object-cover object-center">
                    <div class="p-4 flex-grow flex flex-col md:p-6 min-h-0 overflow-y-auto">
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
                </div>
            </template>
            <div v-else class="text-center flex flex-col justify-center items-center h-full">
                <p class="font-judson text-2xl md:text-3xl xl:text-4xl text-gray-700">No more profiles!</p>
                <p class="text-gray-500 mt-2 md:text-lg">Check back later for new people.</p>
            </div>
        </div>

        <div v-if="currentIndex < peopleData.length" class="flex items-center justify-center space-x-6 mt-6 md:space-x-8 md:mt-8">
            <button @click="nextPerson('disliked')" class="bg-white rounded-full p-3 shadow-xl transition-transform transform hover:scale-110 md:p-4 active:scale-95">
                <svg class="w-6 h-6 text-red-500 md:w-8 md:h-8 xl:w-10 xl:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
            <button @click="nextPerson('liked')" class="bg-white rounded-full p-3 shadow-xl transition-transform transform hover:scale-110 md:p-4 active:scale-95">
                <svg class="w-6 h-6 text-green-500 md:w-8 md:h-8 xl:w-10 xl:h-10" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>
            </button>
        </div>
    </div>
</template>

<style scoped>
        body {
            font-family: 'Judson', serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }
        .font-outfit {
            font-family: 'Outfit', sans-serif;
        }
        .font-judson {
             font-family: 'Judson', serif;
        }
        
        .card-stack-container {
            position: relative;
            width: 100%;
            height: 100%;
            max-width: 420px;
            max-height: 600px;
        }

        .profile-card {
            position: absolute;
            width: 100%;
            height: 100%;
            will-change: transform;
            transition: transform 0.5s ease-out;
            cursor: grab;
        }

        .no-transition {
            transition: none;
        }

        .card-exit-left {
            animation: exit-left 0.5s forwards ease-in-out;
        }
        
        .card-exit-right {
            animation: exit-right 0.5s forwards ease-in-out;
        }

        @keyframes exit-left {
            from {
                transform: translateX(0) rotate(0);
                opacity: 1;
            }
            to {
                transform: translateX(-150%) rotate(-20deg);
                opacity: 0;
            }
        }
        
        @keyframes exit-right {
            from {
                transform: translateX(0) rotate(0);
                opacity: 1;
            }
            to {
                transform: translateX(150%) rotate(20deg);
                opacity: 0;
            }
        }
</style>