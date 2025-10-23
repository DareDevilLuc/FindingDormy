<script setup>
    import { ref, computed } from 'vue'
    import dave from '../../assets/dave.png'
    import ProfileCard from '../../components/main/ProfileCard.vue';

const peopleData = [
    {
        id: 1,
        name: 'Jessica, 21',
        pictureUrl: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%',
        description: 'USC Design student looking for a quiet and clean roommate to find a cozy space with near the university.',
        budget: '₱8,000/month',
        location: 'Ideal: Dorm near USC-TC, Talamban',
        cleanliness: 5,
        sleepSchedule: 'Early Bird',
        studyWorkHabit: 'Quiet Study',
        education: 'University of San Carlos',
        interests: ['Music', 'Art', 'Reading', 'Photography', 'Nature']
    },
    {
        id: 2,
        name: 'Mark, 23',
        pictureUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Software engineer by day, gamer by night. I’m looking for a respectful and easygoing roommate to find a place with in IT Park.',
        budget: '₱12,000/month',
        location: 'Ideal: Condo in Cebu IT Park',
        cleanliness: 3,
        sleepSchedule: 'Night Owl',
        studyWorkHabit: 'Social',
        education: 'Cebu Institute of Technology – U',
        interests: ['Gaming', 'Movies', 'Technology', 'Food Trips', 'Travel']
    },
    {
        id: 3,
        name: 'Chloe, 22',
        pictureUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Med student at CDU, so I study a lot! Looking for a tidy roommate to share an apartment with. I enjoy weekend hikes and trying new cafes near Fuente.',
        budget: '₱10,000/month',
        location: 'Ideal: Apartment near Fuente Osmeña',
        cleanliness: 4,
        sleepSchedule: 'Moderate',
        studyWorkHabit: 'Focused',
        education: 'Cebu Doctors\' University',
        interests: ['Fitness', 'Cooking', 'Travel', 'Learning', 'Beach']
    },
    {
        id: 4,
        name: 'Alex, 24',
        pictureUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Musician and coffee enthusiast looking for a creative, open-minded roommate to find a place with. Spontaneous jam sessions are a plus.',
        budget: '₱7,500/month',
        location: 'Ideal: Boarding House in Lahug',
        cleanliness: 3,
        sleepSchedule: 'Night Owl',
        studyWorkHabit: 'Creative',
        education: 'UP Cebu',
        interests: ['Music', 'Coffee', 'Art', 'Concerts', 'Philosophy']
    },
    {
        id: 5,
        name: 'Sophia, 20',
        pictureUrl: 'https://images.unsplash.com/photo-1619895862022-09114b41f16f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Literature major who loves books more than people (just kidding... mostly). Searching for a fellow bookworm to find a quiet apartment with.',
        budget: '₱9,000/month',
        location: 'Ideal: Studio near Ayala Center',
        cleanliness: 5,
        sleepSchedule: 'Early Bird',
        studyWorkHabit: 'Quiet',
        education: 'University of San Jose–Recoletos',
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
    
    const createPost = () => {
        console.log("Create new post clicked!");
        // Future logic for creating a post goes here
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

      return {
        zIndex: 100 - offset,
        transform: `translateY(${translateY}px) scale(${scale})`,
        opacity: 1,
      };
    };

    const getCardClass = (person) => {
      const classes = ['profile-card'];
      const isTopCard = visiblePeople.value.length > 0 && person.id === visiblePeople.value[visiblePeople.value.length - 1].id;

      if (animation.value.direction && isTopCard) {
        classes.push(animation.value.direction === 'left' ? 'card-exit-left' : 'card-exit-right');
      }

      return classes.join(' ');
    };
</script>

<template>
        <div class="flex flex-col items-center justify-center w-full h-full p-4">
        <div class="card-stack-container flex-grow">
            <template v-if="visiblePeople.length > 0">
                <ProfileCard 
                    v-for="(person, index) in visiblePeople" 
                    :key="person.id"
                    :person="person"
                    :class="getCardClass(person)"
                    :style="getCardStyle(person, index)"
                    @animationend="index === visiblePeople.length - 1 && handleAnimationEnd()"
                />
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
            <button @click="createPost" class="bg-white rounded-full p-3 shadow-xl transition-transform transform hover:scale-110 md:p-4 active:scale-95">
                <svg class="w-6 h-6 text-blue-500 md:w-8 md:h-8 xl:w-10 xl:h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
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
            z-index: 0;
            width: 100%;
            height: 100%;
            max-width: 420px;
            max-height: 600px;
            min-height: 600px;
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