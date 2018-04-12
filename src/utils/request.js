import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from '@/router/index'
import { setToken, getToken, setUsername } from '@/utils/auth'
import { warningAlert, successAlert } from '@/utils/alert'
import store from '@/store'

Vue.use(axios, VueAxios)

const BaseURL = 'http://127.0.0.1:8000/'

const ApplicationAuth = {
  username: 'ericko',
  password: 'ericko'
}

var token = null

let Development = true

function getTokenLocal () {
  return token === null ? getToken() : token
}

export function requestPublic (method, url, data, onSuccess, onFailed) {
  return Vue.axios({
    method: method,
    url: BaseURL + url,
    data: data
  })
  .then(
    response => {
      if (onSuccess !== undefined && onSuccess !== null) successAlert(onSuccess)
      return response.data
    }
  )
  .catch((error) => {
    warningAlert(onFailed)
    console.log(error)
  }
  )
}

export function requestAPI (method, url, data, onSuccess, onFailed) {
  return Vue.axios({
    withCredentials: true,
    method: method,
    url: BaseURL + url,
    headers: { 'Authorization': 'Bearer ' + getTokenLocal() },
    data: data
  })
    .then(
      response => {
        if (onSuccess !== undefined && onSuccess !== null) successAlert(onSuccess)
        return response
      }
    )
    .catch((error) => {
      if (onFailed !== undefined && onSuccess !== null) warningAlert(onFailed)
      console.log(error)
    }
    )
}

export function request (method, url, data, onSuccess, onFailed) {
  return Vue.axios({
    method: method,
    url: BaseURL + url,
    headers: { 'Authorization': 'Bearer ' + getTokenLocal() },
    data: data
  })
    .then(
      response => {
        if (onSuccess !== undefined && onSuccess !== null) successAlert(onSuccess)
        return response.data
      }
    )
    .catch((error) => {
      warningAlert(onFailed)
      console.log(error)
    }
    )
}

export function requestDownload (url, data, onSuccess, onFailed) {
  return Vue.axios({
    withCredentials: true,
    method: 'get',
    url: BaseURL + url,
    headers: { 'Authorization': 'Bearer ' + getTokenLocal() },
    data: data,
    responseType: 'arraybuffer'
  })
    .then(
      response => {
        if (onSuccess !== undefined && onSuccess !== null) successAlert(onSuccess)
        return response
      }
    )
    .catch((error) => {
      warningAlert(onFailed)
      console.log(error)
    }
    )
}

export function authentication (username, password) {
  return auth(username, password)
}

function auth (username, password) {
  Vue.axios({
    method: 'post',
    url: BaseURL + 'oauth/token?grant_type=password&username=' + username + '&password=' + password,
    auth: ApplicationAuth
  })
    .then(
      (response) => {
        if (Development) console.log(response)
        if (response.status === 200) {
          setUsername(username)
          setToken(response.data.access_token, response.data.expires_in)
          token = response.data.access_token
          store.dispatch('SET_USER')
          successAlert('Login berhasil')
            .then(result => {
              if (result.value) {
                router.push('/home')
              }
            })
        } else {
          // unhandled event
        }
      }
    )
    .catch(
      (response) => {
        warningAlert('Authentikasi Gagal')
      }
    )
}
