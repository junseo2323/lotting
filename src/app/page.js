"use client"

import { Inputbox,PostInputbox,LongInputbox,DropInputbox,FileInputbox } from "@/components/Inputbox"
import styles from "@/app/Home.module.scss"

export default function Home() {
  const handleChange = e => {
    console.log(e.target.value)
  }

  return (
      <div >
        <h1>123</h1>
        <div className={styles.container}>
          <PostInputbox />
          <FileInputbox />
          <Inputbox type="text" placeholder="이름" onChange={handleChange} />
          <Inputbox type="date" placeholder="날짜" />
          <Inputbox />
          <Inputbox />
          <LongInputbox />
          <Inputbox />
          <DropInputbox />
          <Inputbox />
        </div>    
      </div>
    )
}
