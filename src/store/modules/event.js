import { request } from '@/utils/request'
const event = {
  state: {
    EVENT: {
      name: '',
      description: '',
      comittee: {},
      startDate: '',
      endDate: '',
      id: ''
    },
    MY_UPCOMING_EVENT: [],
    MY_HISTORY_EVENT: []
  },
  mutations: {
    SET_EVENT_DETAIL: (state, event) => {
      state.EVENT.description = event.description
      state.EVENT.comittee = event.comittee
      state.EVENT.name = event.name
      state.EVENT.id = event.id
      state.EVENT.startDate = event.startDate
      state.EVENT.endDate = event.endDate
    },
    SET_MY_UPCOMING_EVENT: (state, event) => {
      state.MY_UPCOMING_EVENT = event
    },
    SET_MY_HISTORY_EVENT: (state, event) => {
      state.MY_HISTORY_EVENT = event
    }
  },
  actions: {
    loadEvent: ({commit}, eventId) => {
      return request('get', 'home/detail/' + eventId)
        .then(
          response => {
            console.log(response)
            commit('SET_EVENT_DETAIL', response)
          }
        )
    },
    loadMyUpcomingEvent: ({commit}, userId) => {
      return request('get', 'event/upcoming/' + userId)
        .then(
          response => {
            commit('SET_MY_UPCOMING_EVENT', response)
          }
        )
    },
    loadMyHistoryEvent: ({commit}, userId) => {
      return request('get', 'event/history/' + userId)
        .then(
          response => {
            commit('SET_MY_HISTORY_EVENT', response)
          }
        )
    }
  }
}

export default event
