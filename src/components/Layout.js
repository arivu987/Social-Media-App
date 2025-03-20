import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const Layout = () => {
  return (
    <>
      <Header className = "App"/>
      <main>
            <Outlet/>
      </main>
      
    </>
  )
}

export default Layout
