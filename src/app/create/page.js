"use client"

import styles from "@/styles/Create.module.scss"
import { Inputbox,PostInputbox,LongInputbox,DropInputbox,FileInputbox, Spanbox } from "@/components/Inputbox"
import { useForm } from "react-hook-form"
import { useState } from "react"

const banklist = [{
  "value" : "sinhan",
  "item" : "신한은행"
},
{
  "value" : "ibk",
  "item" : "IBK기업은행"
},
{
  "value" : "sinhan",
  "item" : "신한은행"
},
{
  "value" : "sinhan",
  "item" : "신한은행"
}
]

export default function Create() {
  const { register,watch,handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

    return (
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <h3>분양인 정보</h3>
            <div className={styles.content_container}>
              <span>관리번호 : 123456</span> <h1></h1>
              <Inputbox type="text" placeholder="이름" register={register('')} />
              <Inputbox type="password" placeholder="주민번호" register={register('')} />
              <Inputbox type="phone" placeholder="휴대폰 번호" register={register('')} />
              <Inputbox type="email" placeholder="이메일" register={register('')}/>
              <Inputbox type="text" placeholder="가입경로" register={register('')} />
              <h1></h1>
              <DropInputbox list={banklist} register={register('')}/>
              <Inputbox type="text" placeholder="계좌번호" register={register('')} />
              <Inputbox type="text" placeholder="예금주" register={register('')} />
              <DropInputbox list={banklist} register={register('')}/>
              <PostInputbox placeholder="우편물 수령주소"/>
              <PostInputbox placeholder="주소지"/>
            </div>    
            <input type="submit" value="초기화 전송" />

            <h3>관리 정보</h3>
            <div className={styles.content_container}>
              <DropInputbox list={banklist}/> 
              <DropInputbox list={banklist}/>
              <DropInputbox list={banklist}/>
              <DropInputbox list={banklist}/>
              <Spanbox>임시동호 : </Spanbox>
              <Inputbox type="text" placeholder="가입차순" onChange={handleChange} />

              <Inputbox type="date" date_placeholder="가입일자" onChange={handleChange} />
              <Inputbox type="date" date_placeholder="신탁사 제출일자" onChange={handleChange} />
              <Inputbox type="email" placeholder="이메일" onChange={handleChange} />
              <Inputbox type="text" placeholder="가입경로" onChange={handleChange} />
              <h1></h1>
              <Inputbox type="text" placeholder="계좌번호" onChange={handleChange} />
              <Inputbox type="text" placeholder="예금주" onChange={handleChange} />
              <DropInputbox list={banklist}/>
              <PostInputbox placeholder="우편물 수령주소"/>
              <PostInputbox placeholder="주소지"/>
            </div> 
          </form>
      </div>
      )
  }
  