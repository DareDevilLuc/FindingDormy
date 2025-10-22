import { createRouter, createWebHistory } from 'vue-router'
import AuthLayout from '../layouts/AuthLayout.vue';
import LoginView from '../views/auth/LoginView.vue';
import SignupView from '../views/auth/SignupView.vue';
import PreferencesLayout from '../layouts/PreferencesLayout.vue';
import SelectPreferencesView from '../views/pref/SelectPreferencesView.vue';
import HomeView from '../views/main/HomeView.vue';
import MainLayout from '../layouts/MainLayout.vue';
import CleanlinessView from '../views/pref/CleanlinessView.vue';
import BudgetView from '../views/pref/BudgetView.vue';
import SleepScheduleView from '../views/pref/SleepScheduleView.vue';
import StudyWorkView from '../views/pref/StudyWorkView.vue';
import LikesView from '../views/pref/LikesView.vue';
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
            }
        ]
    },
    {
        path: '/pref',
        component: PreferencesLayout,
        children: [
            {
                path: 'selectPref',
                name: 'selectPref',
                component: SelectPreferencesView
            },
            {
                path: 'cleanliness',
                name: 'cleanliness',
                component: CleanlinessView
            },
            {
                path: 'budget',
                name: 'budget',
                component: BudgetView
            },
            {
                path: 'sleep',
                name: 'sleep',
                component: SleepScheduleView
            },
            {
                path: 'habits',
                name: 'habits',
                component: StudyWorkView
            },
            {
                path: 'likes',
                name: 'likes',
                component: LikesView
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
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(), 
    routes,
});

export default router;