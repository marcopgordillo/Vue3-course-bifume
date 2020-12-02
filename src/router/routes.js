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
  {
    path: '/calculator',
    name: 'Calculator',
    component: () => import(/* webpackChunkName: "calculator" */ '@/pages/Calculator.vue')
  },
  {
    path: '/modal',
    name: 'ReusableModal',
    component: () => import(/* webpackChunkName: "modal" */ '@/pages/ReusableModal.vue')
  },
  {
    path: '/chat',
    name: 'Chat',
    component: () => import(/* webpackChunkName: "chat" */ '@/pages/Chat.vue'),
    meta: { middleware: 'auth' },
  },
  {
    path: '/user-crud',
    name: 'UserCrud',
    component: () => import(/* webpackChunkName: "user-crud" */ '@/pages/UserCrud.vue')
  },
  {
    path: '/tensorflow',
    name: 'Tensorflow',
    component: () => import(/* webpackChunkName: "tensorflow" */ '@/pages/Tensorflow.vue')
  },
]

