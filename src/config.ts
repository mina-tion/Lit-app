import axios from 'axios'
import { logout } from 'utils/login'

export const URL = {
  HOST: process.env.REACT_APP_HOST,
  EVENT_HOST: `${process.env.REACT_APP_HOST}records/stream/sse`,
}

const token = localStorage.getItem('jwt')

export const api = axios.create({
  baseURL: URL.HOST,
  headers: {
    Authorization: `Bearer ${token}`,
  },
  validateStatus: function (status) {
    return true
    return (status >= 200 && status < 300) || status === 400
/*     return status < 500 */
  },
})

// Add a response interceptor
api.interceptors.response.use(
  function (response) {
    if (response.status === 401) {
      logout()
      window.location.replace('/login')
    }
    return response
  },
  function (error) {
    return Promise.reject(error)
  }
)
