const getters = {
  token: state => state.user.token,
  user: state => state.user.SIGNED,
  homeEvents: state => state.home.HOME_EVENTS,
  event: state => state.event.EVENT
}

export default getters
