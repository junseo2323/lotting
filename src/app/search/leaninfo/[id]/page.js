'use client'
import Mininav from "@/components/Mininav"
import styles from "@/styles/Leaninfo.module.scss"

import { FaUser } from "react-icons/fa6";

import { useRecoilValue } from "recoil";

import { userinfoSelector } from "@/utils/selector";

const iconstyle = { fontSize: "1.2em", paddingRight: "2%", paddingLeft: "1%", color: "#7152F3" };

export default function Search() {
    const userdata = useRecoilValue(userinfoSelector);

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
            <span>{userdata.loan.loandate}</span>

            <span className={styles.title}>농협</span>
            <span>{userdata.loan.price1}</span>

            <span className={styles.title}>새마을</span>
            <span>{userdata.loan.price2}</span>
          </div> 
          <div className={styles.titlecontainer}>
            <FaUser style={iconstyle} />
            <span>자납</span>
          </div>

          <div className={styles.container}>
            <span className={styles.title}>자납일</span>
            <span>{userdata.loan.selfdate}</span>

            <span className={styles.title}>자납</span>
            <span>{userdata.loan.price3}</span>

            <span className={styles.title}>면세액</span>
            <span>{userdata.loan.price4}</span>
          </div> 
          <div className={styles.titlecontainer}>
            <FaUser style={iconstyle} />
            <span>총액</span>
          </div>
          
          <div className={styles.container}>
            <span className={styles.title}>총액</span>
            <span>{userdata.loan.sumprice}</span>
          </div> 
        </>
      )
  }
  