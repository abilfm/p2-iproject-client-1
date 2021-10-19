import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import LoginPage from '../views/LoginPage.vue'
import RegisterPage from '../views/RegisterPage.vue'
import CategoryPage from '../views/CategoryPage.vue'
import DetailPage from '../views/DetailPage.vue'
import WishlistPage from '../views/WishlistPage.vue'
import ContactUsPage from '../views/ContactUsPage.vue'
import AboutUsPage from '../views/AboutUsPage.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/register',
    name: 'RegisterPage',
    component: RegisterPage
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/category',
    name: 'CategoryPage',
    component: CategoryPage
  },
  {
    path: '/wishlist',
    name: 'WishlistPage',
    component: WishlistPage
  },
  {
    path: '/product',
    name: 'DetailPage',
    component: DetailPage
  },
  {
    path: '/contact',
    name: 'ContactUsPage',
    component: ContactUsPage
  },
  {
    path: '/about',
    name: 'AboutUsPage',
    component: AboutUsPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   if (to.name === 'WishlistPage' && !localStorage.access_token) {
//     next({ name: 'LoginPage' })
//   } else {
//     next()
//   }
// })

export default router
