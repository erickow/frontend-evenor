const getters = {
  token: state => state.user.token,
  user: state => state.user.SIGNED,
  homeEvents: state => state.home.HOME_EVENTS,
  event: state => state.event.EVENT,
  myUpcomingEvents: state => state.event.MY_UPCOMING_EVENT,
  myHistoryEvents: state => state.event.MY_HISTORY_EVENT,
  auth: state => state.home.auth,
  eventComittee: state => state.event.EVENT_COMITTEE,
  eventParticipant: state => state.event.EVENT_PARTICIPANT,
  eventTask: state => state.task.TASK,
  eventJob: state => state.task.JOB,
  eventUpcomingVote: state => state.vote.UPCOMING_VOTES,
  eventHistoryVote: state => state.vote.HISTORY_VOTES,
  userPhoto: state => state.user.path,
  eventPhoto: state => state.event.path
}

export default getters
