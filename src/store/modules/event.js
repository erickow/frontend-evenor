import { request } from '@/utils/request'
import { setUser as setUserCookies } from '@/utils/auth'
import { STATUS_CODES } from 'http';
const user = {
  state: {
    EVENTS: {
      name: '',
      description: '',
      comittee: {},
      startDate: '',
      endDate: '',
      id: ''
    },
    token: '',
    dashboard: {}
  },
  mutations: {
    SET_EVENT_OPEN: (state, event) => {
      state.EVENTS.description = event.description
      state.EVENTS.comittee = event.comittee
      state.EVENTS.name = event.name
      state.EVENTS.id = event.id
      state.EVENTS.startDate = event.startDate
      state.EVENTS.endDate = event.endDate
    }
  },
  actions: {
    SET_EVENT_DETAIL: ({commit}, eventId) => {
      return request('get', 'event/', 'id=' + eventId)
        .then(
          response => {
            setUserCookies(response.object.id)
            commit('SET_EVENT_OPEN', response.object)
          }
        )
    }
  }
}

export default user
