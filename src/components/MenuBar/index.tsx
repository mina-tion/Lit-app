import React from 'react'
import { Menu } from 'antd'
import { NavLink } from 'react-router-dom'
// style
import styles from './styles.module.scss'

// utils
import { menuItems } from 'utils/menuList'

const MenuBar: React.FC = () => {
  return (
    <Menu
      className={styles.menuList}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
    >
      {menuItems.map(item => (
        <Menu.Item key={item.route} className={styles.menuItem}>
          <NavLink
            to={item.route}
            activeClassName="selected"
            className={styles.item}
          >
            {item.title}
          </NavLink>
        </Menu.Item>
      ))}
    </Menu>
  )
}

export default MenuBar
