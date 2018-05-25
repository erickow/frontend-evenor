import { request, requestDownload } from '@/utils/request'
import { setUser, getUsername, getUser } from '@/utils/auth'

const user = {
  state: {
    SIGNED: {
      username: '',
      password: '',
      roles: {},
      name: '',
      photo: '',
      id: ''
    },
    token: '',
    path: ''
  },
  mutations: {
    SET_SIGNED: (state, user) => {
      state.SIGNED.username = user.email
      state.SIGNED.password = user.password
      state.SIGNED.roles = user.roles
      state.SIGNED.name = user.name
      state.SIGNED.photo = user.photo
      state.SIGNED.id = user.id
    },
    SET_TEMP: (state, token) => {
      state.token = token
    },
    SET_PATH: (state, path) => {
      state.path = path
    }
  },
  actions: {
    SET_USER: ({commit, dispatch}) => {
      // let url = encodeURIComponent(username)
      // console.log(url)
      return request('post', 'user/account/', 'username=' + getUsername())
        .then(
          async response => {
            response.photo = dispatch('getPhoto', await response.photo)
            commit('SET_SIGNED', response)
            setUser(response.id)
          }
        )
    },
    uploadFoto: ({commit}, file) => {
      return request('put', 'user/edit/photo/' + getUser(), file)
    },
    getPhoto: ({commit, getters}, data) => {
      return requestDownload('post', 'home/photo/', 'photo=' + data)
      .then(
        async response => {
          console.log(response)
          commit('SET_PATH', await response.data)
        }
      )
    }
  }
}

export default user
