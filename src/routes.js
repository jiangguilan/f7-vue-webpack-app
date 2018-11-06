import Vue from 'vue'
import HomePage from './pages/home.vue';
import AboutPage from './pages/about.vue';
import NotFoundPage from './pages/not-found.vue';
import CategoryPage from './pages/category.vue';
import CartPage from './pages/cart.vue';
import AccountPage from './pages/account.vue';
import DetailsPage from './pages/details.vue';
import reset_password from './pages/reset_password.vue';
import search from './pages/search.vue'
import flash from './pages/flash.vue'
import special from './pages/special.vue'

export default [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/about',
    component: AboutPage,
  },
  {
    path: '/category',
    component: CategoryPage,
  },
  {
    path: '/cart',
    component: CartPage,
  },
  {
    path: '/account',
    component: AccountPage,
  },
  {
    path: '/details',
    component: DetailsPage,
  },
  {
    path: '/details/:product/user/:user',
    component: DetailsPage,
  },
  {
    path: '/reset_password',
    component: reset_password,
  },
  {
    path: '/search',
    component: search,
  },
  {
    path: '/flash',
    component: flash,
  },
  {
    path: '/special',
    component: special,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];
