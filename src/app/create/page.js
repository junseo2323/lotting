"use client"

import styles from "@/styles/Create.module.scss"
import Swal from 'sweetalert2'
import { Inputbox,PostInputbox,InputAreabox,DropInputbox,FileInputbox } from "@/components/Inputbox"
import { Button_Y } from "@/components/Button"

import { useForm } from "react-hook-form"
import { useState,useEffect } from "react"
import {createFile,newIdGenerate} from "@/utils/api"
import { useRouter } from 'next/navigation'

import { createUser } from "@/utils/api"

import { banklist,sintacklist,typeidlist,typelist,grouplist,turnlist } from "@/components/droplistdata"

const handleChange = e => {
  setPostdetail(e.target.value)
}

export default function Create() {
  const router = useRouter();

  const { register,handleSubmit,reset} = useForm();
  
  const [newid, setNewid] = useState("");

  useEffect(() => {
    const newId = newIdGenerate();
    const getData = () => {
      newId.then((dummyData) => {
        setNewid(dummyData);
      });
    };
    getData();
  }, []);

  const [isupload,setIsupload] = useState({'A':false, 'B':false})
  const [file,setFile] = useState({'A':"",'B':""})
  const [files, setFiles] = useState([])

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

  const onSubmit = (data) => {
    console.log(data);
    createFile(files);
    createUser(data);
    reset();
    Swal.fire({
      icon: 'success',
      title: 'Alert가 실행되었습니다.',
      text: '이곳은 내용이 나타나는 곳입니다.',
    });
    window.scrollTo(0,0);
  };

    return (
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <h3>분양인 정보</h3>
            <div className={styles.content_container}>
              <span>관리번호 : {newid}</span> <h1></h1>
              <Inputbox type="text" placeholder="이름" register={register('userinfo.name',{required: true})} />
              <Inputbox type="phone" placeholder="휴대폰 번호" register={register('userinfo.phone',{required: true})} />
              <Inputbox type="number" placeholder="주민번호 앞자리" register={register('userinfo.firstid')} />
              <Inputbox type="number" placeholder="주민번호 뒷자리" register={register('userinfo.secondid')} />
              <Inputbox type="email" placeholder="이메일" register={register('userinfo.email')}/>
              <Inputbox type="text" placeholder="가입경로" register={register('userinfo.come')} />
              <DropInputbox list={banklist} register={register('userinfo.bank')}/>
              <Inputbox type="text" placeholder="계좌번호" register={register('userinfo.bankid')} />
              <Inputbox type="text" placeholder="예금주" register={register('userinfo.bankwho')} />
              <DropInputbox list={sintacklist} register={register('userinfo.bankwhere')}/>
              <PostInputbox placeholder="우편물 수령주소" name="userinfo.getpost"/>
              <PostInputbox placeholder="주소지" name="userinfo.post"/>

            </div>    

            <h3>관리 정보</h3>
            <div className={styles.content_container}>
              <DropInputbox list={typeidlist} register={register('data.typeid')}/> 
              <DropInputbox list={typelist} name="type" register={register('data.type')}/>
              <DropInputbox list={grouplist} name="group" register={register('data.group')}/>
              <DropInputbox list={turnlist} name="turn" register={register('data.turn')}/>
              <Inputbox type="text" placeholder="가입차순"  register={register('data.submitturn')}/>
              <Inputbox type="date" date_placeholder="가입일자"  register={register('data.submitdate')} />
              <Inputbox type="date" date_placeholder="신탁사 제출일자" register={register('data.trustsubmitdate')} />
              <Inputbox type="number" placeholder="가입가" register={register('data.submitprice')}/>
              <Inputbox type="date" date_placeholder="예약금 납입일자" register={register('data.earnestdate')}/>
              <Inputbox type="number" placeholder="예약금" register={register('data.earnest')}/>
            </div> 

            <h3>부속서류</h3>
            <div className={styles.content_container}>
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
              <Inputbox type="text" placeholder="총괄" register={register('ext.manage')} />
              <Inputbox type="text" placeholder="본부" register={register('ext.managemain')} />
              <Inputbox type="text" placeholder="팀" register={register('ext.manageteam')} />
              <Inputbox type="text" placeholder="성명" register={register('ext.managename')} />
            </div>

            <h3>기타 정보</h3>
            <div className={styles.content_container}>
              <InputAreabox type="text" placeholder="기타" register={register('ext.manage')} />
            </div>
            <h1></h1>
            <Button_Y>저장하기</Button_Y>
            <h1></h1>
          </form>
      </div>
      )
  }
  