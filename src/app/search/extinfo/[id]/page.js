'use client'

import Mininav from "@/components/Mininav"
import styles from "@/styles/Leaninfo.module.scss"

import { useRecoilValue } from "recoil";
import { userinfoSelector } from "@/utils/selector";

export default function Search() {
    const userdata = useRecoilValue(userinfoSelector);
    return (
        <>
          <h1></h1>
          <Mininav control="search"/>
          
          <span>여기에는 비고가 들어갑니다.</span>
          
          <div className={styles.titlecontainer}>
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

        </>
      )
  }
  