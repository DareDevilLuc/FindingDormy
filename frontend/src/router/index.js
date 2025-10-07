import { createRouter, createWebHistory } from 'vue-router'
// Import Pages here

const routes = [
    {
        path: "/",          // Default route
        name:"Home",
        component: MainPage,
    },

];

const router = createRouter({
    history: createWebHistory(), 
    routes,
});

export default router;