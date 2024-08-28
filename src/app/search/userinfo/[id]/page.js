"use client";
import Mininav from "@/components/Mininav";
import styles from "@/styles/Userinfo.module.scss";
import { usePathname } from "next/navigation";
import { useRecoilValueLoadable, useSetRecoilState } from "recoil";
import { userinfoSelector } from "@/utils/selector";
import { useState } from "react";
import { useridState } from "@/utils/atom";
import { DownloadButton, Button } from "@/components/Button";
import Link from "next/link";
import { Inputbox, InputAreabox } from "@/components/Inputbox";
import withAuth from "@/utils/hoc/withAuth";

function Search() {
  const pathname = usePathname();
  const splitpath = pathname.split("/"); //splitpath[3]
  const userid = splitpath[3];
  const setIdState = useSetRecoilState(useridState);
  useState(() => {
    setIdState(userid);
  });
  const userselectordata = useRecoilValueLoadable(userinfoSelector);

  const sortMapping = {
    1: "정계약",
    c: "청약",
    j: "정계약",
    r: "수정",
    x: "해지",
    x1: "해지",
    p: "업대",
    p1: "업대",
    t: "창준위",
    t1: "창준위",
    g: "지주",
  };

  switch (userselectordata.state) {
    case "hasValue":
      const userdata = userselectordata.contents;
      console.log(userdata);
      if (userdata === undefined)
        return (
          <>
            <h1>잘못된 접근입니다</h1>
          </>
        );
      else
        return (
          <>
            <h3>회원정보</h3>
            <div className={styles.rowcontainer}>
              <div className={styles.unitbody}>
                <div className={styles.titlebody}>
                  <span className={styles.title}>관리번호</span>
                </div>
                <div className={styles.contentbody}>
                  <span>{userdata.id}</span>
                </div>
              </div>
              <div className={styles.unitbody}>
                <div className={styles.titlebody}>
                  <span className={styles.title}>성명</span>
                </div>
                <div className={styles.contentbody}>
                  <span>{userdata.userinfo.name}</span>
                </div>
              </div>
              <div className={styles.unitbody}>
                <div className={styles.titlebody}>
                  <span className={styles.title}>주민번호</span>
                </div>
                <div className={styles.contentbody}>
                  <span>
                    {userdata.userinfo.firstid}-{userdata.userinfo.secondid}
                  </span>
                </div>
              </div>
              <div className={styles.unitbody}>
                <div className={styles.titlebody}>
                  <span className={styles.title}>이메일</span>
                </div>
                <div className={styles.contentbody}>
                  <span>{userdata.userinfo.email}</span>
                </div>
              </div>
              <div className={styles.unitbody}>
                <div className={styles.titlebody}>
                  <span className={styles.title}>휴대전화</span>
                </div>
                <div className={styles.contentbody}>
                  <span>{userdata.userinfo.phone}</span>
                </div>
              </div>
            </div>
            <div className={styles.rowcontainer}>
              <div className={styles.unitbody}>
                <div className={styles.titlebody}>
                  <span className={styles.title}>타입</span>
                </div>
                <div className={styles.contentbody}>
                  <span>{userdata.data.type}</span>
                </div>
              </div>
              <div className={styles.unitbody}>
                <div className={styles.titlebody}>
                  <span className={styles.title}>군</span>
                </div>
                <div className={styles.contentbody}>
                  <span>{userdata.data.group}</span>
                </div>
              </div>
              <div className={styles.unitbody}>
                <div className={styles.titlebody}>
                  <span className={styles.title}>순번</span>
                </div>
                <div className={styles.contentbody}>
                  <span>{userdata.data.turn}</span>
                </div>
              </div>
              <div className={styles.unitbody}>
                <div className={styles.titlebody}>
                  <span className={styles.title}>가입차순</span>
                </div>
                <div className={styles.contentbody}>
                  <span>{userdata.data.submitturn}</span>
                </div>
              </div>
              <div className={styles.unitbody}>
                <div className={styles.titlebody}>
                  <span className={styles.title}>분류</span>
                </div>
                <div className={styles.contentbody}>
                  <span>
                    {sortMapping[userdata.userinfo.sort] || "알 수 없음"}
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.rowcontainer}>
              <div className={styles.unitbody}>
                <div className={styles.titlebody}>
                  <span className={styles.title}>가입일자</span>
                </div>
                <div className={styles.contentbody}>
                  <span>{userdata.data.submitdate.slice(0, 10)}</span>
                </div>
              </div>
              <div className={styles.unitbody}>
                <div className={styles.titlebody}>
                  <span className={styles.title}>가입가</span>
                </div>
                <div className={styles.contentbody}>
                  <span>
                    {userdata.data.submitprice
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </span>
                </div>
              </div>
              <div className={styles.unitbody}>
                <div className={styles.titlebody}>
                  <span className={styles.title}>예약금 납입일자</span>
                </div>
                <div className={styles.contentbody}>
                  <span>{userdata.data.earnestdate.slice(0, 10)}</span>
                </div>
              </div>
              <div className={styles.unitbody}>
                <div className={styles.titlebody}>
                  <span className={styles.title}>예약금</span>
                </div>
                <div className={styles.contentbody}>
                  <span>
                    {userdata.data.earnest
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.rowcontainer}>
              <div className={styles.postunitbody}>
                <div className={styles.posttitlebody}>
                  <span className={styles.title}>법정주소</span>
                </div>
                <div className={styles.postcontentbody}>
                  <span>{userdata.userinfo.getpost}</span>
                </div>
              </div>
              <div className={styles.postunitbody}>
                <div className={styles.posttitlebody}>
                  <span className={styles.title}>우편물 수령주소</span>
                </div>
                <div className={styles.postcontentbody}>
                  <span>{userdata.userinfo.post}</span>
                </div>
              </div>
            </div>
            <div className={styles.rowcontainer}>
              <div className={styles.unitbody}>
                <div className={styles.titlebody}>
                  <span className={styles.title}>은행명</span>
                </div>
                <div className={styles.contentbody}>
                  <span>{userdata.userinfo.bank}</span>
                </div>
              </div>
              <div className={styles.unitbody}>
                <div className={styles.titlebody}>
                  <span className={styles.title}>계좌번호</span>
                </div>
                <div className={styles.contentbody}>
                  <span>{userdata.userinfo.bankid}</span>
                </div>
              </div>
              <div className={styles.unitbody}>
                <div className={styles.titlebody}>
                  <span className={styles.title}>예금주</span>
                </div>
                <div className={styles.contentbody}>
                  <span>{userdata.userinfo.bankwho}</span>
                </div>
              </div>
            </div>
            <div className={styles.rowcontainer}>
              <div className={styles.unitbody}>
                <div className={styles.titlebody}>
                  <span className={styles.title}>7차 면제</span>
                </div>
                <div className={styles.contentbody}>
                  {userdata.fileinfo.exception &&
                  JSON.parse(userdata.fileinfo.exception) ? (
                    <span>✔️</span>
                  ) : (
                    <span>❌</span>
                  )}
                </div>
              </div>

              <div className={styles.unitbody}>
                <div className={styles.titlebody}>
                  <span className={styles.title}>출자금</span>
                </div>
                <div className={styles.contentbody}>
                  {userdata.fileinfo.investment &&
                  JSON.parse(userdata.fileinfo.investment) ? (
                    <span>✔️</span>
                  ) : (
                    <span>❌</span>
                  )}
                </div>
              </div>

              <div className={styles.unitbody}>
                <div className={styles.titlebody}>
                  <span className={styles.title}>지산A동 계약서</span>
                </div>
                <div className={styles.contentbody}>
                  {userdata.fileinfo.jscontract &&
                  JSON.parse(userdata.fileinfo.jscontract) ? (
                    <span>✔️</span>
                  ) : (
                    <span>❌</span>
                  )}
                </div>
              </div>
            </div>

            <div className={styles.rowcontainer}>
              <div className={styles.unitbody}>
                <div className={styles.titlebody}>
                  <span className={styles.title}>총괄</span>
                </div>
                <div className={styles.contentbody}>
                  <span>{userdata.ext.manage}</span>
                </div>
              </div>
              <div className={styles.unitbody}>
                <div className={styles.titlebody}>
                  <span className={styles.title}>본부</span>
                </div>
                <div className={styles.contentbody}>
                  <span>{userdata.ext.managemain}</span>
                </div>
              </div>
              <div className={styles.unitbody}>
                <div className={styles.titlebody}>
                  <span className={styles.title}>팀</span>
                </div>
                <div className={styles.contentbody}>
                  <span>{userdata.ext.manageteam}</span>
                </div>
              </div>
              <div className={styles.unitbody}>
                <div className={styles.titlebody}>
                  <span className={styles.title}>담당자</span>
                </div>
                <div className={styles.contentbody}>
                  <span>{userdata.ext.managename}</span>
                </div>
              </div>
            </div>
            <h1></h1>
            <hr />

            <h3>MGM</h3>
            <div className={styles.rowcontainer}>
              <div className={styles.unitbody}>
                <div className={styles.titlebody}>
                  <span className={styles.title}>업체명</span>
                </div>
                <div className={styles.contentbody}>
                  {/* <span>{userdata.mgm.companyname}</span> */}
                </div>
              </div>
              <div className={styles.unitbody}>
                <div className={styles.titlebody}>
                  <span className={styles.title}>이름</span>
                </div>
                <div className={styles.contentbody}>
                  {/* <span>{userdata.mgm.name}</span> */}
                </div>
              </div>
              <div className={styles.unitbody}>
                <div className={styles.titlebody}>
                  <span className={styles.title}>기관</span>
                </div>
                <div className={styles.contentbody}>
                  {/* <span>{userdata.mgm.organization}</span> */}
                </div>
              </div>
              <div className={styles.unitbody}>
                <div className={styles.titlebody}>
                  <span className={styles.title}>계좌</span>
                </div>
                <div className={styles.contentbody}>
                  {/* <span>{userdata.mgm.accountnumber}</span> */}
                </div>
              </div>
            </div>
            <h1></h1>
            <hr />

            <h3>부속서류</h3>
            <div className={styles.file_container}>
              {userdata.fileinfo &&
              userdata.fileinfo.upload &&
              JSON.parse(userdata.fileinfo.upload) ? (
                <DownloadButton userid={userid} filename="upload">
                  부속 서류
                </DownloadButton>
              ) : (
                <>
                  <div className={styles.A}>
                    <p>부속 서류</p>
                    <p>파일이 없습니다.</p>
                  </div>
                </>
              )}

              <div className={styles.file_status}>
                <ul>
                  <li>
                    <span>인감증명서 </span>
                    {JSON.parse(userdata.fileinfo.A) ? (
                      <span>✔️</span>
                    ) : (
                      <span>❌</span>
                    )}
                  </li>
                  <li>
                    <span>본인서명확인서 </span>
                    {JSON.parse(userdata.fileinfo.B) ? (
                      <span>✔️</span>
                    ) : (
                      <span>❌</span>
                    )}
                  </li>
                  <li>
                    <span>신분증 </span>
                    {JSON.parse(userdata.fileinfo.C) ? (
                      <span>✔️</span>
                    ) : (
                      <span>❌</span>
                    )}
                  </li>
                  <li>
                    <span>확약서 </span>
                    {JSON.parse(userdata.fileinfo.D) ? (
                      <span>✔️</span>
                    ) : (
                      <span>❌</span>
                    )}
                  </li>
                </ul>
              </div>
              <div className={styles.file_status}>
                <ul>
                  <li>
                    <span>창준위용 </span>
                    {JSON.parse(userdata.fileinfo.E) ? (
                      <span>✔️</span>
                    ) : (
                      <span>❌</span>
                    )}
                  </li>
                  <li>
                    <span>무상옵션 </span>
                    {JSON.parse(userdata.fileinfo.F) ? (
                      <span>✔️</span>
                    ) : (
                      <span>❌</span>
                    )}
                  </li>
                  <li>
                    <span>선호도조사 </span>
                    {JSON.parse(userdata.fileinfo.G) ? (
                      <span>✔️</span>
                    ) : (
                      <span>❌</span>
                    )}
                  </li>
                  <li>
                    <span>총회동의서 </span>
                    {JSON.parse(userdata.fileinfo.H) ? (
                      <span>✔️</span>
                    ) : (
                      <span>❌</span>
                    )}
                  </li>
                  <li>
                    <span>사은품 </span>
                    {JSON.parse(userdata.fileinfo.I) ? (
                      <span>✔️</span>
                    ) : (
                      <span>❌</span>
                    )}
                  </li>
                </ul>
              </div>
            </div>
            <h1></h1>
            <hr />
            <h3>납입금 관리</h3>
            <div className={styles.linkbutton}>
              <Link href={"/inputmoney/userinfo/" + splitpath[3]}>
                <Button>
                  <h3>바로가기</h3>
                </Button>
              </Link>
            </div>
            <hr />
            <h3>기타 정보</h3>
            <div>
              <InputAreabox value={userdata.ext.ext} />
            </div>
          </>
        );

    case "loading":
      console.log("loading");
      return <></>;

    case "hasError":
      throw userselectordata.contents;
  }
}

export default withAuth(Search);
