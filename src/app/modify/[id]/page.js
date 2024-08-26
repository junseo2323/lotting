"use client";
import Mininav from "@/components/Mininav";
import styles from "@/styles/Create.module.scss";
import {
  Checkbox,
  Inputbox,
  PostInputbox,
  InputAreabox,
  DropInputbox,
  FileInputbox,
  InputboxWithLabel,
} from "@/components/Inputbox";
import { Button_Y } from "@/components/Button";
import { usePathname, useRouter } from "next/navigation";
import { useRecoilValueLoadable, useSetRecoilState } from "recoil";
import { userinfoSelector } from "@/utils/selector";
import { useState, useEffect } from "react";
import { useridState } from "@/utils/atom";
import { useForm } from "react-hook-form";
import {
  classificationlist,
  banklist,
  sintacklist,
  typeidlist,
  typelist,
  grouplist,
  turnlist,
} from "@/components/droplistdata";
import { updateUserinfo, createFile } from "@/utils/api"; // Import createFile
import withAuth from "@/utils/hoc/withAuth";

function Modify() {
  const pathname = usePathname();
  const splitpath = pathname.split("/"); //splitpath[3]
  const router = useRouter(); // Add the useRouter hook

  const { register, handleSubmit, setValue } = useForm();
  const onSubmit = async (data) => {
    try {
      data.fileinfo = isupload; // Add this line to include fileinfo in the data
      console.log("d" + data);
      console.log("d" + data.userinfo);
      console.log("d" + data.fileinfo);
      await createFile(files); // Upload files first
      await updateUserinfo(splitpath[2], data); // Then update user info
      alert("회원 정보가 성공적으로 업데이트되었습니다.");
      router.push("/modify/"); // 다시 검색 페이지로 이동
    } catch (error) {
      console.error("회원 정보 업데이트 중 오류 발생:", error);
      alert("회원 정보 업데이트 중 오류가 발생했습니다.");
    }
  };

  const setIdState = useSetRecoilState(useridState);
  useEffect(() => {
    setIdState(splitpath[2]);
  }, [splitpath, setIdState]);
  const userselectordata = useRecoilValueLoadable(userinfoSelector);

  const handleChange = (e) => {
    //file 핸들링
    const changename = e.target.className;
    const value = e.target.value;
    const originalfile = e.target.files[0];
    const extension = value.split(".")[1];

    const newid = splitpath[2]; // newid 변수를 정의하고 splitpath[2]로 설정

    setIsupload((prev) => ({ ...prev, [changename]: true }));
    setFile((prev) => ({ ...prev, [changename]: [value] }));
    const file = new File(
      [originalfile],
      `${newid}_${changename}.${extension}` // newid 변수를 사용
    );

    setFiles((prev) => [...prev, file]);
  };

  const [isupload, setIsupload] = useState({
    A: false,
    B: false,
    C: false,
    D: false,
    E: false,
    F: false,
    G: false,
    H: false,
    I: false,
  });
  const [file, setFile] = useState({
    A: "",
    B: "",
    C: "",
    D: "",
    E: "",
    F: "",
    G: "",
    H: "",
    I: "",
  });
  const [files, setFiles] = useState([]);

  useEffect(() => {
    if (userselectordata.state === "hasValue" && userselectordata.contents) {
      const userdata = userselectordata.contents;
      const initialFileState = {};
      const initialUploadState = {};

      for (const key in userdata.fileinfo) {
        if (userdata.fileinfo.hasOwnProperty(key)) {
          initialFileState[key] = userdata.fileinfo[key] ? "파일 존재" : "";
          initialUploadState[key] = !!userdata.fileinfo[key];
        }
      }

      setFile(initialFileState);
      setIsupload(initialUploadState);
    }
  }, [userselectordata.state, userselectordata.contents]);

  switch (userselectordata.state) {
    case "hasValue":
      const userdata = userselectordata.contents;
      if (!userdata)
        return (
          <>
            <h1>잘못된 접근입니다</h1>
          </>
        );
      else
        return (
          <>
            <h1></h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <h3>회원 정보</h3>
              <div className={styles.content_container}>
                <div className={styles.Font}>관리번호 : {userdata.id}</div>
                <h1></h1>
                <div>
                  <div className={styles.InputFont}>이름</div>
                  <Inputbox
                    type="text"
                    defaultValue={userdata.userinfo.name || "이름"}
                    register={register("userinfo.name")}
                  />
                </div>
                <div className={styles.InputboxField}>
                  <div className={styles.InputFont}>휴대폰 번호</div>
                  <Inputbox
                    type="phone"
                    defaultValue={userdata.userinfo.phone || "휴대폰 번호"}
                    register={register("userinfo.phone")}
                  />
                </div>
                <div className={styles.InputboxField}>
                  <div className={styles.InputFont}>주민번호 앞자리</div>
                  <Inputbox
                    type="number"
                    defaultValue={
                      userdata.userinfo.firstid || "주민번호 앞자리"
                    }
                    register={register("userinfo.firstid")}
                  />
                </div>
                <div className={styles.InputboxField}>
                  <div className={styles.InputFont}>주민번호 뒷자리</div>
                  <Inputbox
                    type="number"
                    defaultValue={
                      userdata.userinfo.secondid || "주민번호 뒷자리"
                    }
                    register={register("userinfo.secondid")}
                  />
                </div>
                <div className={styles.InputboxField}>
                  <div className={styles.InputFont}>이메일</div>
                  <Inputbox
                    type="email"
                    defaultValue={userdata.userinfo.email || "이메일"}
                    register={register("userinfo.email")}
                  />
                </div>
                <div className={styles.InputboxField}>
                  <div className={styles.InputFont}>분류</div>
                  <DropInputbox
                    list={classificationlist}
                    register={register("userinfo.classify", { required: true })}
                  />
                </div>
                <div className={styles.InputboxField}>
                  <div className={styles.InputFont}>가입경로</div>
                  <Inputbox
                    type="text"
                    defaultValue={userdata.userinfo.come || "가입경로"}
                    register={register("userinfo.come")}
                  />
                </div>
                <div className={styles.InputboxField}>
                  <div className={styles.InputFont}>은행명</div>
                  <DropInputbox
                    list={banklist}
                    defaultValue={userdata.userinfo.bank}
                    register={register("userinfo.bank")}
                  />
                </div>
                <div className={styles.InputboxField}>
                  <div className={styles.InputFont}>계좌번호</div>
                  <Inputbox
                    type="text"
                    defaultValue={userdata.userinfo.bankid || "계좌번호"}
                    register={register("userinfo.bankid")}
                  />
                </div>
                <div className={styles.InputboxField}>
                  <div className={styles.InputFont}>예금주</div>
                  <Inputbox
                    type="text"
                    defaultValue={userdata.userinfo.bankwho || "예금주"}
                    register={register("userinfo.bankwho")}
                  />
                </div>
            
                {/* <div className={styles.InputboxField}>
                  <div className={styles.InputFont}>법정주소</div>
                  <textarea
                    defaultValue={userdata.userinfo.post}
                    {...register("userinfo.post")}   ㄴ ㅏ 중에 데이터베이스 추가되면 활성화 *temp
                  />
                </div> */}
                <div className={styles.InputboxField}>
                  <div className={styles.InputFont}>법정주소</div>
                  <textarea
                    className={styles.InputTextarea}
                    defaultValue={userdata.userinfo.getpost}
                    {...register("userinfo.getpost")}
                  />
                </div>
                <div className={styles.InputboxField}>
                  <div className={styles.InputFont}>우편물 주소지</div>
                  <textarea
                    className={styles.InputTextarea}
                    defaultValue={userdata.userinfo.post}
                    {...register("userinfo.getpost")}
                  />
                </div>
              </div>

              <h3>관리 정보</h3>
  
              <div className={styles.mainbody}>
           <div className={styles.content_body}> 
              <div className={styles.content_body2}>
                <div className={styles.InputboxField}>
                  <div className={styles.InputFont}>가입차수</div>
                  <DropInputbox
                    list={typeidlist}
                    defaultValue={userdata.data.submitturn}
                    register={register("data.submitturn")}
                  />
                </div>
                <div className={styles.InputboxField}>
                  <div className={styles.InputFont}>타입</div>
                  <DropInputbox
                    list={typelist}
                    defaultValue={userdata.data.type}
                    name="type"
                    register={register("data.type")}
                  />
                </div>
            </div>
            <div className={styles.content_body2}>
              <div className={styles.InputboxField}>
                  <div className={styles.InputFont}>군</div>
                  <DropInputbox
                    list={grouplist}
                    defaultValue={userdata.data.group}
                    name="group"
                    register={register("data.group")}
                  />
                </div>
                <div className={styles.InputboxField}>
                  <div className={styles.InputFont}>순번</div>
                  <DropInputbox
                    list={turnlist}
                    defaultValue={userdata.data.turn}
                    name="turn"
                    register={register("data.turn")}
                  />
                </div>
            </div>
          </div>
          
          <div className={styles.content_body}>
            <div className={styles.content_body2}>
              <div className={styles.InputboxField}>
                  <div className={styles.InputFont}>가입일자</div>
                  <Inputbox
                    type="date"
                    defaultValue={userdata.data.submitdate.substr(0, 10)}
                    date_placeholder="가입일자"
                    register={register("data.submitdate")}
                  />
                </div>
            </div>
            <div className={styles.content_body2}>
            <div className={styles.InputboxField}>
                  <div className={styles.InputFont}>가입가</div>
                  <Inputbox
                    type="number"
                    defaultValue={userdata.data.submitprice}
                    placeholder="가입가"
                    register={register("data.submitprice")}
                  />
                </div>
            </div>
          </div>
          <div className={styles.content_body}>
            <div className={styles.content_body2}>
            <div className={styles.InputboxField}>
                  <div className={styles.InputFont}>납입일자</div>
                  <Inputbox
                    type="date"
                    defaultValue={userdata.data.earnestdate.substr(0, 10)}
                    date_placeholder="예약금 납입일자"
                    register={register("data.earnestdate")}
                  />
                </div>
            </div>
            <div className={styles.content_body2}>
            <div className={styles.InputboxField}>
                  <div className={styles.InputFont}>예약금</div>
                  <Inputbox
                    type="number"
                    defaultValue={userdata.data.earnest}
                    placeholder="예약금"
                    register={register("data.earnest")}
                  />
                </div>
            </div>
          </div>
          <div className={styles.content_body}>
            <div className={styles.content_body3}>
              <Checkbox
                label="7차 면제"
                name="exception"
                register={register("fileinfo.exception", { required: true })}
                defaultChecked={userdata.fileinfo.exception && JSON.parse(userdata.fileinfo.exception)}
              />
            </div>
            <div className={styles.content_body3}>
              <Checkbox
                label="출자금"
                name="investment"
                register={register("fileinfo.investment", { required: true })}
                defaultChecked={userdata.fileinfo.investment && JSON.parse(userdata.fileinfo.investment)}
              />
            </div>
            <div className={styles.content_body3}>
              <Checkbox
                label="자산A동 계약서"
                name="jscontract"
                register={register("fileinfo.jscontract", { required: true })}
                defaultChecked={userdata.fileinfo.jscontract && JSON.parse(userdata.fileinfo.jscontract)}
              />
            </div>
          </div>


        </div>

              {/*<h3>MGM</h3> *temp 이것도 나중에 추가
              <div className={styles.content_container}>
                <Inputbox
                  type="text"
                  placeholder="업체명"
                  register={register("mgm.companyname", { required: true })}
                />
                <Inputbox
                  type="text"
                  placeholder="이름"
                  register={register("mgm.name", { required: true })}
                />
                <Inputbox
                  type="text"
                  placeholder="기관"
                  register={register("mgm.organization", { required: true })}
                />
                <Inputbox
                  type="text"
                  placeholder="계좌"
                  register={register("mgm.accountnumber", { required: true })}
                />
              </div>*/}
              <h3>부속서류</h3>
              <div className={styles.content_container}>
              <Checkbox
                label="인감증명서"
                name="A"
                defaultChecked={JSON.parse(userdata.fileinfo.A)}
                register={register("fileinfo.A", { required: true })}
              />
              <Checkbox
                label="본인서명확인서"
                name="B"
                defaultChecked={JSON.parse(userdata.fileinfo.B)}
                register={register("fileinfo.B", { required: true })}
              />
              <Checkbox
                label="확약서"
                name="D"
                defaultChecked={JSON.parse(userdata.fileinfo.D)}
                register={register("fileinfo.D", { required: true })}
              />
              <Checkbox
                label="신분증"
                name="C"
                defaultChecked={JSON.parse(userdata.fileinfo.C)}
                register={register("fileinfo.C", { required: true })}
              />
              <Checkbox
                label="무상옵션"
                name="F"
                defaultChecked={JSON.parse(userdata.fileinfo.F)}
                register={register("fileinfo.F", { required: true })}
              />
              <Checkbox
                label="창준위용"
                name="E"
                defaultChecked={JSON.parse(userdata.fileinfo.E)}
                register={register("fileinfo.E", { required: true })}
              />
              <Checkbox
                label="총회동의서"
                name="H"
                defaultChecked={JSON.parse(userdata.fileinfo.H)}
                register={register("fileinfo.H", { required: true })}
              />
              <Checkbox
                label="선호도조사"
                name="G"
                defaultChecked={JSON.parse(userdata.fileinfo.G)}
                register={register("fileinfo.G", { required: true })}
              />
              <Checkbox
                label="사은품"
                name="I"
                defaultChecked={JSON.parse(userdata.fileinfo.I)}
                register={register("fileinfo.I", { required: true })}
              />

            <span></span>
          <span></span>
          <span></span>
          <span>파일업로드</span>
          <span></span>
          <FileInputbox
            className="H"
            name="fileH"
            value={file["H"]}
            isupload={isupload["H"]}
            handleChange={handleChange}
          />
              </div>

              <h3>담당자 정보</h3>
              <div className={styles.content_container}>
                <div className={styles.InputboxField}>
                  <div className={styles.InputFont}>총괄</div>
                  <Inputbox
                    type="text"
                    defaultValue={userdata.ext.manage}
                    placeholder="총괄"
                    register={register("ext.manage")}
                  />
                </div>
                <div className={styles.InputboxField}>
                  <div className={styles.InputFont}>본부</div>
                  <Inputbox
                    type="text"
                    defaultValue={userdata.ext.managemain}
                    placeholder="본부"
                    register={register("ext.managemain")}
                  />
                </div>
                <div className={styles.InputboxField}>
                  <div className={styles.InputFont}>팀</div>
                  <Inputbox
                    type="text"
                    defaultValue={userdata.ext.manageteam}
                    placeholder="팀"
                    register={register("ext.manageteam")}
                  />
                </div>
                <div className={styles.InputboxField}>
                  <div className={styles.InputFont}>성명</div>
                  <Inputbox
                    type="text"
                    defaultValue={userdata.ext.managename}
                    placeholder="성명"
                    register={register("ext.managename")}
                  />
                </div>
              </div>

              <h3>기타 정보</h3>
              <div className={styles.content_container}>
                <InputAreabox
                  type="text"
                  placeholder="기타"
                  defaultValue={userdata.ext.ext}
                  register={register("ext.ext")}
                />
              </div>
              <h1></h1>
              <Button_Y>저장하기</Button_Y>
            </form>
          </>
        );

    case "loading":
      console.log("loading");
      return <div>Loading...</div>;

    case "hasError":
      throw userselectordata.contents;
  }
}

export default withAuth(Modify);
