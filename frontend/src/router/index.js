import { createRouter, createWebHistory } from 'vue-router'
import AuthLayout from '../layouts/AuthLayout.vue';
import LoginView from '../views/LoginView.vue';
import SignupView from '../views/SignupView.vue';
// Import Pages here

const routes = [
    {
        path: '/',
        redirect: '/auth/login' 
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

];

const router = createRouter({
    history: createWebHistory(), 
    routes,
});

export default router;