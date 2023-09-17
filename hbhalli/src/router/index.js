import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import Page from '../components/Page.vue';
import Trends from '../components/Pages/Trends.vue';
// import Rents from '../components/Pages/Rents.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.

      component: () => import('../views/AboutView.vue')
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
