import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HomePage from '@/components/Homepage'
import UserPage from '@/components/UserPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/organize',
      name: 'Homepage',
      component: HomePage
    },
    {
      path: '/user',
      name: 'UserPage',
      component: UserPage
    }
  ]
})
