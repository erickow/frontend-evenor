import { request } from '@/utils/request'
const home = {
  state: {
    HOME_EVENTS: [],
    auth: ''
  },
  mutations: {
    SET_HOME_EVENTS: (state, event) => {
      state.HOME_EVENTS = event
    },
    SET_AUTH: (state, data) => {
      state.auth = data
    }
  },
  actions: {
    loadHomeEvents: ({commit}) => {
      return request('get', 'home/event/')
        .then(
          response => {
            commit('SET_HOME_EVENTS', response)
          }
        )
    },
    isAuth: ({commit}, data) => {
      return commit('SET_AUTH', data)
    }
  }
}

export default home
