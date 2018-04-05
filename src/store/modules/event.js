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
    }
  },
  mutations: {
    SET_EVENT_DETAIL: (state, event) => {
      state.EVENT.description = event.description
      state.EVENT.comittee = event.comittee
      state.EVENT.name = event.name
      state.EVENT.id = event.id
      state.EVENT.startDate = event.startDate
      state.EVENT.endDate = event.endDate
    }
  },
  actions: {
    loadEvent: ({commit}, eventId) => {
      return request('get', '/home/detail/' + eventId)
        .then(
          response => {
            console.log(response)
            commit('SET_EVENT_DETAIL', response)
          }
        )
    }
  }
}

export default event
