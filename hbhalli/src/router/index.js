import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'

// import Page from '../components/Page.vue';
import Trends from '../components/Pages/Trends.vue';
// import Rents from '../components/Pages/Rents.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'about',
      component: AboutView
    },
    {
      path: '/home',
      name: 'home',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.

      component: () => import('../views/HomeView.vue')
    },

    {
      path: '/page/:pageNumber',
      name: 'trends',
      component: Trends,
      props: true
    }


  ]
})

export default router
