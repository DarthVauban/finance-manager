import React from 'react'
import SideBar from '../../components/SideBar'
import styles from './MainLayout.module.scss'

export const MainLayout = ({ children }) => {
  return (
    <div className={styles.MainLayout}>
      <SideBar />
      <div>
        {children}
      </div>
    </div>
  )
}
