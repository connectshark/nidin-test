const { createWebHashHistory, createRouter } = require('vue-router')

const history = createWebHashHistory()

const router = createRouter({
  history,
  routes: [
    {
      path: '/',
      component: () => import('../views/home.vue')
    }
  ]
})

export default router