import { request } from '@/utils/request'
const home = {
  state: {
    HOME_EVENTS: [],
    auth: ''
  },
  mutations: {
    SET_HOME_EVENTS: (state, event) => {
      state.HOME_EVENTS = event
    },
    SET_AUTH: (state, data) => {
      state.auth = data
    }
  },
  actions: {
    loadHomeEvents: ({commit, dispatch}) => {
      return request('get', 'home/event/')
        .then(
          response => {
            response.forEach(async (item, index) => {
              console.log(item.photo)
              await dispatch('getPhotoEvent', item.photo)
              item.photo = await dispatch('getPhotoPath')
              console.log(item.photo)
              return item
            })
            console.log(response)
            commit('SET_HOME_EVENTS', response)
          }
        )
    },
    getPhotoPath: ({commit, getters}) => {
      return getters.eventPhoto
    },
    isAuth: ({commit}, data) => {
      return commit('SET_AUTH', data)
    }
  }
}

export default home
