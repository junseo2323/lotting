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
import { InputAreabox } from "@/components/Inputbox";
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
                  <span>예정</span>
                </div>
              </div>
              <div className={styles.unitbody}>
                <div className={styles.titlebody}>
                  <span className={styles.title}>출자금</span>
                </div>
                <div className={styles.contentbody}>
                  <span>예정</span>
                </div>
              </div>
              <div className={styles.unitbody}>
                <div className={styles.titlebody}>
                  <span className={styles.title}>지산A동 계약서</span>
                </div>
                <div className={styles.contentbody}>
                  <span>예정</span>
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
            <h3>부속서류</h3>
            <div className={styles.file_container}>
              {JSON.parse(userdata.fileinfo.A) ? (
                <DownloadButton userid={userid} filename="A">
                  인감증명서
                </DownloadButton>
              ) : (
                <>
                  <p>인감증명서</p>
                  <p>파일이 없습니다.</p>
                </>
              )}
              {JSON.parse(userdata.fileinfo.B) ? (
                <DownloadButton userid={userid} filename="B">
                  본인서명확인서
                </DownloadButton>
              ) : (
                <>
                  <p>본인서명확인서</p>
                  <p>파일이 없습니다.</p>
                </>
              )}
              {JSON.parse(userdata.fileinfo.C) ? (
                <DownloadButton userid={userid} filename="C">
                  신분증
                </DownloadButton>
              ) : (
                <>
                  <p>신분증</p>
                  <p>파일이 없습니다.</p>
                </>
              )}
              {JSON.parse(userdata.fileinfo.D) ? (
                <DownloadButton userid={userid} filename="D">
                  확약서
                </DownloadButton>
              ) : (
                <>
                  <p>확약서</p>
                  <p>파일이 없습니다.</p>
                </>
              )}
              {JSON.parse(userdata.fileinfo.E) ? (
                <DownloadButton userid={userid} filename="E">
                  창준위용
                </DownloadButton>
              ) : (
                <>
                  <p>상준위용</p>
                  <p>파일이 없습니다.</p>
                </>
              )}
              {JSON.parse(userdata.fileinfo.F) ? (
                <DownloadButton userid={userid} filename="F">
                  무상옵션
                </DownloadButton>
              ) : (
                <>
                  <p>무상옵션</p>
                  <p>파일이 없습니다.</p>
                </>
              )}
              {JSON.parse(userdata.fileinfo.G) ? (
                <DownloadButton userid={userid} filename="G">
                  선호도조사
                </DownloadButton>
              ) : (
                <>
                  <p>선호도조사</p>
                  <p>파일이 없습니다.</p>
                </>
              )}
              {JSON.parse(userdata.fileinfo.H) ? (
                <DownloadButton userid={userid} filename="H">
                  총회동의서
                </DownloadButton>
              ) : (
                <>
                  <p>총회동의서</p>
                  <p>파일이 없습니다.</p>
                </>
              )}
              {JSON.parse(userdata.fileinfo.I) ? (
                <DownloadButton userid={userid} filename="I">
                  사은품
                </DownloadButton>
              ) : (
                <>
                  <p>사은품</p>
                  <p>파일이 없습니다.</p>
                </>
              )}
            </div>
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
      console.log("lodding");
      return <></>;

    case "hasError":
      throw userselectordata.contents;
  }
}

export default withAuth(Search);
