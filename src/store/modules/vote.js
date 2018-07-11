import { request } from '@/utils/request'
import { getUser, getComittee } from '@/utils/auth'

const vote = {
  state: {
    UPCOMING_VOTES: [],
    HISTORY_VOTES: []
  },
  mutations: {
    SET_UPCOMING_VOTE: (state, upcomingVotes) => {
      state.UPCOMING_VOTES = upcomingVotes
    },
    SET_HISTORY_VOTE: (state, historyVotes) => {
      state.HISTORY_VOTES = historyVotes
    }
  },
  actions: {
    loadUpcomingVotes: ({commit}, eventId) => {
      return request('get', 'vote/upcoming/' + eventId)
        .then(
          response => {
            commit('SET_UPCOMING_VOTE', response)
          }
        )
    },
    loadHistoryVotes: ({commit}, eventId) => {
      return request('get', 'vote/history/' + eventId)
        .then(
          response => {
            commit('SET_HISTORY_VOTE', response)
          }
        )
    },
    createVote: ({commit, dispatch}, [eventId, data]) => {
      return request('post', 'vote/event/' + eventId + '/' + getUser(), data)
        .then(
          response => {
            dispatch('loadUpcomingVotes', eventId)
            dispatch('loadHistoryVotes', eventId)
            dispatch('loadEventComittee', eventId)
          }
        )
    },
    voting: ({commit, dispatch}, [voteId, answerId, eventId]) => {
      return request('post', 'vote/voter/' + voteId + '/' + answerId + '/' + getComittee())
        .then(
          response => {
            dispatch('loadUpcomingVotes', eventId)
            dispatch('loadHistoryVotes', eventId)
            dispatch('loadEventComittee', eventId)
          }
        )
    }
  }
}

export default vote
