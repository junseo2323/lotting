"use client";

import { Inputbox,PostInputbox,LongInputbox,DropInputbox,FileInputbox } from "@/components/Inputbox"
import styles from "@/styles/Search.module.scss";
import { searchnameState } from "@/utils/atom";
import { namesearchSelector } from "@/utils/selector";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRecoilValue, useRecoilValueLoadable, useSetRecoilState } from "recoil";


const SearchList = (name) => {
  let searchname;
  if((name.name).length > 1) searchname = name.name;
  
  const setNameState = useSetRecoilState(searchnameState);
  let searchdata = useRecoilValueLoadable(namesearchSelector);
  useEffect(()=>{ setNameState(searchname)});
  
  switch(searchdata.state){
    case 'loading':
      return <></>
    case 'hasValue':
      return <div>
          {(searchdata.contents).map((k) =>
            <Link className={styles.maincontainer} href={"/modify/"+k.id}>
              <span>{k.id}</span>
              <span>{k.userinfo.name}</span>
              <span>{k.data.type}</span>
              <span>{k.data.group}</span>
              <span>{k.data.turn}</span>
              <span>{k.data.type}-{k.data.group}-{k.data.turn}</span>
            </Link>
          )}
      </div>
    case "hasError":
      throw "error"
  }

}

const typelist = [
  {
    "value" : "44가",
    "item" : "44가"
  },
  {
    "value" : "44나",
    "item" : "44나"
  },
  {
    "value" : "44다",
    "item" : "44다"
  },
  {
    "value" : "49가",
    "item" : "49가"
  },
  {
    "value" : "49나",
    "item" : "49나"
  },
  {
    "value" : "49다",
    "item" : "49다"
  },
  {
    "value" : "70가",
    "item" : "70가"
  },
  {
    "value" : "70나",
    "item" : "70나"
  },
  {
    "value" : "70다",
    "item" : "70다"
  },
  {
    "value" : "84A가",
    "item" : "84A가"
  },
  {
    "value" : "84A나",
    "item" : "84A나"
  },
  {
    "value" : "84A다",
    "item" : "84A다"
  },
  {
    "value" : "84A라",
    "item" : "84A라"
  },
  {
    "value" : "84A마",
    "item" : "84A마"
  },
  {
    "value" : "84A바",
    "item" : "84A바"
  },
  {
    "value" : "84A사",
    "item" : "84A사"
  },
  {
    "value" : "84B가",
    "item" : "84B가"
  },
  {
    "value" : "84B나",
    "item" : "84B나"
  },
  {
    "value" : "84B다",
    "item" : "84B다"
  },
  {
    "value" : "84B라",
    "item" : "84B라"
  },
  {
    "value" : "84B마",
    "item" : "84B마"
  },
  {
    "value" : "84B바",
    "item" : "84B바"
  },
  {
    "value" : "84B사",
    "item" : "84B사"
  }
]

const grouplist = [
  {
    "value" : "가",
    "item" : "가"
  },
  {
    "value" : "나",
    "item" : "나"
  },
  {
    "value" : "다",
    "item" : "다"
  },
  {
    "value" : "라",
    "item" : "라"
  },
  {
    "value" : "마",
    "item" : "마"
  },
  {
    "value" : "사",
    "item" : "사"
  },
]

const turnlist = [
  {
    "value" : 1,
    "item" : 1
  },
  {
    "value" : 2,
    "item" : 2
  },
]

export default function Modify() {
  const [name,setName] = useState("");
  
  const onChange = e => {
    const text = e.target.value;
    setName(text.replace(/ /g,""));
  }

    return (
        <>
          <h1></h1>
          <div className={styles.container}>
            <Inputbox type="text" placeholder="고객 성함" onChange={onChange} />
            <DropInputbox list={typelist}/>
            <DropInputbox list={grouplist}/>
            <DropInputbox list={turnlist}/>
          </div>
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
  