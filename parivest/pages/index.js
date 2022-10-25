import Head from "next/head"
import styles from '../styles/Home.module.css'
import SideBar from "../components/sidebar/SideBar"
import Topbar from "../components/header/Header"
import Header from "../components/header/Header"
import Content from "../components/content/Content"
import Users from "../components/users/Users"

function head(){
  return(
   
   <div className={styles.container}>
   <Head>
    <title>Parivest next app</title>
    <meta name="description" content="Created by Ayodeji"/>
   </Head>
   <div >
   <Content/>
   <Users/>
   </div>
   
   </div>
   
  )
}
export default head

