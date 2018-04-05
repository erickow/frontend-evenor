import { request } from '@/utils/request'
const home = {
  state: {
    HOME_EVENTS: []
  },
  mutations: {
    SET_HOME_EVENTS: (state, event) => {
      state.HOME_EVENTS = event
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
    }
  }
}

export default home
