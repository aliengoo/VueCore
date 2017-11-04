import Vue from 'vue'
import Router from 'vue-router'

import App from './routes/App.vue'
import Home from './routes/home/Home.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: App,
    children: [
      {
        name: 'home',
        component: Home,
        path: ''
      }
    ]
  }
]

const router = new Router({
  routes
})

export default router
