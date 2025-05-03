import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/Home/index.vue'
import CatalogView from '../pages/Catalog/index.vue'
import AboutView from '../pages/AboutUs/index.vue'
import ContactView from '../pages/Contacts/index.vue'
import NotFound from '../pages/NotFound/index.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: CatalogView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactView
  },
  {
    path: '/:pathMatch(.*)*', // обработка 404
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
