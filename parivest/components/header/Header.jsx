import styles from '../../styles/Header.module.css'
import Image from 'next/image'
import avatar from '../../public/avatar.png'
import LoopIcon from '@mui/icons-material/Loop';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

function Header() {
  return (
   
     <div className={styles.headContainer}>
      <div className={styles.headWrapper}>
      <h2 className={styles.title}>user</h2>
      <div className={styles.headicon}>
      <div className={styles.loop}><LoopIcon/></div> 
      <div className={styles.notification}><NotificationsNoneIcon/>
      <span className={styles.notificationBadge}>2</span></div>
      <div className={styles.avatar}>
      <div className={styles.username}><p>Ole gunner</p>
      <span className={styles.role}>super admin</span></div>
      <div><Image src={avatar} alt="companyLogo" className={styles.logo}/></div>
      </div>
      </div>
      </div>
      </div>
   
  )
}

export default Header