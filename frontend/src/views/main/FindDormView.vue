<script setup>
    import { ref, computed } from 'vue'
    import DormCard from '../../components/main/DormCard.vue';

    const dormData = [
    {
        id: 1,
        title: 'Cozy Room near USC-TC',
        pictureUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        poster: 'Jessica',
        description: 'Looking for a clean and quiet roommate for my spare room. Perfect for students who need a peaceful place to study. The building is safe and has friendly staff.',
        price: '₱8,000/month',
        capacity: '2 people/room',
        travelTime: '5 min walk to USC-TC',
        amenities: ['Wi-Fi', 'Aircon', 'Study Area', 'Kitchenette']
    },
    {
        id: 2,
        title: 'Modern Condo in IT Park',
        pictureUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        poster: 'Mark',
        description: 'One slot available in a 2-bedroom condo unit at Avida Towers. Looking for a young professional or student who is respectful and easygoing. Great view and amenities.',
        price: '₱12,000/month',
        capacity: '2 people/room',
        travelTime: '10 min commute to CIT-U',
        amenities: ['Wi-Fi', 'Pool', 'Gym', '24/7 Security']
    },
    {
        id: 3,
        title: 'Spacious Apt near Fuente',
        pictureUrl: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        poster: 'Chloe',
        description: 'My roommate is graduating, so I\'m looking for a new one! The apartment is spacious and fully furnished. Ideal for med students as it\'s close to CDU and hospitals.',
        price: '₱10,000/month',
        capacity: '2 people/room',
        travelTime: '7 min walk to CDU',
        amenities: ['Wi-Fi', 'Hot Shower', 'Full Kitchen', 'Laundry']
    },
    {
        id: 4,
        title: 'Affordable Room in Lahug',
        pictureUrl: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        poster: 'Alex',
        description: 'Simple and affordable room for rent. Good for students on a budget. We are a creative and friendly household. We often have jam sessions on weekends.',
        price: '₱7,500/month',
        capacity: '1 person/room',
        travelTime: '15 min commute to UP Cebu',
        amenities: ['Wi-Fi', 'Fan', 'Shared CR']
    },
    {
        id: 5,
        title: 'Quiet Studio near Ayala',
        pictureUrl: 'https://images.unsplash.com/photo-1595526114035-0d45ed16433d?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        poster: 'Sophia',
        description: 'Looking for a fellow bookworm to share my quiet studio. It\'s a peaceful space perfect for studying and reading. Very close to the mall and public transport.',
        price: '₱9,000/month',
        capacity: '2 people/room',
        travelTime: '15 min commute to USJ-R',
        amenities: ['Wi-Fi', 'Aircon', 'Bookshelf', 'Good lighting']
    }
];

        const dorms = ref(dormData);
        const currentIndex = ref(0);
        const animation = ref({ direction: null, key: 0 });

        const nextDorm = (action) => {
            if (currentIndex.value >= dorms.value.length || animation.value.direction) return;

            animation.value = {
                direction: action === 'liked' ? 'right' : 'left',
                key: dorms.value[currentIndex.value].id
            };
        };
        
        const createPost = () => {
          console.log('Create a new post!');
        };

        const handleAnimationEnd = () => {
            currentIndex.value++;
            animation.value = { direction: null, key: 0 };
        };

        const visibleDorms = computed(() => {
            return dorms.value.slice(currentIndex.value, currentIndex.value + 3).reverse();
        });

        const getCardStyle = (dorm, index) => {
            const offset = (visibleDorms.value.length - 1) - index;
            const scale = 1 - offset * 0.05;
            const translateY = offset * -20;

            return {
                zIndex: index,
                transform: `translateY(${translateY}px) scale(${scale})`,
                opacity: 1,
            };
        };

        const getCardClass = (dorm) => {
            const isAnimating = animation.value.direction && animation.value.key === dorm.id;
            if (isAnimating) {
                return animation.value.direction === 'left' ? 'card-exit-left' : 'card-exit-right';
            }
            return '';
        };

</script>

<template>
        <div class="flex flex-col items-center justify-center w-full h-full p-4">
            <div class="card-stack-container flex-grow">
                <template v-if="visibleDorms.length > 0">
                    <div 
                        v-for="(dorm, index) in visibleDorms" 
                        :key="dorm.id"
                        class="profile-card"
                        :class="getCardClass(dorm)"
                        :style="getCardStyle(dorm, index)"
                        @animationend="index === visibleDorms.length - 1 && handleAnimationEnd()">
                        
                        <DormCard :dorm="dorm" />

                    </div>
                </template>
                <div v-else class="text-center flex flex-col justify-center items-center h-full">
                    <p class="font-judson text-2xl md:text-3xl xl:text-4xl text-gray-700">No more listings!</p>
                    <p class="text-gray-500 mt-2 md:text-lg">Check back later for new places.</p>
                </div>
            </div>

            <div v-if="currentIndex < dormData.length" class="flex items-center justify-center space-x-6 mt-6 md:space-x-8 md:mt-8 flex-shrink-0">
                <button @click="nextDorm('disliked')" class="bg-white rounded-full p-3 shadow-xl transition-transform transform hover:scale-110 md:p-4 active:scale-95">
                    <svg class="w-6 h-6 text-red-500 md:w-8 md:h-8 xl:w-10 xl:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
                 <button @click="createPost" class="bg-white rounded-full p-3 shadow-xl transition-transform transform hover:scale-110 md:p-4 active:scale-95">
                    <svg class="w-6 h-6 text-blue-500 md:w-8 md:h-8 xl:w-10 xl:h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                </button>
                <button @click="nextDorm('liked')" class="bg-white rounded-full p-3 shadow-xl transition-transform transform hover:scale-110 md:p-4 active:scale-95">
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
            z-index: 0;
            width: 100%;
            height: 100%;
            max-width: 420px;
            min-height: 600px;
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