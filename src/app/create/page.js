"use client"

import styles from "@/styles/Create.module.scss"
import { Inputbox,PostInputbox,LongInputbox,DropInputbox,FileInputbox, Spanbox } from "@/components/Inputbox"
import { useForm } from "react-hook-form"
import { useState } from "react"

const handleChange = e => {
  setPostdetail(e.target.value)
}

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
              <Inputbox type="text" placeholder="이름" register={register('name')} />
              <Inputbox type="password" placeholder="주민번호" register={register('id')} />
              <Inputbox type="phone" placeholder="휴대폰 번호" register={register('phone')} />
              <Inputbox type="email" placeholder="이메일" register={register('email')}/>
              <Inputbox type="text" placeholder="가입경로" register={register('path')} />
              <h1></h1>
<<<<<<< HEAD
              <DropInputbox list={banklist} register={register('bank')}/>
              <Inputbox type="text" placeholder="계좌번호" register={register('bankid')} />
              <Inputbox type="text" placeholder="예금주" register={register('bankwho')} />
              <DropInputbox list={banklist} register={register('bankwhere')}/>
              <PostInputbox placeholder="우편물 수령주소" register={register('getpost')}/>
              <PostInputbox placeholder="주소지" register={register('post')}/>
=======
              {/* <DropInputbox list={banklist} register={register('')}/>
              <Inputbox type="text" placeholder="계좌번호" register={register('')} />
              <Inputbox type="text" placeholder="예금주" register={register('')} />
              <DropInputbox list={banklist} register={register('')}/> */}
              <PostInputbox placeholder="우편물 수령주소"/>
              <PostInputbox placeholder="주소지"/>
>>>>>>> 784c6343a50acee36f917ff1206fe8ffb0dc0925
            </div>    
            <input type="submit" value="초기화 전송" />

            <h3>관리 정보</h3>
            <div className={styles.content_container}>
<<<<<<< HEAD
              <DropInputbox list={banklist} register={register('typeid')}/> 
              <DropInputbox list={banklist} register={register('type')}/>
              <DropInputbox list={banklist} register={register('group')}/>
              <DropInputbox list={banklist} register={register('turn')}/>
              <Spanbox>임시동호 : </Spanbox>
              <Inputbox type="text" placeholder="가입차순"  register={register('submitturn')}/>
              <Inputbox type="date" date_placeholder="가입일자"  register={register('submitdate')} />
              <Inputbox type="date" date_placeholder="신탁사 제출일자" register={register('trustsubmitdate')} />
              <Inputbox type="number" placeholder="가입가" register={register('submitprice')}/>
              <Inputbox type="text" placeholder="가입경로" register={register('come')}/>
              <Inputbox type="date" date_placeholder="예약금 납입일자" register={register('earnestdate')}/>
              <Inputbox type="number" placeholder="예약금" register={register('earnest')}/>
=======
              {/* <DropInputbox list={banklist} register={register('')}/> 
              <DropInputbox list={banklist} register={register('')}/>
              <DropInputbox list={banklist} register={register('')}/>
              <DropInputbox list={banklist} register={register('')}/> */}
              <Spanbox>임시동호 : </Spanbox>
              {/* <Inputbox type="text" placeholder="가입차순" onChange={handleChange} register={register('')}/>

              <Inputbox type="date" date_placeholder="가입일자" onChange={handleChange}register={register('')} />
              <Inputbox type="date" date_placeholder="신탁사 제출일자" onChange={handleChange}register={register('')} />
              <Inputbox type="email" placeholder="이메일" onChange={handleChange} register={register('')}/>
              <Inputbox type="text" placeholder="가입경로" onChange={handleChange} register={register('')}/>
              <h1></h1>
              <Inputbox type="text" placeholder="계좌번호" onChange={handleChange} register={register('')}/>
              <Inputbox type="text" placeholder="예금주" onChange={handleChange} register={register('')}/>
              <DropInputbox list={banklist} register={register('')}/>
              <PostInputbox placeholder="우편물 수령주소" register={register('')}/>
              <PostInputbox placeholder="주소지" register={register('')}/> */}
>>>>>>> 784c6343a50acee36f917ff1206fe8ffb0dc0925
            </div> 
          </form>
      </div>
      )
  }
  