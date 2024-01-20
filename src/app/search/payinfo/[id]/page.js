"use client"

import Mininav from "@/components/Mininav"
import styles from "@/styles/payinfo.module.scss"
import { useEffect } from "react"
import { useRecoilValue, useRecoilValueLoadable } from "recoil"
import { userinfoSelector } from "@/utils/selector"

const dummydata = {
  "id": 122321,
  "typeid": 1,
  "classification": 1,
  "type": "84A",
  "group": "사",
  "turn": 1,
  "tempinfo": "84A-사-1",
  "registerturn" : "1차-1",
  "order": [
      {
        "duedate": "2024-01-11T00:00:00.000Z" ,
        "findate": "2024-01-11T00:00:00.000Z",
        "price": 1000000, //부담금
        "price2": 0, //업무대행비
        "discountprice": 0, //할인액
        "deleteprice": 0, 
        "ext": null,
        "sumprice": 1000000 //합산액
      },
      {
        "duedate": "2024-01-11T00:00:00.000Z" ,
        "findate": "2024-01-11T00:00:00.000Z",
        "price": 1000000, //부담금
        "price2": 0, //업무대행비
        "discountprice": 0, //할인액
        "deleteprice": 0, 
        "ext": null,
        "sumprice": 1000000 //합산액
      },
      {
        "duedate": "2024-01-11T00:00:00.000Z" ,
        "findate": "2024-01-11T00:00:00.000Z",
        "price": 1000000, //부담금
        "price2": 0, //업무대행비
        "discountprice": 0, //할인액
        "deleteprice": 0, 
        "ext": null,
        "sumprice": 1000000 //합산액
      },
      {
        "duedate": "2024-01-11T00:00:00.000Z" ,
        "findate": "2024-01-11T00:00:00.000Z",
        "price": 1000000, //부담금
        "price2": 0, //업무대행비
        "discountprice": 0, //할인액
        "deleteprice": 0, 
        "ext": null,
        "sumprice": 1000000 //합산액
      },
      {
        "duedate": "2024-01-11T00:00:00.000Z" ,
        "findate": "2024-01-11T00:00:00.000Z",
        "price": 1000000, //부담금
        "price2": 0, //업무대행비
        "discountprice": 0, //할인액
        "deleteprice": 0, 
        "ext": null,
        "sumprice": 1000000 //합산액
      },
      {
        "duedate": "2024-01-11T00:00:00.000Z" ,
        "findate": "2024-01-11T00:00:00.000Z",
        "price": 1000000, //부담금
        "price2": 0, //업무대행비
        "discountprice": 0, //할인액
        "deleteprice": 0, 
        "ext": null,
        "sumprice": 1000000 //합산액
      },
      {
        "duedate": "2024-01-11T00:00:00.000Z" ,
        "findate": "2024-01-11T00:00:00.000Z",
        "price": 1000000, //부담금
        "price2": 0, //업무대행비
        "discountprice": 0, //할인액
        "deleteprice": 0, 
        "ext": null,
        "sumprice": 1000000 //합산액
      },
      {
        "duedate": "2024-01-11T00:00:00.000Z" ,
        "findate": "2024-01-11T00:00:00.000Z",
        "price": 1000000, //부담금
        "price2": 0, //업무대행비
        "discountprice": 0, //할인액
        "deleteprice": 0, 
        "ext": null,
        "sumprice": 1000000 //합산액
      },
      {
        "duedate": "2024-01-11T00:00:00.000Z" ,
        "findate": "2024-01-11T00:00:00.000Z",
        "price": 1000000, //부담금
        "price2": 0, //업무대행비
        "discountprice": 0, //할인액
        "deleteprice": 0, 
        "ext": null,
        "sumprice": 1000000 //합산액
      },
      {
        "duedate": "2024-01-11T00:00:00.000Z" ,
        "findate": "2024-01-11T00:00:00.000Z",
        "price": 1000000, //부담금
        "price2": 0, //업무대행비
        "discountprice": 0, //할인액
        "deleteprice": 0, 
        "ext": null,
        "sumprice": 1000000 //합산액
      },
      {
        "duedate": "2024-01-11T00:00:00.000Z" ,
        "findate": "2024-01-11T00:00:00.000Z",
        "price": 1000000, //부담금
        "price2": 0, //업무대행비
        "discountprice": 0, //할인액
        "deleteprice": 0, 
        "ext": null,
        "sumprice": 1000000 //합산액
      }
    ]
  ,
  "submitdate": "2024-01-11T00:00:00.000Z",
  "registerdate": "2024-12-27T00:00:00.000Z",
  "resgisterprice": 565435000,
  "userinfo": {
    "name": "oh jun seo",
    "firstid": "030523",
    "secondid": "1234567",
    "phone": "01034307314",
    "getpost": "인천광역시 중구 운서동 신도시남로 15 금호베스트빌 101동 101호",
    "email": "hunseol03@gmail.com",
    "bank": "신한은행",
    "bankid": "110479111111",
    "bankwho": "오준서",
    "bankwhere": "무궁화신탁",
    "postnumber": 12345,
    "post": "인천광역시 중구 운서동 신도시남로 15 금호베스트빌 101동 101호",
    "come": "친구/지인"
  },
  "data": {
    "type": null,
    "grout": null,
    "turn": null,
    "submitturn": null,
    "submitdate": null,
    "trustsubmitdate": null,
    "submitprice": null,
    "earnestdate": null,
    "earnest": null
  },
  "loan": {
    "loandate": null,
    "price1": null,
    "price2": null,
    "selfdate": null,
    "price3": null,
    "price4": null,
    "sumprice": null
  },
  "fileinfo": {
    "file1": null,
    "file2": null,
    "file3": null,
    "file4": null,
    "file5": null,
    "file6": null,
    "file7": null,
    "file8": null
  },
  "ext": {
    "manage": "1",
    "managemain": "2",
    "manageteam": "1",
    "managename": "오준서",
    "ext": "기타 정보입니다."
  },
  "cancel": {
    "canceldate": null,
    "paybackdate": null,
    "paybackprice": null
  }
}

export default function Search() {
  const userdata = useRecoilValue(userinfoSelector);
  const count = [1,2,3,4,5,6,7,8,9,10];

    return (
        <>
          <h1></h1>
          <Mininav />
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
  