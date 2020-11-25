import Home from '@/pages/Home.vue'

export default [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/pages/About.vue')
  },
  {
    path: '/heros',
    name: 'Heros',
    component: () => import(/* webpackChunkName: "heros" */ '@/pages/DcHeros.vue')
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: () => import(/* webpackChunkName: "calendar" */ '@/pages/Calendar.vue')
  },
  {
    path: '/markdown',
    name: 'Markdown',
    component: () => import(/* webpackChunkName: "markdown" */ '@/pages/Markdown.vue')
  },
  {
    path: '/slider',
    name: 'Slider',
    component: () => import(/* webpackChunkName: "slider" */ '@/pages/Slider.vue')
  },
]

