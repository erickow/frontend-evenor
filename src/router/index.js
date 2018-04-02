import Vue from 'vue'
import Router from 'vue-router'
import Full from '@/containers/Full'
import Home from '@/views/Home'
import DetailEvent from '@/views/DetailEvent'
import Profile from '@/views/Profile'
import OrganizeEvent from '@/views/OrganizeEvent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
      name: 'root',
      component: Full,
      children: [
        {
          path: 'home',
          name: 'Home',
          component: Home
        }
      ]
    },
    {
      path: '/event',
      name: 'Event',
      component: Full,
      children: [
        {
          path: 'detail',
          name: 'Detail',
          component: DetailEvent,
          props: true
        },
        {
          path: 'organize',
          name: 'organize',
          component: OrganizeEvent,
          props: true
        }
      ]
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Full,
      children: [
        {
          path: '/',
          name: 'Detail',
          component: Profile,
          props: true
        }
      ]
    }
  ]
})
