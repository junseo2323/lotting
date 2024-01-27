"use client";

import { Inputbox,PostInputbox,LongInputbox,DropInputbox,FileInputbox } from "@/components/Inputbox"
import styles from "@/styles/Search.module.scss";
import { searchnameState } from "@/utils/atom";
import { namesearchSelector } from "@/utils/selector";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRecoilValue, useRecoilValueLoadable, useSetRecoilState } from "recoil";

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


const SearchList = (name) => {
  const searchname = name.name;
  
  const setNameState = useSetRecoilState(searchnameState);
  let searchdata = useRecoilValueLoadable(namesearchSelector);
  useEffect(()=>{ setNameState(searchname)});
  
  switch(searchdata.state){
    case 'loading':
      return <h1>loding</h1>
    case 'hasValue':
      return <div>
          test
          {(searchdata.contents).map((k) =>
            <Link className={styles.maincontainer} href={"/search/userinfo/"+k.id}>
              <span>{k.id}</span>
              <span>{k.userinfo.name}</span>
              <span>{k.type}</span>
              <span>{k.group}</span>
              <span>{k.turn}</span>
              <span>{k.tempinfo}</span>
            </Link>
          )}
      </div>
    case "hasError":
      throw "error"
  }

}

export default function Search() {
  const [name,setName] = useState("오준식");
  const onChange = e => {
    setName(e.target.value)
  }
  const onKeyPress = e => {
    if(e.key === 'Enter'){
      
    }
  }
  return (
      <>
        <h1></h1>
        <form className={styles.container}>
          <Inputbox type="text" placeholder="고객 성함" onChange={onChange} onKeyPress={onKeyPress}/>
          <DropInputbox />
          <DropInputbox />
          <DropInputbox />
        </form>
        <div className={styles.tablecontainer}>
          <span>관리번호</span>
          <span>성명</span>
          <span>타입</span>
          <span>군</span>
          <span>순번</span>
          <span>임시동호</span>
        </div>
        <SearchList name={name} />   
      </>
    )
}
