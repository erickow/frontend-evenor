import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import user from './modules/user'
import home from './modules/home'
import event from './modules/event'
import task from './modules/task'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    home,
    event,
    task
  },
  getters
})

export default store
