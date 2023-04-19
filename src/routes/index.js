import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
    { path: '/',component: () => import('../views/Home.vue')},
    { path: '/login',component: () => import('../views/Login.vue')},
    { path: '/all',component: () => import('../views/All.vue')},
    { path: '/edit/:id',name: 'edit',component: () => import('../views/Edit.vue')},
   
];

const router = createRouter({
    history:createWebHashHistory(),
    routes
});
  

// test comment

export default router;
