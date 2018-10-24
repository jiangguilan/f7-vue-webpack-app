import Vue from 'vue'
// import Router from 'vue-router'
import HomePage from './pages/home.vue';
import AboutPage from './pages/about.vue';
import FormPage from './pages/form.vue';
import DynamicRoutePage from './pages/dynamic-route.vue';
import NotFoundPage from './pages/not-found.vue';

import PanelLeftPage from './pages/panel-left.vue';
import PanelRightPage from './pages/panel-right.vue';

import CategoryPage from './pages/category.vue';
import ExplorePage from './pages/explore.vue';
import CartPage from './pages/cart.vue';
import AccountPage from './pages/account.vue';
import LoginTestLang from './pages/login-test-lang.vue';
import DetailsPage from './pages/details.vue';

export default [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/panel-left/',
    component: PanelLeftPage,
  },
  {
    path: '/panel-right/',
    component: PanelRightPage,
  },
  {
    path: '/about',
    component: AboutPage,
  },
  {
    path: '/form',
    component: FormPage,
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
  {
    path: '/category',
    component: CategoryPage,
  },
  {
    path: '/explore',
    component: ExplorePage,
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
    path: '/login-test-lang',
    component: LoginTestLang,
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
    path: '(.*)',
    component: NotFoundPage,
  },
];
