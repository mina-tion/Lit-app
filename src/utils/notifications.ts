import { notification } from 'antd'

type NotificationType = 'success' | 'info' | 'warning' | 'error';


export const openNotificationTagName = (type: string) => {
  if (type === 'error') {
    notification[type]({
      message: 'Error',
      description: 'Tag name cannot be empty',
    })
  }
}

export const openNotificationWithIcon = (type: NotificationType, desc: string) => {
  notification[type]({
    message: 'Повідомлення',
    description: desc,
  })
}

export const openNotificationUnexpectedError = (type: string) => {
  if (type === 'error') {
    notification[type]({
      message: 'Error',
      description: 'An unexpected error occurred, please try again',
    })
  }
}
