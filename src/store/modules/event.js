import { request, requestDownload } from '@/utils/request'
import { getUser } from '@/utils/auth'

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
    MY_HISTORY_EVENT: [],
    EVENT_PARTICIPANT: [],
    EVENT_COMITTEE: [],
    path: ''
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
    },
    SET_EVENT_PARTICIPANT: (state, participant) => {
      state.EVENT_PARTICIPANT = participant
    },
    SET_EVENT_COMITTEE: (state, comittee) => {
      state.EVENT_COMITTEE = comittee
    },
    SET_EVENT_PHOTO_PATH: (state, path) => {
      state.path = path
    }
  },
  actions: {
    loadEvent: ({commit}, eventId) => {
      return request('get', 'home/detail/' + eventId)
        .then(
          response => {
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
    },
    loadEventParticipant: ({commit}, eventId) => {
      return request('get', 'event/participant/' + eventId)
      .then(
        response => {
          console.log(response)
          commit('SET_EVENT_PARTICIPANT', response)
        }
      )
    },
    loadEventComittee: ({commit}, eventId) => {
      return request('get', 'event/comittee/' + eventId)
      .then(
        response => {
          commit('SET_EVENT_COMITTEE', response)
        }
      )
    },
    createEvent: ({commit}, data) => {
      return request('post', 'event/' + getUser(), data)
    },
    getPhotoEvent: ({commit}, data) => {
      return requestDownload('post', 'user/photo/', 'photo=' + data)
        .then(
          async response => {
            console.log(response.data)
            commit('SET_EVENT_PHOTO_PATH', await response.data)
          }
        )
    }
  }
}

export default event
