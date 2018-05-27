import Cookies from 'js-cookie'
const TokenKey = 'TokenKey'
const UserId = 'UserId'
const ComitteeId = 'ComitteeId'

const Username = 'Username'

export function getToken () {
  return Cookies.get(TokenKey)
}

export function getUsername () {
  return Cookies.get(Username)
}

export function setUsername (user) {
  Cookies.set(Username, user)
}

export function getUser () {
  return Cookies.get(UserId)
}

export function getComittee () {
  return Cookies.get(ComitteeId)
}

export function setToken (token, expires) {
  return Cookies.set(TokenKey, token, expires)
}

export function setUser (user) {
  return Cookies.set(UserId, user)
}

export function setComittee (comittee) {
  return Cookies.set(ComitteeId, comittee)
}

export function checkCredentials () {
  return getToken() !== null && getToken() !== '' && getToken() !== undefined
}

export function destroyCookies () {
  Cookies.remove(TokenKey)
  Cookies.remove(UserId)
  Cookies.remove(Username)
  Cookies.remove(ComitteeId)
}
