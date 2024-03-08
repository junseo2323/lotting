"use client"

import Mininav from "@/components/Mininav"
import styles from "@/styles/payinfo.module.scss"
import { useEffect } from "react"
import { useRecoilValue, useRecoilValueLoadable } from "recoil"
import { userinfoSelector } from "@/utils/selector"


export default function Search() {
  const userdata = useRecoilValue(userinfoSelector);
  const count = [1,2,3,4,5,6,7,8,9,10];

    return (
        <>
          <h1></h1>
          <Mininav control="search"/>
          <div className={styles.container}>
            <span className={styles.title}>차수</span>
            <span className={styles.title}>예정일</span>
            <span className={styles.title}>완납일</span>
            <span className={styles.title}>부담금</span>
            <span className={styles.title}>업무대행비</span>
            <span className={styles.title}>할인액</span>
            <span className={styles.title}>합산금액</span>
            
           
            <span>예약금</span>
            <span>{userdata.order[0].duedate.slice(0,10)}</span>
            <span>{userdata.order[0].findate.slice(0,10)}</span>
            <span>{userdata.order[0].price.toLocaleString('ko-KR')}</span>
            <span>{userdata.order[0].price2.toLocaleString('ko-KR')}</span>
            <span>{userdata.order[0].discountprice.toLocaleString('ko-KR')}</span>
            <span>{userdata.order[0].sumprice.toLocaleString('ko-KR')}</span>
            
            {
              count.map((i)=>(
                <>
                  <span>{i}차</span>
                  <span>{userdata.order[i].duedate.slice(0,10)}</span>
                  <span>{userdata.order[i].findate.slice(0,10)}</span>
                  <span>{userdata.order[i].price.toLocaleString('ko-KR')}</span>
                  <span>{userdata.order[i].price2.toLocaleString('ko-KR')}</span>
                  <span>{userdata.order[i].discountprice.toLocaleString('ko-KR')}</span>
                  <span>{userdata.order[i].sumprice.toLocaleString('ko-KR')}</span>
                </>
              ))
            }

          </div>
        </>
      )
  }
  