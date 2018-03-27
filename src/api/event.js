import { request } from '@/utils/request.js'

export function getAllEvent () {
  return request('get', 'event/', '')
}

export function getEvent (eventId) {
  return request('get', 'event/id', eventId)
}
