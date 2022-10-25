import React from "react";
import styles from "../../styles/Content.module.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import SearchIcon from "@mui/icons-material/Search";
import Tables from "../tables/Tables";




function Content() {
  const  Game = ({type})=>{
    return  <button className={"containerButton " + type}>{type}</button> 
          
   }

  return (
    <>
      <div className={styles.ContentContainer}>
        <div className={styles.ContentTitle}>
          <h3>all</h3>
          <span>
            <KeyboardArrowDownIcon />
          </span>
        </div>
        <div className={styles.DateContainer}>
          <div className={styles.date}>
            <div className={styles.firstDate}>
              <p>From</p>
              <div className={styles.dateIcon}>
                <span className={styles.year}>
                  dd/mm/yyyy <hr />
                </span>
                <CalendarMonthIcon className={styles.calendar} />
              </div>
            </div>
            <div className={styles.firstDate}>
              <p>To</p>
              <div className={styles.dateIcon}>
                <span className={styles.year}>
                  dd/mm/yyyy
                  <hr />
                </span>
                <CalendarMonthIcon className={styles.calendar} />
              </div>
            </div>
          </div>
          <div className={styles.secondIconContainer}>
            <div className={styles.secondIcon}>
              <NoteAddIcon className={styles.note} />
            </div>
            <div className={styles.SearchIcon}>
              <span>
                <SearchIcon className={styles.search} />
                Search <hr />
              </span>
            </div>
          </div>
        </div>
        <hr className={styles.footerHr} />
      <Tables/>
      </div>
    </>
  );
}

export default Content;
