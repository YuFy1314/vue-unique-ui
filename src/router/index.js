import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/test/test-toast'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
