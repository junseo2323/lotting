import styles from "../../styles/Inputmoney.module.scss";
import money from "../../img/money.png";
import BottonIcon from "../../img/BottonIcon.png";
import Bag from "../../img/Bag.png";
const Inputmoney = () =>{
  return(
    <div className={styles.Container}>
      <div className={styles.Mainbody}>
        <div className={styles.SearchBody}>
          <div className={styles.SearchNum}>
            <div className={styles.SearchFont1}>관리번호 :</div>
            <div className={styles.SearchFont2}>123456</div>
          </div>
          <div className={styles.SearchName}>
            <div className={styles.SearchFont1}>성함 :</div>
            <div className={styles.SearchFont2}>이승준</div>
          </div>
          <div className={styles.SearchCha}>
            <div className={styles.SearchFont1}>가입차순 :</div>
            <div className={styles.SearchFont2}>1-2차시</div>
          </div>
          <div className={styles.SearchType}>
            <div className={styles.SearchFont1}>가입타입 :</div>
            <div className={styles.SearchFont2}>84A</div>
          </div>
          <div className={styles.Botton}>
            <img src={BottonIcon} className={styles.BottonIcon}></img>
            <div className={styles.BottonFont}>고객선택</div>
          </div>
        </div>

        <div className={styles.MainContent}>


          <div className={styles.Content}>
            <div className={styles.ContentTitle}>
              <div className={styles.ContentTitleIcon_Y}></div>
              <div className={styles.ContentTitleFont}>진행 예정 납부</div>
            </div>

            <div className={styles.ContentBody}>
              <div className={styles.ContentBodyTitle}>
                <img src={Bag} className={styles.CBTIcon}></img>
                <div className={styles.CBTText}>
                  <div className={styles.CBTCha}>
                    <div className={styles.CBTChaFont}>4차 납부</div>
                  </div>
                  <div className={styles.CBTDate}>
                    <div className={styles.CBTDateFont}>23/01/23</div>
                  </div>
                </div>
              </div>
              <div className={styles.CBBottonBody}>
                <div className={styles.CBBotton}>
                  <div className={styles.CBBottonFont}>납부수정</div>
                </div>
                <div className={styles.CBBotton}>
                  <div className={styles.CBBottonFont}>초기화</div>
                </div>
              </div>
              <div className={styles.CBSum}>
                <img src={money} className={styles.CBMoneyImg}></img>
                <div className={styles.CBSumText}>4차 총액</div>
                <div className={styles.CBSumNum}>390,000,000 ₩</div>
              </div>
            </div>
            {/* 한 덩어리 */}

            <div className={styles.ContentBody}>
              <div className={styles.ContentBodyTitle}>
              <img src={Bag} className={styles.CBTIcon}></img>
                <div className={styles.CBTText}>
                  <div className={styles.CBTCha}>
                    <div className={styles.CBTChaFont}>5차 납부</div>
                  </div>
                  <div className={styles.CBTDate}>
                    <div className={styles.CBTDateFont}>23/01/23</div>
                  </div>
                </div>
              </div>
              <div className={styles.CBBottonBody}>
                <div className={styles.CBBotton}>
                  <div className={styles.CBBottonFont}>납부수정</div>
                </div>
                <div className={styles.CBBotton}>
                  <div className={styles.CBBottonFont}>초기화</div>
                </div>
              </div>
              <div className={styles.CBSum}>
                <img src={money} className={styles.CBMoneyImg}></img>
                <div className={styles.CBSumText}>5차 총액</div>
                <div className={styles.CBSumNum}>390,000,000 ₩</div>
              </div>
            </div>
            {/* 한 덩어리 */}

            <div className={styles.ContentBody}>
              <div className={styles.ContentBodyTitle}>
              <img src={Bag} className={styles.CBTIcon}></img>
                <div className={styles.CBTText}>
                  <div className={styles.CBTCha}>
                    <div className={styles.CBTChaFont}>6차 납부</div>
                  </div>
                  <div className={styles.CBTDate}>
                    <div className={styles.CBTDateFont}>23/01/23</div>
                  </div>
                </div>
              </div>
              <div className={styles.CBBottonBody}>
                <div className={styles.CBBotton}>
                  <div className={styles.CBBottonFont}>납부수정</div>
                </div>
                <div className={styles.CBBotton}>
                  <div className={styles.CBBottonFont}>초기화</div>
                </div>
              </div>
              <div className={styles.CBSum}>
                <img src={money} className={styles.CBMoneyImg}></img>
                <div className={styles.CBSumText}>6차 총액</div>
                <div className={styles.CBSumNum}>390,000,000 ₩</div>
              </div>
            </div>
            {/* 한 덩어리 */}

            <div className={styles.ContentBody}>
              <div className={styles.ContentBodyTitle}>
              <img src={Bag} className={styles.CBTIcon}></img>
                <div className={styles.CBTText}>
                  <div className={styles.CBTCha}>
                    <div className={styles.CBTChaFont}>7차 납부</div>
                  </div>
                  <div className={styles.CBTDate}>
                    <div className={styles.CBTDateFont}>건설 허가시</div>
                  </div>
                </div>
              </div>
              <div className={styles.CBBottonBody}>
                <div className={styles.CBBotton}>
                  <div className={styles.CBBottonFont}>납부수정</div>
                </div>
                <div className={styles.CBBotton}>
                  <div className={styles.CBBottonFont}>초기화</div>
                </div>
              </div>
              <div className={styles.CBSum}>
                <img src={money} className={styles.CBMoneyImg}></img>
                <div className={styles.CBSumText}>7차 총액</div>
                <div className={styles.CBSumNum}>390,000,000 ₩</div>
              </div>
            </div>
            {/* 한 덩어리 */}
          </div>
          


          <div className={styles.Content}>
            <div className={styles.ContentTitle}>
              <div className={styles.ContentTitleIcon_G}></div>
              <div className={styles.ContentTitleFont}>진행된 납부</div>
            </div>

            <div className={styles.ContentBody}>
              <div className={styles.ContentBodyTitle}>
              <img src={Bag} className={styles.CBTIcon}></img>
                <div className={styles.CBTText}>
                  <div className={styles.CBTCha}>
                    <div className={styles.CBTChaFont}>1차 납부</div>
                  </div>
                  <div className={styles.CBTDate}>
                    <div className={styles.CBTDateFont}>23/12/23</div>
                  </div>
                </div>
              </div>
              <div className={styles.CBBottonBody}>
                <div className={styles.CBBotton}>
                  <div className={styles.CBBottonFont}>납부수정</div>
                </div>
                <div className={styles.CBBotton}>
                  <div className={styles.CBBottonFont}>초기화</div>
                </div>
              </div>
              <div className={styles.CBSum}>
                <img src={money} className={styles.CBMoneyImg}></img>
                <div className={styles.CBSumText}>1차 총액</div>
                <div className={styles.CBSumNum}>1,000,000 ₩</div>
              </div>
            </div>
            {/* 한 덩어리 */}

            <div className={styles.ContentBody}>
              <div className={styles.ContentBodyTitle}>
              <img src={Bag} className={styles.CBTIcon}></img>
                <div className={styles.CBTText}>
                  <div className={styles.CBTCha}>
                    <div className={styles.CBTChaFont}>2차 납부</div>
                  </div>
                  <div className={styles.CBTDate}>
                    <div className={styles.CBTDateFont}>23/12/23</div>
                  </div>
                </div>
              </div>
              <div className={styles.CBBottonBody}>
                <div className={styles.CBBotton}>
                  <div className={styles.CBBottonFont}>납부수정</div>
                </div>
                <div className={styles.CBBotton}>
                  <div className={styles.CBBottonFont}>초기화</div>
                </div>
              </div>
              <div className={styles.CBSum}>
                <img src={money} className={styles.CBMoneyImg}></img>
                <div className={styles.CBSumText}>2차 총액</div>
                <div className={styles.CBSumNum}>390,000,000 ₩</div>
              </div>
            </div>
            {/* 한 덩어리 */}

            <div className={styles.ContentBody}>
              <div className={styles.ContentBodyTitle}>
              <img src={Bag} className={styles.CBTIcon}></img>
                <div className={styles.CBTText}>
                  <div className={styles.CBTCha}>
                    <div className={styles.CBTChaFont}>3차 납부</div>
                  </div>
                  <div className={styles.CBTDate}>
                    <div className={styles.CBTDateFont}>23/01/23</div>
                  </div>
                </div>
              </div>
              <div className={styles.CBBottonBody}>
                <div className={styles.CBBotton}>
                  <div className={styles.CBBottonFont}>납부수정</div>
                </div>
                <div className={styles.CBBotton}>
                  <div className={styles.CBBottonFont}>초기화</div>
                </div>
              </div>
              <div className={styles.CBSum}>
                <img src={money} className={styles.CBMoneyImg}></img>
                <div className={styles.CBSumText}>3차 총액</div>
                <div className={styles.CBSumNum}>390,000,000 ₩</div>
              </div>
            </div>
            {/* 한 덩어리 */}

          </div>
          <div className={styles.Content}>
            <div className={styles.ContentTitle}>
              <div className={styles.ContentTitleIcon_R}></div>
              <div className={styles.ContentTitleFont}>대출 / 자납 / 해약</div>
            </div>

            <div className={styles.ContentBody_L}>
              <div className={styles.ContentBodyTitle_L}>
              <img src={Bag} className={styles.CBTIcon}></img>
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
                <div className={styles.CBBotton}>
                  <div className={styles.CBBottonFont}>대출수정</div>
                </div>
              </div>
              <div className={styles.CBSum}>
                <img src={money} className={styles.CBMoneyImg}></img>
                <div className={styles.CBSumText}>대출액</div>
                <div className={styles.CBSumNum}>100,000,000 ₩</div>
              </div>
              <div className={styles.CBSum}>
                <img src={money} className={styles.CBMoneyImg}></img>
                <div className={styles.CBSumText}>자납액</div>
                <div className={styles.CBSumNum}>390,000,000 ₩</div>
              </div>
              <div className={styles.CBSum}>
                <img src={money} className={styles.CBMoneyImg}></img>
                <div className={styles.CBSumText}>총액</div>
                <div className={styles.CBSumNum}>490,000,000 ₩</div>
              </div>
            </div>
            {/* 한 덩어리 */}

            <div className={styles.ContentBody}>
              <div className={styles.ContentBodyTitle}>
              <img src={Bag} className={styles.CBTIcon}></img>
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
                <div className={styles.CBBotton}>
                  <div className={styles.CBBottonFont}>해약하기</div>
                </div>
              </div>
            </div>
            {/* 한 덩어리 */}


          </div>
        </div>
      </div>
    </div>
  )
};

export default Inputmoney;