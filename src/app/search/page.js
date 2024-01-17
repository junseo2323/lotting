"use client";

import { Inputbox,PostInputbox,LongInputbox,DropInputbox,FileInputbox } from "@/components/Inputbox"
import styles from "@/styles/Search.module.scss";
import Link from "next/link";

const dummydata = [
  {
    "관리번호" : 123456,
    "성명" : "이승준",
    "타입" : "84A",
    "군" : "사",
    "순번" : 1,
    "임시동호" : "84A-사-1"
  },
  {
    "관리번호" : 111111,
    "성명" : "오준서",
    "타입" : "84B",
    "군" : "다",
    "순번" : 2,
    "임시동호" : "84A-다-2"
  },
]

export default function Search() {
  return (
      <>
        <h1></h1>
        <div className={styles.container}>
          <Inputbox type="text" placeholder="고객 성함" />
          <DropInputbox />
          <DropInputbox />
          <DropInputbox />
        </div>
        <div className={styles.tablecontainer}>
          <span>관리번호</span>
          <span>성명</span>
          <span>타입</span>
          <span>군</span>
          <span>순번</span>
          <span>임시동호</span>
        </div>
          {dummydata.map((k) =>
            <Link className={styles.maincontainer} href={"/search/userinfo/"+k.관리번호}>
              <span>{k.관리번호}</span>
              <span>{k.성명}</span>
              <span>{k.타입}</span>
              <span>{k.군}</span>
              <span>{k.순번}</span>
              <span>{k.임시동호}</span>
            </Link>
          )}
      </>
    )
}
