"use client"

import styles from "@/styles/Create.module.scss"
import { Inputbox,PostInputbox,InputAreabox,DropInputbox,FileInputbox } from "@/components/Inputbox"
import { Button_Y } from "@/components/Button"

import { useForm } from "react-hook-form"
import { useState,useEffect } from "react"
import {createFile,newIdGenerate} from "@/utils/api"


const handleChange = e => {
  setPostdetail(e.target.value)
}

const banklist = [{
  "value" : "SHINHAN",
  "item" : "신한은행"
},
{
  "value" : "IBK",
  "item" : "IBK기업은행"
},
{
  "value" : "KOOKMIN",
  "item" : "KB국민은행"
},
{
  "value" : "SUHYUP",
  "item" : "수협은행"
},
]

const sintacklist = [{
  "value" : "MOGUNGHWA",
  "item" : "무궁화신탁"
},
{
  "value" : "KYOBO",
  "item" : "교보자산신탁"
},
{
  "value" : "DASIN",
  "item" : "대신자산신탁"
},
{
  "value" : "SINYOUNG",
  "item" : "신영부동산신탁"
}
]

const typeidlist = [{
  "value" : "1-1",
  "item" : "1-1차"
},
{
  "value" : "1-2",
  "item" : "1-2차"
},
{
  "value" : "1-3",
  "item" : "1-3차"
},
{
  "value" : "2차",
  "item" : "2차"
}
]

const typelist = [{
  "value" : "44",
  "item" : "44"
},
{
  "value" : "49",
  "item" : "49"
},
{
  "value" : "70",
  "item" : "70"
},
{
  "value" : "84A",
  "item" : "84A"
},
{
  "value" : "84B",
  "item" : "84B"
}
]

const grouplist = [{
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
  "value" : "바",
  "item" : "바"
},
]

const turnlist = [{
  "value" : "1",
  "item" : "1"
},
{
  "value" : "2",
  "item" : "2"
},
{
  "value" : "3",
  "item" : "3"
},
{
  "value" : "4",
  "item" : "4"
}
]

export default function Create() {
  const { register,handleSubmit} = useForm();
  
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
  };

    return (
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <h3>분양인 정보</h3>
            <div className={styles.content_container}>
              <span>관리번호 : {newid}</span> <h1></h1>
              <Inputbox type="text" placeholder="이름" register={register('userinfo.name')} />
              <Inputbox type="phone" placeholder="휴대폰 번호" register={register('userinfo.phone')} />
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
              <InputAreabox type="text" placeholder="총괄" register={register('ext.manage')} />
            </div>
            <h1></h1>
            <Button_Y>저장하기</Button_Y>
            <h1></h1>
          </form>
      </div>
      )
  }
  