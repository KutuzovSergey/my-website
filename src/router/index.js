import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '*',
    component: Home
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
