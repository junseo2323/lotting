'use client'
import Mininav from "@/components/Mininav"
import styles from "@/styles/Userinfo.module.scss"
import { usePathname } from "next/navigation";
import { useRecoilValueLoadable, useSetRecoilState } from "recoil";
import { userinfoSelector } from "@/utils/selector";
import { useState } from "react";
import { useridState } from "@/utils/atom";



export default function Search() {
  const pathname = usePathname();
  const splitpath = pathname.split('/'); //splitpath[3]
  
  const setIdState = useSetRecoilState(useridState);
  useState(()=>{setIdState(splitpath[3])});
  const userselectordata = useRecoilValueLoadable(userinfoSelector);
  
  switch(userselectordata.state){
    case 'hasValue':
      const userdata = userselectordata.contents;
      console.log(userdata)
      if(userdata===undefined) return <><h1>잘못된 접근입니다</h1></>
      else return (
        <>
        <h1></h1>
          <Mininav />

          <div className={styles.container}>
            <span className={styles.title}>관리번호</span>
            <span className={styles.title}>성명</span>
            <span className={styles.title}>주민번호</span>
            <span className={styles.title}>이메일</span>
            
            <span>{userdata.id}</span>
            <span>{userdata.userinfo.name}</span>
            <span>{userdata.userinfo.firstid}-{userdata.userinfo.secondid}</span>
            <span>{userdata.userinfo.email}</span>

            <span className={styles.title}>휴대전화</span>
            <span className={styles.title}>타입</span>
            <span className={styles.title}>군</span>
            <span className={styles.title}>순번</span>
            
            <span>{userdata.userinfo.phone}</span>
            <span>{userdata.type}</span>
            <span>{userdata.group}</span>
            <span>{userdata.turn}</span>

            <span className={styles.title}>가입차순</span>
            <span className={styles.title}>신탁사제출</span>
            <span className={styles.title}>가입일자</span>
            <span className={styles.title}>가입가</span>
            
            <span>{userdata.registerturn}</span>
            <span>{userdata.submitdate.slice(0,10)}</span>
            <span>{userdata.registerdate.slice(0,10)}</span>
            <span>{parseInt(userdata.resgisterprice).toLocaleString('ko-KR')}₩</span>

            <span className={styles.title}>우편번호</span>
            <span className={styles.title}>주소</span>
            <span className={styles.title}>우편물주소</span>
            <span className={styles.title}></span>
            
            <span>{userdata.userinfo.postnumber}</span>
            <span>{userdata.userinfo.post}</span>
            <span>{userdata.userinfo.getpost}</span>
            <span></span>

            <span className={styles.title}>은행명</span>
            <span className={styles.title}>계좌번호</span>
            <span className={styles.title}>예금주</span>
            <span className={styles.title}>신탁사</span>
            
            <span>{userdata.userinfo.bank}</span>
            <span>{userdata.userinfo.bankid}</span>
            <span>{userdata.userinfo.bankwho}</span>
            <span>{userdata.userinfo.bankwhere}</span>

            <span className={styles.title}>총괄</span>
            <span className={styles.title}>본부</span>
            <span className={styles.title}>팀</span>
            <span className={styles.title}>담당자</span>
            
            <span>{userdata.ext.manage}</span>
            <span>{userdata.ext.managemain}</span>
            <span>{userdata.ext.manageteam}</span>
            <span>{userdata.ext.managename}</span>
          </div>
        </>
    )

    case 'loading':
      console.log("lodding");
      return <></>
    
    case 'hasError':
      throw userselectordata.contents;
  }

  
  }
  