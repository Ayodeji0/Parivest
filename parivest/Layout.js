import React from 'react'
import SideBar from "././components/sidebar/SideBar"
import Header from "././components/header/Header"

function Layout({children}) {
  return (
    <div>
    <SideBar/>
    <Header/>
    <main>
    {children}
    </main>
    </div>
  )
}

export default Layout