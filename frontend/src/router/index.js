import { createRouter, createWebHistory } from 'vue-router'
import AuthLayout from '../layouts/AuthLayout.vue';
import LoginView from '../views/auth/LoginView.vue';
import SignupView from '../views/auth/SignupView.vue';
import PreferencesLayout from '../layouts/PreferencesLayout.vue';
import HomeView from '../views/main/HomeView.vue';
import MainLayout from '../layouts/MainLayout.vue';
import CleanlinessView from '../views/pref/CleanlinessView.vue';
import BudgetView from '../views/pref/BudgetView.vue';
import SleepScheduleView from '../views/pref/SleepScheduleView.vue';
import StudyWorkView from '../views/pref/StudyWorkView.vue';
import LikesView from '../views/pref/LikesView.vue';
import FindPeopleView from '../views/main/FindPeopleView.vue';
import FindDormView from '../views/main/FindDormView.vue';
import ProfileLayout from '../layouts/ProfileLayout.vue';
import Profiles from '../views/profile/ProfilesView.vue';
import EditProfile from '../views/profile/EditProfileView.vue';
import DormPostView from '../views/posts/DormPostView.vue';
import DormmatePostView from '../views/posts/DormmatePostView.vue';
import ProfilesView from '../views/profile/ProfilesView.vue';
import EditProfileView from '../views/profile/EditProfileView.vue';
import TestView from '../views/pref/TestView.vue';
import ReviewView from '../views/pref/ReviewView.vue';
import GenderView from '../views/pref/GenderView.vue';
import ChatView from '../views/main/ChatView.vue';
import LocationView from '../views/pref/LocationView.vue'
// Import Pages here

const routes = [
    {
        path: '/',
        redirect: '/auth/login',
    },
    {
        path: '/auth',
        component: AuthLayout,
        children: [
            {
                path: 'login',
                name: 'login',
                component: LoginView
            },
            {
                path: 'signup',
                name: 'signup',
                component: SignupView
            },
        ]
    },
    {
        path: '/pref',
        component: PreferencesLayout,
        children: [
            {
                path: 'gender',
                name: 'gender',
                component: () => GenderView
            },
            {
                path: 'sleep',
                name: 'sleep',
                component: SleepScheduleView
            },
            {
                path: 'cleanliness',
                name: 'cleanliness',
                component: CleanlinessView
            },
            {
                path: 'location',
                name: 'location',
                component: LocationView
            },
            {
                path: 'budget',
                name: 'budget',
                component: BudgetView
            },
            {
                path: 'likes',
                name: 'likes',
                component: LikesView
            },
            {
                path: 'review',
                name: 'review',
                component: ReviewView
            },

        ]
    },
    {
        path: '/post',
        component: ProfileLayout,
        children: [
            {
                path: 'dormpost',
                name: 'dormpost',
                component: DormPostView
            },
            {
                path: 'dormmatepost',
                name: 'dormmatepost',
                component: DormmatePostView
            }
        ]
    },
    {
        path: '/main',
        component: MainLayout,
        children: [
            {
                path: 'home',
                name: 'home',
                component: HomeView
            },
            {
                path: 'findPeople',
                name: 'findPeople',
                component: FindPeopleView
            },
            {
                path: 'findDorm',
                name: 'findDorm',
                component: FindDormView
            },
            {
                path: 'profile',
                name: 'profile',
                component: ProfilesView
            },
            {
                path: 'editprofile',
                name: 'editprofile',
                component: EditProfileView
            },
            {
                path: '/pref/chat',
                name: 'chat',
                component: ChatView
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(), 
    routes,
});

export default router;