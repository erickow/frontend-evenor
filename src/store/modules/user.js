import { request } from '@/utils/request'
import { setUser, getUsername } from '@/utils/auth'
const user = {
  state: {
    SIGNED: {
      username: '',
      password: '',
      roles: {},
      name: '',
      id: ''
    },
    token: ''
  },
  mutations: {
    SET_SIGNED: (state, user) => {
      state.SIGNED.username = user.email
      state.SIGNED.password = user.password
      state.SIGNED.roles = user.roles
      state.SIGNED.name = user.name
      state.SIGNED.id = user.id
    },
    SET_TEMP: (state, token) => {
      state.token = token
    }
  },
  actions: {
    SET_USER: ({commit}) => {
      // let url = encodeURIComponent(username)
      // console.log(url)
      return request('post', 'user/account/', 'username=' + getUsername())
        .then(
          response => {
            commit('SET_SIGNED', response)
            setUser(response.id)
          }
        )
    }
  }
}

export default user
