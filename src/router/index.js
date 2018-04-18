import Vue from 'vue'
import Router from 'vue-router'
import Full from '@/containers/Full'
import Home from '@/views/Home'
import DetailEvent from '@/views/DetailEvent'
import Profile from '@/views/profile/Profile'
import OrganizeEvent from '@/views/organize/OrganizeEvent'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Achievement from '@/views/Achievement'

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
      path: '/account',
      name: 'account',
      component: Full,
      children: [
        {
          path: 'login',
          name: 'Login',
          component: Login,
          props: true
        },
        {
          path: 'register',
          name: 'Register',
          component: Register,
          props: true
        },
        {
          path: 'profile',
          name: 'Profile',
          component: Profile,
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
          path: 'detail/:eventId',
          name: 'Detail',
          component: DetailEvent,
          props: true
        },
        {
          path: 'organize/:eventId',
          name: 'Organize',
          component: OrganizeEvent,
          props: true
        }
      ]
    },
    {
      path: '/achievement',
      name: 'Achievement',
      component: Full,
      children: [
        {
          path: 'detail',
          name: 'AchievementDetail',
          component: Achievement,
          props: true
        }
      ]
    }
  ]
})
