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
    const splitpath = pathname.split('/');
    const headertitle = {
        'dashboard' : '조합원관리시스템이 정상 작동중입니다 👋🏻',
        'search' : '고객 정보 검색',
        'create' : '고객 정보 입력',
        'modify' : '고객 정보 수정',
        'inputmoney' : '납입금 관리',
        'control' : '차수 관리',
    }
    const subtitle = {
        'dashboard' : '덕소 리버 베르데포레 [개발중]',
        'search' : '고객정보를 한번에 확인할 수 있는 페이지입니다.',
        'create' : '신규 고객정보를 생성할 수 있는 페이지입니다.',
        'modify' : '기존 고객정보를 수정할 수 있는 페이지입니다.',
        'inputmoney' : '고객의 납입금을 한번에 관리할 수 있는 페이지입니다.',
        'control' : '차수별 납입금을 한번에 확인하고 수정,생성,삭제를 진행할 수 있습니다. [개발중]',
    }
    return(
        <div className={styles.maincontainer}>
            <div className={styles.container}>
                <h1 className={styles.title}>{headertitle[splitpath[1]]}</h1>
                <h3 className={styles.subtitle}>{subtitle[splitpath[1]]}</h3>
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