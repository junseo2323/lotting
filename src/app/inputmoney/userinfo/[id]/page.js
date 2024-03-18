"use client"

import styles from "@/styles/Inputmoney.module.scss";
import { useRecoilValueLoadable, useSetRecoilState } from "recoil";
import { userinfoSelector, namesearchSelector } from "@/utils/selector";
import { useState, useEffect } from "react";
import { useridState } from "@/utils/atom";
import { SearchButton, ModifyButton } from "@/components/Button";
import { BsBagDash } from "react-icons/bs";
import { BsDatabase } from "react-icons/bs";
import { CgSearch } from "react-icons/cg";
import Link from "next/link";
import { searchFinchasu } from '@/utils/api';
import { searchPrechasu } from '@/utils/api';
import { usePathname, useRouter } from 'next/navigation';

const ChasuPreBody = ({userId}) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData(); // 데이터 가져오는 함수 호출
  }, []);

  // 데이터를 가져오는 함수
  const fetchData = async () => {
    try {
      const data = await searchPrechasu(userId); // searchFinchasu 함수를 통해 데이터 가져오기
      setData(data);
      console.log(data.length);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  if (!data) {
    return <></>; // 데이터가 없을 때는 아무것도 렌더링하지 않음
  }
  return (
      <div className={styles.ContentBody}>
        <div className={styles.ContentBodyTitle}>
          <div className={styles.CBTIcon}>
            <div className={styles.Icon}>
              <BsBagDash style={{ width: '100%', height: '100%' }} />
            </div>
          </div>
          <div className={styles.CBTText}>
            <div className={styles.CBTCha}>
              <div className={styles.CBTChaFont}>{data.chasu}차 납부</div>
            </div>
            <div className={styles.CBTDate}>
              <div className={styles.CBTDateFont}>{data.duedate}</div> {/* 납부 날짜 출력 */}
            </div>
          </div>
        </div>
        <div className={styles.CBBottonBody}>
          <ModifyButton>
            <Link href={`/inputmoney/payinfo/${data.id}/${data.chasu}`}>
              <div className={styles.CBBottonFont}>납부수정</div>
            </Link>
          </ModifyButton>
          <ModifyButton>
            <div className={styles.CBBottonFont}>초기화</div>
          </ModifyButton>
        </div>
        <div className={styles.CBSum}>
          <div className={styles.CBMoneyImg}>
            <div className={styles.Icon2}>
              <BsDatabase style={{ width: '100%', height: '100%' }} />
            </div>
          </div>
          <div className={styles.CBSumText}>{data.chasu}차 총액</div>
          <div className={styles.CBSumNum}>{data.sumprice} ₩</div>
        </div>
      </div>
  );
};

export default function Inputmoney() {
  const pathname = usePathname();
  const splitpath = pathname.split('/'); //splitpath[3]
  
  const setIdState = useSetRecoilState(useridState);
  const [userData, setUserData] = useState(null);
  useState(() => { setIdState(splitpath[3]) });
  const userselectordata = useRecoilValueLoadable(userinfoSelector);

  useEffect(() => {
    if (userselectordata.state === 'hasValue') {
      const userdata = userselectordata.contents;
      if (userdata === undefined) {
        console.log('잘못된 접근입니다');
      } else {
        setUserData(userdata);
      }
    }
  }, [userselectordata]);


  return (
    <>
      {userselectordata.state === 'hasValue' && userData && (
        <div className={styles.Container}>
          <div className={styles.Mainbody}>
            <div className={styles.SearchBody}>
              {/* 사용자 정보 표시 부분 */}
              <div className={styles.SearchNum}>
                <div className={styles.SearchFont1}>관리번호 :</div>
                <div className={styles.SearchFont2}>{userData.id}</div>
              </div>
              <div className={styles.SearchName}>
                <div className={styles.SearchFont1}>성함 :</div>
                <div className={styles.SearchFont2}>{userData.userinfo.name}</div>
              </div>
              <div className={styles.SearchCha}>
                <div className={styles.SearchFont1}>가입차순 :</div>
                <div className={styles.SearchFont2}>{userData.registerturn}</div>
              </div>
              <div className={styles.SearchType}>
                <div className={styles.SearchFont1}>가입타입 :</div>
                <div className={styles.SearchFont2}>{userData.type}</div>
              </div>
              {/* 납부 정보 표시 부분 */}
              <div className={styles.SearchChasu}>
                <div className={styles.SearchFont1}>차순 :</div>
                <div className={styles.SearchFont2}>{userData.chasu}</div>
              </div>
              <div className={styles.SearchPrice}>
                <div className={styles.SearchFont1}>Price :</div>
                <div className={styles.SearchFont2}>{userData.price}</div>
              </div>
              <div className={styles.SearchPrice2}>
                <div className={styles.SearchFont1}>Price2 :</div>
                <div className={styles.SearchFont2}>{userData.price2}</div>
              </div>
              <div className={styles.SearchSumPrice}>
                <div className={styles.SearchFont1}>총 금액 :</div>
                <div className={styles.SearchFont2}>{userData.sumprice}</div>
              </div>
              <Link href="/inputmoney/search">
                <SearchButton>
                  <div className={styles.BottonIcon} style={{ color: 'white' }}>
                    <CgSearch style={{ width: '100%', height: '100%' }} />
                  </div>
                  <div className={styles.BottonFont}>고객선택</div>
                </SearchButton>
              </Link>
            </div>
            <div className={styles.MainContent}>
              <div className={styles.Content}>
                <div className={styles.ContentTitle}>
                  <div className={styles.ContentTitleIcon_Y}></div>
                  <div className={styles.ContentTitleFont}>진행 예정 납부</div>
                </div>
                <ChasuPreBody userId={userData.id} />
              </div>

              <div className={styles.Content}>
                <div className={styles.ContentTitle}>
                  <div className={styles.ContentTitleIcon_G}></div>
                  <div className={styles.ContentTitleFont}>진행된 납부</div>
                </div>              
              </div>
              <div className={styles.Content}>
                <div className={styles.ContentTitle}>
                  <div className={styles.ContentTitleIcon_R}></div>
                  <div className={styles.ContentTitleFont}>대출 / 자납 / 해약</div>
                </div>
                <div className={styles.ContentBody_L}>
                  <div className={styles.ContentBodyTitle_L}>
                  <div className={styles.CBTIcon}>
                      <div className={styles.Icon}>
                        <BsBagDash style={{ width: '100%', height: '100%' }} />
                      </div>
                    </div>
                    <div className={styles.CBTText}>
                      <div className={styles.CBTCha}>
                        <div className={styles.CBTChaFont}>대출 / 자납</div>
                      </div>
                      <div className={styles.CBTDate}>
                        <div className={styles.CBTDateFont}>대출일 : 23/12/27 </div>
                        <div className={styles.CBTDateFont}>자납일 : 23/12/28</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.CBBottonBody}>
                  <Link href = "/inputmoney/loan">
                    <ModifyButton>
                      <div className={styles.CBBottonFont}>대출수정</div>
                    </ModifyButton>
                  </Link>
                  </div>
                  <div className={styles.CBSum}>
                  <div className={styles.CBMoneyImg}>
                      <div className={styles.Icon2}>
                        <BsDatabase style={{ width: '100%', height: '100%' }} />
                      </div>
                    </div>
                    <div className={styles.CBSumText}>대출액</div>
                    <div className={styles.CBSumNum}>100,000,000 ₩</div>
                  </div>
                  <div className={styles.CBSum}>
                  <div className={styles.CBMoneyImg}>
                      <div className={styles.Icon2}>
                        <BsDatabase style={{ width: '100%', height: '100%' }} />
                      </div>
                    </div>
                    <div className={styles.CBSumText}>자납액</div>
                    <div className={styles.CBSumNum}>390,000,000 ₩</div>
                  </div>
                  <div className={styles.CBSum}>
                  <div className={styles.CBMoneyImg}>
                      <div className={styles.Icon2}>
                        <BsDatabase style={{ width: '100%', height: '100%' }} />
                      </div>
                    </div>
                    <div className={styles.CBSumText}>총액</div>
                    <div className={styles.CBSumNum}>490,000,000 ₩</div>
                  </div>
                </div>
                {/* 한 덩어리 */}

                <div className={styles.ContentBody}>
                  <div className={styles.ContentBodyTitle}>
                  <div className={styles.CBTIcon}>
                      <div className={styles.Icon}>
                        <BsBagDash style={{ width: '100%', height: '100%' }} />
                      </div>
                    </div>
                    <div className={styles.CBTText}>
                      <div className={styles.CBTCha}>
                        <div className={styles.CBTChaFont}>해약</div>
                      </div>
                      <div className={styles.CBTDate}>
                        <div className={styles.CBTDateFont}>해약시 주의</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.CBBottonBody}>               
                  <Link href = "/inputmoney/cancle">
                    <ModifyButton>
                      <div className={styles.CBBottonFont}>해약하기</div>
                    </ModifyButton>
                  </Link>                  
                  </div>
                </div>
                {/* 한 덩어리 */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
