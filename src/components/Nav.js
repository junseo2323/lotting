import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { AiFillAppstore } from "react-icons/ai";
import { HiOutlineUsers } from "react-icons/hi2";
import { AiOutlineDollar } from "react-icons/ai";

import LOGO from '@/img/logo.png';


import styles from "../styles/Nav.module.scss";
const iconstyle = { fontSize: "2em", paddingRight: "10%", paddingLeft: "7%" }

const Nav = () => {
    return(
        <div className={styles.container}>
			<Image src={LOGO} className={styles.logostyle} alt={'logo'} />
            <ul className={styles.listconatiner}>
                <li className={styles.select}>
                    <div className={styles.innerconaainer}><AiFillAppstore style={iconstyle} /><span className={styles.innertext}>대시보드</span></div>
                </li>
                <li className={styles.nonselect}><div><HiOutlineUsers style={iconstyle}/><span className={styles.innertext}>대시보드</span></div></li>
                <li className={styles.nonselect}><div><HiOutlineUsers style={iconstyle}/><span className={styles.innertext}>대시보드</span></div></li>
                <li className={styles.nonselect}><div><HiOutlineUsers style={iconstyle}/><span className={styles.innertext}>대시보드</span></div></li>
                <li className={styles.nonselect}><div><AiOutlineDollar style={iconstyle}/><span className={styles.innertext}>대시보드</span></div></li>
                <li className={styles.nonselect}><div><AiOutlineDollar style={iconstyle}/><span className={styles.innertext}>대시보드</span></div></li>
            </ul>
        </div>
    )
}

export default Nav; 