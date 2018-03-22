import Vue from 'vue'
import Router from 'vue-router'
import Full from '@/containers/Full'
import Home from '@/views/Home'
import DetailEvent from '@/views/DetailEvent'

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
        }
      ]
    }
  ]
})
