'use client'
import Mininav from "@/components/Mininav"
import styles from "@/styles/Create.module.scss"
import { Inputbox,PostInputbox,InputAreabox,DropInputbox,FileInputbox } from "@/components/Inputbox"
import { Button_Y } from "@/components/Button"

import { usePathname } from "next/navigation";
import { useRecoilValueLoadable, useSetRecoilState } from "recoil";
import { userinfoSelector } from "@/utils/selector";
import { useState } from "react";
import { useridState } from "@/utils/atom";
import { useForm } from "react-hook-form"



import { banklist,sintacklist,typeidlist,typelist,grouplist,turnlist } from "@/components/droplistdata"


export default function Modify() {
  const pathname = usePathname();
  const splitpath = pathname.split('/'); //splitpath[3]

  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => console.log(data)

  const setIdState = useSetRecoilState(useridState);
  useState(()=>{setIdState(splitpath[2])});
  const userselectordata = useRecoilValueLoadable(userinfoSelector);

  const handleChange = e => { //file 핸들링
    const changename = e.target.className;
    const value = e.target.value;
    const originalfile = e.target.files[0];
    const extension = value.split('.')[1];

    setIsupload(prev => ({...prev, [changename]:true}))
    setFile(prev=>({...prev,[changename]:[value]}))
    const file = new File([originalfile], [newid]+"_"+[e.target.className]+"."+extension);
    
    setFiles(prev => [...prev, file])
  }


  const [isupload,setIsupload] = useState({'A':false, 'B':false})
  const [file,setFile] = useState({'A':"",'B':""})
  const [files, setFiles] = useState([])


  switch(userselectordata.state){
    case 'hasValue':
      const userdata = userselectordata.contents;
      if(userdata===undefined) return <><h1>잘못된 접근입니다</h1></>
      else return (
        <>
        <h1></h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <h3>분양인 정보</h3>
            <div className={styles.content_container}>
              <span>관리번호 : {userdata.id}</span> <h1></h1> 
              <Inputbox type="text" defaultValue={userdata.userinfo.name?userdata.userinfo.name:"이름"} register={register('userinfo.name')}  />
              <Inputbox type="phone" defaultValue={userdata.userinfo.name?userdata.userinfo.phone:"휴대폰 번호"} register={register('userinfo.phone')} />
              <Inputbox type="number" defaultValue={userdata.userinfo.name?userdata.userinfo.firstid:"주민번호 앞자리"} register={register('userinfo.firstid')} />
              <Inputbox type="number" defaultValue={userdata.userinfo.name?userdata.userinfo.secondid:"주민번호 뒷자리"} register={register('userinfo.secondid')} />
              <Inputbox type="email" defaultValue={userdata.userinfo.name?userdata.userinfo.email:"이메일"} register={register('userinfo.email')}/>
              <Inputbox type="text" defaultValue={userdata.userinfo.name?userdata.userinfo.come:"가입경로"} register={register('userinfo.come')} />
              <DropInputbox list={banklist} defaultValue={userdata.userinfo.bank} register={register('userinfo.bank')}/>
              <Inputbox type="text" defaultValue={userdata.userinfo.name?userdata.userinfo.bankid:"계좌번호"} register={register('userinfo.bankid')} />
              <Inputbox type="text" defaultValue={userdata.userinfo.name?userdata.userinfo.bankwho:"예금주"} register={register('userinfo.bankwho')} />
              <DropInputbox list={sintacklist} defaultValue={userdata.userinfo.bankwhere} register={register('userinfo.bankwhere')}/>
              <span>우편물 수령주소</span> 
              <textarea defaultValue={userdata.userinfo.post} {...register("userinfo.getpost")} />
              <span>주소지</span>
              <textarea defaultValue={userdata.userinfo.getpost} {...register("userinfo.post")} />

            </div>    

            <h3>관리 정보</h3>
            <div className={styles.content_container}>
              <DropInputbox list={typeidlist} defaultValue={userdata.data.submitturn} register={register('data.submitturn')}/> 
              <DropInputbox list={typelist} defaultValue={userdata.data.type} name="type" register={register('data.type')}/>
              <DropInputbox list={grouplist} defaultValue={userdata.data.group} name="group" register={register('data.group')}/>
              <DropInputbox list={turnlist} defaultValue={userdata.data.type} name="turn" register={register('data.turn')}/>
              <Inputbox type="date" date_placeholder="가입일자"  register={register('data.submitdate')} />
              <Inputbox type="date" date_placeholder="신탁사 제출일자" register={register('data.trustsubmitdate')} />
              <Inputbox type="number"defaultValue={userdata.data.submitprice} placeholder="가입가" register={register('data.submitprice')}/>
              <Inputbox type="date" date_placeholder="예약금 납입일자" register={register('data.earnestdate')}/>
              <Inputbox type="number" defaultValue={userdata.data.earnest} placeholder="예약금" register={register('data.earnest')}/>
            </div> 

            <h3>부속서류</h3>
            <div className={styles.content_container}>
              수정예정
              <span>인감증명서</span>
              <span>본인서명확인서</span>
              <FileInputbox className='A' name="fileA" value={file['A']} isupload={isupload['A']} handleChange={handleChange}/>
              <FileInputbox className='B' name="fileB" value={file['B']} isupload={isupload['B']} handleChange={handleChange}/>
              <span>신분증</span>
              <span>확약서</span>
              <FileInputbox className='C' name="fileC" value={file['C']} isupload={isupload['C']} handleChange={handleChange}/>
              <FileInputbox className='D' name="fileD" value={file['D']} isupload={isupload['D']} handleChange={handleChange}/>
              <span>상준위용</span>
              <span>무상옵션</span>
              <FileInputbox className='E' name="fileE" value={file['E']} isupload={isupload['E']} handleChange={handleChange}/>
              <FileInputbox className='F' name="fileF" value={file['F']} isupload={isupload['F']} handleChange={handleChange}/>
              <span>선호도조사</span>
              <span>총회동의서</span>
              <FileInputbox className='G' name="fileG" value={file['G']} isupload={isupload['G']} handleChange={handleChange}/>
              <FileInputbox className='H' name="fileH" value={file['H']} isupload={isupload['H']} handleChange={handleChange}/>
              <span>사은품</span>
              <span></span>
              <FileInputbox className='I' name="fileI" value={file['I']} isupload={isupload['I']} handleChange={handleChange}/>
              <span></span>
            </div>

            <h3>담당자 정보</h3>
            <div className={styles.content_container}>
              <Inputbox type="text" defaultValue={userdata.ext.manage} placeholder="총괄" register={register('ext.manage')} />
              <Inputbox type="text" defaultValue={userdata.ext.managemain} placeholder="본부" register={register('ext.managemain')} />
              <Inputbox type="text" defaultValue={userdata.ext.manageteam} placeholder="팀" register={register('ext.manageteam')} />
              <Inputbox type="text" defaultValue={userdata.ext.managename} placeholder="성명" register={register('ext.managename')} />
            </div>

            <h3>기타 정보</h3>
            <div className={styles.content_container}>
              <InputAreabox type="text" placeholder="기타" defaultValue={userdata.ext.ext} register={register('ext.ext')} />
            </div>
            <h1></h1>
            <Button_Y>저장하기</Button_Y>
          </form>
        </>
    )

    case 'loading':
      console.log("lodding");
      return <></>
    
    case 'hasError':
      throw userselectordata.contents;
  }

  
  }
  