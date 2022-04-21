import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/listen',
    name: 'listen',
    component: () => import(/* webpackChunkName: "listen" */ '../views/ListenView.vue')
  },
  {
    path: '/shows',
    name: 'shows',
    component: () => import(/* webpackChunkName: "shows" */ '../views/ShowsView.vue')
  },
  {
    path: '/lyrics',
    name: 'lyrics',
    component: () => import(/* webpackChunkName: "lyrics" */ '../views/LyricsView.vue')
  },
  {
    path: '/merch',
    name: 'merch',
    component: () => import(/* webpackChunkName: "merch" */ '../views/MerchView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
