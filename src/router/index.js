import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Gallery from '../views/Gallery.vue'
import Article from '../views/Article.vue'

Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: () => import('../views/Gallery.vue')
  },
  {
    path: '/article/:id',
    name: 'Article',
    component: () => import('../views/Article.vue')
  },
  {
    path: '*',
    component: Home
  },
  {
    path: '/article/:comment/:id',
    name: 'Comment',
    component: () => import('../views/Article.vue')
  },
],
  mode: 'history',
  base: process.env.BASE_URL,
 scrollBehavior (to, from, savedPosition){
    if (to.hash) {
      return { selector: to.hash }
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 }
    }
  },
})
export default router
