'use client'
import Mininav from "@/components/Mininav"
import styles from "@/styles/Create.module.scss"
import { Inputbox,PostInputbox,InputAreabox,DropInputbox,FileInputbox, InputboxWithLabel } from "@/components/Inputbox"
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
              <div className={styles.Font}>관리번호 : {userdata.id}</div> <h1></h1>
              <div className={styles.InputboxField}>
              <div className={styles.InputFont}>이름</div>
                <Inputbox type="text" defaultValue={userdata.userinfo.name?userdata.userinfo.name:"이름"} register={register('userinfo.name')} />
              </div>  
              <div className={styles.InputboxField}>
              <div className={styles.InputFont}>휴대폰 번호</div>
                <Inputbox type="phone" defaultValue={userdata.userinfo.name?userdata.userinfo.phone:"휴대폰 번호"} register={register('userinfo.phone')} />
              </div>
              <div className={styles.InputboxField}>
              <div className={styles.InputFont}>주민번호 앞자리</div>
                <Inputbox type="number" defaultValue={userdata.userinfo.name?userdata.userinfo.firstid:"주민번호 앞자리"} register={register('userinfo.firstid')} />
              </div>
              <div className={styles.InputboxField}>
              <div className={styles.InputFont}>주민번호 뒷자리</div>
                <Inputbox type="number" defaultValue={userdata.userinfo.name?userdata.userinfo.secondid:"주민번호 뒷자리"} register={register('userinfo.secondid')} />
              </div>
              <div className={styles.InputboxField}>
              <div className={styles.InputFont}>이메일</div>
                <Inputbox type="email" defaultValue={userdata.userinfo.name?userdata.userinfo.email:"이메일"} register={register('userinfo.email')}/>
              </div>
              <div className={styles.InputboxField}>
              <div className={styles.InputFont}>가입경로</div>
                <Inputbox type="text" defaultValue={userdata.userinfo.name?userdata.userinfo.come:"가입경로"} register={register('userinfo.come')} />
              </div>
              <div className={styles.InputboxField}>
              <div className={styles.InputFont}>은행명</div>
                <DropInputbox list={banklist} defaultValue={userdata.userinfo.bank} register={register('userinfo.bank')}/>
              </div>
              <div className={styles.InputboxField}>
              <div className={styles.InputFont}>계좌번호</div>
                <Inputbox type="text" defaultValue={userdata.userinfo.name?userdata.userinfo.bankid:"계좌번호"} register={register('userinfo.bankid')} />
              </div>
              <div className={styles.InputboxField}>
              <div className={styles.InputFont}>예금주</div>
                <Inputbox type="text" defaultValue={userdata.userinfo.name?userdata.userinfo.bankwho:"예금주"} register={register('userinfo.bankwho')} />
              </div>
              <div className={styles.InputboxField}>
              <div className={styles.InputFont}>신탁사</div>
                <DropInputbox list={sintacklist} defaultValue={userdata.userinfo.bankwhere} register={register('userinfo.bankwhere')}/>
              </div>
              <div className={styles.InputboxField}>
              <div className={styles.InputFont}>우편물 수령주소</div>
                <textarea defaultValue={userdata.userinfo.post} {...register("userinfo.getpost")} />
              </div>
              <div className={styles.InputboxField}>
              <div className={styles.InputFont}>주소지</div>
                <textarea defaultValue={userdata.userinfo.getpost} {...register("userinfo.post")} />
              </div>
            </div>    

            <h3>관리 정보</h3>
            <div className={styles.content_container}>
            <div className={styles.InputboxField}>
            <div className={styles.InputFont}>가입차수</div>
              <DropInputbox list={typeidlist} defaultValue={userdata.data.submitturn} register={register('data.submitturn')}/> 
            </div>
            <div className={styles.InputboxField}>
            <div className={styles.InputFont}>타입</div>
              <DropInputbox list={typelist} defaultValue={userdata.data.type} name="type" register={register('data.type')}/>
            </div>
            <div className={styles.InputboxField}>
            <div className={styles.InputFont}>군</div>
              <DropInputbox list={grouplist} defaultValue={userdata.data.group} name="group" register={register('data.group')}/>
            </div>
            <div className={styles.InputboxField}>
            <div className={styles.InputFont}>순번</div>
              <DropInputbox list={turnlist} defaultValue={userdata.data.type} name="turn" register={register('data.turn')}/>
            </div>
            <div className={styles.InputboxField}>
            <div className={styles.InputFont}>가입일자</div>
              <Inputbox type="date" date_placeholder="가입일자"  register={register('data.submitdate')} />
              </div>
            <div className={styles.InputboxField}>
            <div className={styles.InputFont}>제출일자</div>
              <Inputbox type="date" date_placeholder="신탁사 제출일자" register={register('data.trustsubmitdate')} />
            </div>
            <div className={styles.InputboxField}>
            <div className={styles.InputFont}>가입가</div>
              <Inputbox type="number"defaultValue={userdata.data.submitprice} placeholder="가입가" register={register('data.submitprice')}/>
            </div>
            <div className={styles.InputboxField}>
            <div className={styles.InputFont}>납입일자</div>
              <Inputbox type="date" date_placeholder="예약금 납입일자" register={register('data.earnestdate')}/>
            </div>
            <div className={styles.InputboxField}>
            <div className={styles.InputFont}>예약금</div>
              <Inputbox type="number" defaultValue={userdata.data.earnest} placeholder="예약금" register={register('data.earnest')}/>
            </div>
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
            <div className={styles.InputboxField}>
            <div className={styles.InputFont}>총괄</div>
              <Inputbox type="text" defaultValue={userdata.ext.manage} placeholder="총괄" register={register('ext.manage')} />
            </div>
            <div className={styles.InputboxField}>
            <div className={styles.InputFont}>본부</div>
              <Inputbox type="text" defaultValue={userdata.ext.managemain} placeholder="본부" register={register('ext.managemain')} />
            </div>
            <div className={styles.InputboxField}>
            <div className={styles.InputFont}>팀</div>
              <Inputbox type="text" defaultValue={userdata.ext.manageteam} placeholder="팀" register={register('ext.manageteam')} />
            </div>
            <div className={styles.InputboxField}>
            <div className={styles.InputFont}>성명</div>
              <Inputbox type="text" defaultValue={userdata.ext.managename} placeholder="성명" register={register('ext.managename')} />
            </div>
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
  