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
      .then(
        response => {
          dispatch('loadTask', eventId)
        }
      )
      .error(error => console.log(error))
    },
    loadJob: ({commit}, JobId) => {
      return request('get', 'task/job/' + JobId)
        .then(
          response => {
            commit('SET_JOB', response)
          }
        )
    },
    createJob: ({dispatch}, [eventId, taskId, data]) => {
      return request('post', 'job/' + taskId, data)
      .then(
        response => {
          dispatch('loadTask', eventId)
        }
      )
    },
    jobCompletion: ({commit, dispatch}, [jobId, data]) => {
      console.log(jobId, data)
      return request('post', 'task/job/' + jobId + '/rekap', data)
        .then(
          response => {
            dispatch('loadJob', jobId)
          }
        )
    }
  }
}

export default task
