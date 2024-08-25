"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AiFillAppstore, AiOutlineAppstore, AiOutlineDollar, AiFillDollarCircle } from "react-icons/ai";
import { HiOutlineUsers, HiUsers } from "react-icons/hi2";
import LOGO from "@/img/logo.png";
import styles from "../styles/Nav.module.scss";

const iconstyle = { fontSize: "1.5em", paddingRight: "10%", paddingLeft: "7%" };

const Nav = () => {
  const pathname = usePathname();
  const splitpath = pathname.split('/');

  return (
    <div className={styles.container}>
      <Link href="/dashboard">
        <Image src={LOGO} className={styles.logostyle} alt={"logo"} />
      </Link>
      <ul className={styles.listconatiner}>
        <Link href="/dashboard">
          <li className={splitpath[1] === "dashboard" ? styles.select : styles.nonselect}>
            <div className={styles.innerconaainer}>
              {splitpath[1] === "dashboard" ? (<AiFillAppstore style={iconstyle} />) : (<AiOutlineAppstore style={iconstyle} />)}
              <span className={styles.innertext}>대시보드</span>
            </div>
          </li>
        </Link>
        <li className={splitpath[1] === "search" ? styles.select : styles.nonselect}>
          <div className={styles.innerconaainer}>
            {splitpath[1] === "search" ? (<HiUsers style={iconstyle} />) : (<HiOutlineUsers style={iconstyle} />)}
            <span className={styles.innertext}>회원 정보 검색</span>
          </div>
          <ul className={styles.dropdownMenu}>
            <li><Link href="/search">정계약</Link></li>
            <li><Link href="/search/modify">수정</Link></li>
            <li><Link href="/search/cancel">해지</Link></li>
          </ul>
        </li>
        <Link href="/create">
          <li className={splitpath[1] === "create" ? styles.select : styles.nonselect}>
            <div className={styles.innerconaainer}>
              {splitpath[1] === "create" ? (<HiUsers style={iconstyle} />) : (<HiOutlineUsers style={iconstyle} />)}
              <span className={styles.innertext}>회원 정보 입력</span>
            </div>
          </li>
        </Link>
        <Link href="/modify">
          <li className={splitpath[1] === "modify" ? styles.select : styles.nonselect}>
            <div className={styles.innerconaainer}>
              {splitpath[1] === "modify" ? (<HiUsers style={iconstyle} />) : (<HiOutlineUsers style={iconstyle} />)}
              <span className={styles.innertext}>회원 정보 수정</span>
            </div>
          </li>
        </Link>
        <Link href="/inputmoney">
          <li className={splitpath[1] === "inputmoney" ? styles.select : styles.nonselect}>
            <div className={styles.innerconaainer}>
              {splitpath[1] === "inputmoney" ? (<AiFillDollarCircle style={iconstyle} />) : (<AiOutlineDollar style={iconstyle} />)}
              <span className={styles.innertext}>납입금 관리</span>
            </div>
          </li>
        </Link>
        <Link href="/control">
          <li className={splitpath[1] === "control" ? styles.select : styles.nonselect}>
            <div className={styles.innerconaainer}>
              {splitpath[1] === "control" ? (<AiFillDollarCircle style={iconstyle} />) : (<AiOutlineDollar style={iconstyle} />)}
              <span className={styles.innertext}>차수 관리</span>
            </div>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Nav;
