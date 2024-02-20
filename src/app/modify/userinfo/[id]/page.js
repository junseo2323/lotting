'use client'
import Mininav from "@/components/Mininav"
import styles from "@/styles/Userinfo.module.scss"
import { usePathname } from "next/navigation";
import { useRecoilValueLoadable, useSetRecoilState } from "recoil";
import { userinfoSelector } from "@/utils/selector";
import { useState } from "react";
import { useridState } from "@/utils/atom";
import { useForm } from "react-hook-form"



export default function Modify() {
  const pathname = usePathname();
  const splitpath = pathname.split('/'); //splitpath[3]

  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => console.log(data)

  const setIdState = useSetRecoilState(useridState);
  useState(()=>{setIdState(splitpath[3])});
  const userselectordata = useRecoilValueLoadable(userinfoSelector);
  
  switch(userselectordata.state){
    case 'hasValue':
      const userdata = userselectordata.contents;
      if(userdata===undefined) return <><h1>잘못된 접근입니다</h1></>
      else return (
        <>
        <h1></h1>
          <Mininav />

            <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
              <span className={styles.title}>관리번호</span>
              <span className={styles.title}>성명</span>
              <span className={styles.title}>주민번호</span>
              <span className={styles.title}>이메일</span>
              
              <span>{userdata.id}</span>
              <input defaultValue={userdata.userinfo.name} {...register("userinfo.name")} />
              <input defaultValue={(userdata.userinfo.firstid)+"-"+userdata.userinfo.secondid} {...register("userinfo.userid")} />
              <input defaultValue={userdata.userinfo.email} {...register("userinfo.email")} />

              <span className={styles.title}>휴대전화</span>
              <span className={styles.title}>타입</span>
              <span className={styles.title}>군</span>
              <span className={styles.title}>순번</span>
              
              <input defaultValue={userdata.userinfo.phone} {...register("userinfo.phone")} />
              <input defaultValue={userdata.type} {...register("type")} />
              <input defaultValue={userdata.group} {...register("group")} />
              <input defaultValue={userdata.turn} {...register("turn")} />

              <span className={styles.title}>가입차순</span>
              <span className={styles.title}>신탁사제출</span>
              <span className={styles.title}>가입일자</span>
              <span className={styles.title}>가입가</span>
              
              <input defaultValue={userdata.registerturn} {...register("registerturn")} />
              <input defaultValue={userdata.submitdate.slice(0,10)} {...register("submitdate")} type="date"/>
              <input defaultValue={userdata.registerdate.slice(0,10)} {...register("registerdate")} type="date"/>
              <input defaultValue={parseInt(userdata.resgisterprice).toLocaleString('ko-KR')} {...register("resgisterprice")} />

              <span className={styles.title}>우편번호</span>
              <span className={styles.title}>주소</span>
              <span className={styles.title}>우편물주소</span>
              <span className={styles.title}></span>
              
              <input defaultValue={userdata.userinfo.postnumber} {...register("userinfo.postnumber")} />
              <textarea defaultValue={userdata.userinfo.post} {...register("userinfo.post")} />
              <textarea defaultValue={userdata.userinfo.getpost} {...register("userinfo.getpost")} />
              <span></span>

              <span className={styles.title}>은행명</span>
              <span className={styles.title}>계좌번호</span>
              <span className={styles.title}>예금주</span>
              <span className={styles.title}>신탁사</span>
              
              <input defaultValue={userdata.userinfo.bank} {...register("userinfo.bank")} />
              <input defaultValue={userdata.userinfo.bankid} {...register("userinfo.bankid")} />
              <input defaultValue={userdata.userinfo.bankwho} {...register("userinfo.bankwho")} />
              <input defaultValue={userdata.userinfo.bankwhere} {...register("userinfo.bankwhere")} />

              <span className={styles.title}>총괄</span>
              <span className={styles.title}>본부</span>
              <span className={styles.title}>팀</span>
              <span className={styles.title}>담당자</span>
              
              <input defaultValue={userdata.ext.manage} {...register("ext.manage")} />
              <input defaultValue={userdata.ext.managemain} {...register("ext.managemain")} />
              <input defaultValue={userdata.ext.manageteam} {...register("ext.manageteam")} />
              <input defaultValue={userdata.ext.managename} {...register("ext.managename")} />
              
              <input type="submit" value="수정하기"/>

            </form>
        </>
    )

    case 'loading':
      console.log("lodding");
      return <></>
    
    case 'hasError':
      throw userselectordata.contents;
  }

  
  }
  