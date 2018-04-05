import Vue from 'vue'
import Router from 'vue-router'
import Full from '@/containers/Full'
import Home from '@/views/Home'
import DetailEvent from '@/views/DetailEvent'
import Profile from '@/views/Profile'
import OrganizeEvent from '@/views/OrganizeEvent'
import Login from '@/views/Login'

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
      path: '/login',
      name: '',
      component: Full,
      children: [
        {
          path: '',
          name: 'Login',
          component: Login,
          props: true
        }
      ]
    },
    {
      path: '/event',
      name: 'Event',
      component: Full,
      children: [
        {
          path: ':eventId',
          name: 'Detail',
          component: DetailEvent,
          props: true
        },
        {
          path: 'organize',
          name: 'Organize',
          component: OrganizeEvent,
          props: true
        }
      ]
    },
    {
      path: '/profile',
      name: '',
      component: Full,
      children: [
        {
          path: '/',
          name: 'ProfileDetail',
          component: Profile,
          props: true
        }
      ]
    }
  ]
})
