import React from 'react'

import { Route, Redirect } from 'react-router-dom'
import { Layout } from 'antd'
import MenuBar from 'components/MenuBar'
import SiderContent from 'components/SiderContent'
import { Footer } from 'antd/lib/layout/layout'
import styles from './styles.module.scss'
// utils
import { isLogin } from 'utils/login'

const { Header, Sider } = Layout
const PrivateRoute = ({ component: Component, ...rest }: any): any => {
  return (
    <Route
      {...rest}
      render={props =>
        isLogin() ? (
          <Layout className={styles.container}>
            <Header className={styles.header}>
              <MenuBar />
            </Header>
            <Layout className={styles.layout}>
              <Layout.Content className={styles.content}>
                <Component {...props} />{' '}
                <Sider className={styles.sider}>
                  <SiderContent />
                </Sider>
              </Layout.Content>
            </Layout>
          </Layout>
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  )
}

export default PrivateRoute
