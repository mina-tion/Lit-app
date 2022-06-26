import { observable, action, makeObservable } from 'mobx'
import { api } from 'config'
import { AxiosError } from 'axios'
import { autorun, set, toJS } from 'mobx'
import {openNotificationWithIcon } from 'utils/notifications'

export function autoSave(_this: any, name: string) {
  const storedJson = localStorage.getItem(name)
  if (storedJson) {
    set(_this, JSON.parse(storedJson))
  }
  autorun(() => {
    const value = toJS(_this)
    localStorage.setItem(name, JSON.stringify(value))
  })
}

class Store {
  public accessToken: string
  constructor() {
    makeObservable(this)
    this.accessToken = ''
    autoSave(this, 'accountName')
  }
  @observable isRegistered = false
  @observable errorDataSignIn = ''
  @observable accountName: string = ''
  @observable bookmarks: any
  setAccountName(value: string) {
    this.accountName = value
  }

  @action
  async signUp(dataFields: any) {
    try {
      this.isRegistered = true
      await api.post('auth/registration', dataFields)
      openNotificationWithIcon('success', "Користувач зареєстрований успішно")
    } catch (error) {
      console.log(error, 'error')
    }
  }

  @action
  async signIn(dataFields: any) {
    try {
      const { data } = await api.post('auth/login', dataFields)
      api.defaults.headers.Authorization = `Bearer ${data.access_token}`
      if (!data.message) { 
        openNotificationWithIcon('success', "Ви успішно увійшли в акаунт")
      }
      else { 
        openNotificationWithIcon('error', "Невірний пароль")
      }
      
      return data
      
    } catch (error) {
      if ((error as AxiosError).response?.data.statusCode === 401) {
        this.errorDataSignIn = 'Email or password is incorrect, please try again'
      } else {
        this.resetError()
      }
      openNotificationWithIcon('error', "Втрачено зв'язок з сервером")
      return error
    }
  }

  @action
  async getBookmarks() {
    try {
      const { data } = await api.post('auth/bookmarks', {
        email: this.accountName,
      })
      this.bookmarks = data.uBookmarks
      return data
    } catch (error) {}
  }

  @action
  async setBookmarks(index: number, type: string) {
    const tempMarks = this.bookmarks

    if (tempMarks[type].includes(index)) {
      tempMarks[type] = tempMarks[type].filter((i: any) => i !== index)
    } else {
      tempMarks[type].push(index)
    }

    try {
      const { data } = await api.post('auth/bookmarks', {
        email: this.accountName,
        bookmarks: tempMarks,
      })
      this.bookmarks = data.uBookmarks
      return data
    } catch (error) {}
  }

  @action
  async resetError() {
    this.errorDataSignIn = ''
  }
}
export default new Store()
