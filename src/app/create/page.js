"use client"

import styles from "@/styles/Create.module.scss"
//import styles from "@/app/Home.module.scss"
import Mininav from "@/components/Mininav"

import { Inputbox,PostInputbox,LongInputbox,DropInputbox,FileInputbox } from "@/components/Inputbox"

const testlist = [{
  "value" : "여기에 벨류를 입력하세요",
  "item" : "여기에 아이템을 입력하세요"
}]

export default function Create() {
  const handleChange = e => {
    console.log(e.target.value)
  }

    return (
      <div>
        <h1></h1>
        <Mininav />
        <div className={styles.create_container}>
        <Inputbox type="text" placeholder="이름" onChange={handleChange} />
        <Inputbox type="password" placeholder="주민번호" onChange={handleChange} />
        <Inputbox type="phone" placeholder="휴대폰 번호" onChange={handleChange} />
        <Inputbox type="email" placeholder="이메일" onChange={handleChange} />
        <Inputbox type="text" placeholder="가입경로" onChange={handleChange} />
        <h1></h1>
        <DropInputbox list={testlist}/>
        <Inputbox type="text" placeholder="계좌번호" onChange={handleChange} />
        <Inputbox type="text" placeholder="예금주" onChange={handleChange} />
        <DropInputbox list={testlist}/>
        <PostInputbox placeholder="우편물 수령주소"/>
        <PostInputbox placeholder="주소지"/>
        </div>    
      </div>
      )
  }
  