import Mininav from "@/components/Mininav"
import styles from "@/styles/Leaninfo.module.scss"

import { FaUser } from "react-icons/fa6";

const iconstyle = { fontSize: "1.2em", paddingRight: "2%", paddingLeft: "1%", color: "#7152F3" };

export default function Search() {
    return (
        <>
          <h1></h1>
          <Mininav />
          <div className={styles.titlecontainer}>
            <FaUser style={iconstyle} />
            <span>대출</span>
          </div>
          <div className={styles.container}>
            <span className={styles.title}>대출일</span>
            <span>23-01-23</span>

            <span className={styles.title}>농협</span>
            <span>352-1543-2603-13</span>

            <span className={styles.title}>새마을</span>
            <span>352-1543-2603-13</span>
          </div> 
          <div className={styles.titlecontainer}>
            <FaUser style={iconstyle} />
            <span>자납</span>
          </div>

          <div className={styles.container}>
            <span className={styles.title}>자납일</span>
            <span>23-04-23</span>

            <span className={styles.title}>자납</span>
            <span>2,000,000</span>

            <span className={styles.title}>면세액</span>
            <span>100,000</span>
          </div> 
          <div className={styles.titlecontainer}>
            <FaUser style={iconstyle} />
            <span>총액</span>
          </div>
          
          <div className={styles.container}>
            <span className={styles.title}>총액</span>
            <span>1,900,000</span>
          </div> 
        </>
      )
  }
  