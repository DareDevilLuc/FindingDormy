import { createRouter, createWebHistory } from 'vue-router'
import AuthLayout from '../layouts/AuthLayout.vue';
import LoginView from '../views/auth/LoginView.vue';
import SignupView from '../views/auth/SignupView.vue';
import PreferencesLayout from '../layouts/PreferencesLayout.vue';
import SelectPreferencesView from '../views/pref/SelectPreferencesView.vue';
import HomeView from '../views/main/HomeView.vue';
import MainLayout from '../layouts/MainLayout.vue';
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