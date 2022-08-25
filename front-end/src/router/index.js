import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import BookingView from '../views/BookingView.vue';
import PassengerView from '../views/PassengerView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/booking',
      name: 'BookingView',
      component: BookingView,
    },
    {
      path: '/passengers/:passengerId',
      name: 'PassengerView',
      component: PassengerView,
    },
  ],
});

export default router;
