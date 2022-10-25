import styles from "../../styles/Sidebar.module.css";
import HomeIcon from "@mui/icons-material/Home";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/Logo.png";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
// import Users from '../users/Users'
import TimelineIcon from "@mui/icons-material/Timeline";
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import SupervisorAccountOutlinedIcon from "@mui/icons-material/SupervisorAccountOutlined";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LoopIcon from "@mui/icons-material/Loop";

function SideBar() {
  return (
    <div className={styles.sideBarContainer}>
      <div className={styles.Logo}>
        <Image src={Logo} alt="companyLogo" className={styles.logo} />
      </div>
      <div className={styles.Wrapper}>
        <ul className={styles.sideBarList}>
          <li>
        
              <a>
                <HomeIcon className={styles.icons} />
                home
              </a>  
          </li>
          <li>
            <Link href='/users'>
            <a>
              <GroupAddIcon className={styles.icons} />
              User
            </a>
            </Link>
          </li>
          <li>
            <a>
              <TimelineIcon className={styles.icons}  />
              investment
            </a>
          </li>
          <li>
            <a>
              <SavingsOutlinedIcon className={styles.icons} />
              savings
            </a>
          </li>
          <li>
            <a>
              <AccountBalanceWalletOutlinedIcon className={styles.icons} />
              wallet
            </a>
          </li>
          <li>
            <a>
              <SupervisorAccountOutlinedIcon className={styles.icons} />
              admin
            </a>
          </li>
        </ul>
      </div>
      {/* to fix this later */}
      <footer className={styles.sideBarFooterList}>
        <hr className={styles.line} />
        <div className={styles.FooterIcon}>
          <ul className={styles.sideBarList}>
            <li>
              <a>
                <VpnKeyOutlinedIcon className={styles.icons} />
                changepassword
              </a>
            </li>
            <li>
              <a>
                <LogoutOutlinedIcon className={styles.icons} />
                logout
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default SideBar;
