import { observable, action, makeObservable } from 'mobx'
import { api } from 'config'
import { AxiosError } from 'axios'

class Store {
  constructor() {
    makeObservable(this)
  }
  @observable isRegistered = false
  @observable errorDataSignIn = ''

  @action
  async signUp(dataFields: any) {
    try {
      const { data } = await api.post('/users', dataFields)

      if (data) {
        this.isRegistered = true
      }
    } catch (error) {
      console.log(error, 'error')
    }
  }

  @action
  async signIn(dataFields: any) {
    try {
      const { data } = await api.post('login', dataFields)

      api.defaults.headers.Authorization = `Bearer ${data.access_token}`

      return data
    } catch (error) {
      if ((error as AxiosError).response?.data.statusCode === 401) {
        this.errorDataSignIn = 'Email or password is incorrect, please try again'
      } else {
        this.resetError()
      }
      return error
    }
  }

  @action
  async resetError() {
    this.errorDataSignIn = ''
  }
}
export default new Store()
