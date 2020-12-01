import { createRouter, createWebHistory } from 'vue-router'

import routes from './routes'
import store from '@/store'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, _, next) => {
  if (to.meta.middleware) {
    const middleware = require(`@/middleware/${to.meta.middleware}`)
    if (middleware) {
      middleware.default(next, store)
    }
  }
  next()
})

export default router
