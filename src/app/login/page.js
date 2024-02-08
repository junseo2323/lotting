"use client"
import {LoginInputbox} from "@/components/Inputbox"
import {Button,CheckButton} from "@/components/Button"
import styles from "@/styles/Login.module.scss"
import { useState } from "react"

export default function Login() {
    const [userform,setUserform] = useState({
        id : "",
        pw : ""
    })

    const handleChange = e => {
        setUserform(
            {[e.target.name]: e.target.value}
        );
    }

    return (
        <div className={styles.container}>
            <div className={styles.childcontainer}>
                <h1>환영합니다👋</h1>
                <h3>민간임대주택 분양인관리시스템에 오신것을 환영합니다!</h3>
                <LoginInputbox name="id" placeholder="아이디" onChange={handleChange}/>
                <LoginInputbox name="pw" placeholder="비밀번호" type="password"/>
                <div className={styles.checkcontainer}>
                    <CheckButton /> 
                    <span className={styles.remembertext}>아이디 기억하기</span> 
                    <span className={styles.forgottext}>계정 분실시 관리자 문의</span>
                </div>
                <Button>로그인</Button>
                
            </div>
        </div>
      )
  }
  