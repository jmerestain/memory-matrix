import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Mechanics from '../views/Mechanics.vue';
import Game from '../views/Main.vue';
import Leaderboard from '../views/Leaderboard.vue';
import Ending from '../views/Ending.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/mechanics',
    name: 'Mechanics',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Mechanics,
  },
  {
    path: '/game',
    name: 'Game',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Game,
  },
  {
    path: '/leaderboard',
    name: 'Leaderboard',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Leaderboard,
  },
  {
    path: '/ending',
    name: 'Ending',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Ending,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
