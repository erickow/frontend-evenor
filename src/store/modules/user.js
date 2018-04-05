import { request } from '@/utils/request'
const user = {
  state: {
    SIGNED: {
      username: '',
      password: '',
      roles: {},
      name: '',
      identity: '',
      id: ''
    },
    token: ''
  },
  mutations: {
    SET_SIGNED: (state, user) => {
      state.SIGNED.username = user.email
      state.SIGNED.password = user.password
      state.SIGNED.roles = user.role
      state.SIGNED.name = user.name
      state.SIGNED.id = user.id
    },
    SET_TEMP: (state, token) => {
      state.token = token
    }
  },
  actions: {
    SET_USER: ({commit}, username) => {
      return request('get', 'user/', 'name=' + username)
        .then(
          response => {
            commit('SET_SIGNED', response)
          }
        )
    }
  }
}

export default user
