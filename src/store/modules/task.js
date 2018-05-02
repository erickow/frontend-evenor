import { request } from '@/utils/request'

const task = {
  state: {
    TASK: [],
    JOB: []
  },
  mutations: {
    SET_TASK: (state, task) => {
      state.TASK = task
    },
    SET_JOB: (state, job) => {
      state.JOB = job
    }
  },
  actions: {
    loadTask: ({commit}, eventId) => {
      return request('get', 'task/event/' + eventId)
        .then(
          response => {
            commit('SET_TASK', response)
          }
        )
    },
    createTask: ({state, dispatch}, [eventId, data]) => {
      console.log(data)
      return request('post', 'task/event/' + eventId, data)
    },
    loadJob: ({commit}, JobId) => {
      return request('get', 'task/job/' + JobId)
        .then(
          response => {
            commit('SET_JOB', response)
          }
        )
    }
  }
}

export default task
