"use client";
import React from 'react'
import Image from 'next/image'

import profile from "@/img/profile.png"

import { usePathname } from "next/navigation";
import { AiOutlineBell } from "react-icons/ai";

import styles from "../styles/Header.module.scss";
const iconstyle = { fontSize: "1.5em",  float: "left",margin: "13px"};

const Header = () => {
    const pathname = usePathname();
    const headertitle = {
        '/' : '대시보드',
        '/search' : '고객 정보 검색',
        '/create' : '고객 정보 입력',
        '/modify' : '고객 정보 수정',
        '/inputmoney' : '납입금 관리',
        '/control' : '차수 관리',

    }
    return(
        <div className={styles.maincontainer}>
            <div className={styles.container}>
                <h1 className={styles.title}>{headertitle[pathname]}</h1>
                <h3 className={styles.subtitle}>여기에 부제목이 들어갑니다.</h3>
            </div>
            <div className={styles.rightcontainer}>
                <AiOutlineBell style={iconstyle}/>
                <div className={styles.usercontainer}>
                    <Image 
                        src={profile}
                        className={styles.image}
                        width={40}
                        height={40} 
                        alt="profile"                  
                    />
                    <h1 className={styles.name}>이승준</h1>
                    <h3 className={styles.role}>Developer</h3>
                </div>
            </div>
        </div>
    )
}

export default Header;