import styles from "../../styles/Inputmoneyloan.module.scss";
import BottonIcon from "../../img/BottonIcon.png";
import User from "../../img/User.png";

const Inputmoneyloan = () =>{
    return(
        <div className={styles.Container}>
            <div className={styles.Mainbody}>
                <div className={styles.MainTitle}>
                    <div className={styles.MainTitle1}>
                        <div className={styles.SearchClientNum}>
                            <div className={styles.SearchFont1}>고객번호 : </div>
                            <div className={styles.SearchFont2}>123456</div>
                        </div>
                    </div>
                    <div className={styles.MainTitle2}>
                        <div className={styles.Botton}>
                            <img src={BottonIcon} className={styles.BottonIcon}></img>
                            <div className={styles.BottonFont}>고객선택</div>
                        </div>
                    </div>
                </div>
                <div className={styles.InputBody}>
                    <div className={styles.InputBodyTitle}>
                        <img src={User} className={styles.IBTIcon}></img>
                        <div className={styles.IBTText}>대출</div>
                    </div>
                    <div className={styles.Line}></div>
                    <div className={styles.IBLayer}>
                        <div className={styles.IBTText2}>
                            <div className={styles.IBTText2Font}>농협</div>
                        </div>
                        <div className={styles.IBInputBox_M}>
                            <div className={styles.SearchFont1}>대출일</div>
                        </div>
                    </div>
                    {/* 한 덩어리 */}


                    <div className={styles.IBLayer}>
                        <div className={styles.IBTText2}>
                            <div className={styles.IBTText2Font}>새마을</div>
                        </div>
                        <div className={styles.IBInputBox_L}>
                            <div className={styles.SearchFont1}>대출금</div>
                        </div>
                    </div>
                    {/* 한 덩어리 */}

                    {/* 한 덩어리 */}
                    <div className={styles.IBLayer}>
                        <div className={styles.IBInputBox_L}>
                            <div className={styles.SearchFont1}>대출금</div>
                        </div>
                    </div>
                    {/* 한 덩어리 */}

                    <div className={styles.InputBodyTitle}>
                        <img src={User} className={styles.IBTIcon}></img>
                        <div className={styles.IBTText}>자납</div>
                    </div>

                    <div className={styles.IBLayer}>
                        <div className={styles.IBInputBox_L}>
                            <div className={styles.SearchFont1}>자납일</div>
                        </div>
                    </div>
                    {/* 한 덩어리 */}

                    <div className={styles.IBLayer}>
                        <div className={styles.IBInputBox_L}>
                            <div className={styles.SearchFont1}>자납</div>
                        </div>
                    </div>
                    {/* 한 덩어리 */}

                    {/* 한 덩어리 */}
                    <div className={styles.IBLayer}>
                        <div className={styles.IBInputBox_L}>
                            <div className={styles.SearchFont1}>면제액</div>
                        </div>
                    </div>
                    {/* 한 덩어리 */}

                    <div className={styles.InputBodyTitle}>
                        <img src={User} className={styles.IBTIcon}></img>
                        <div className={styles.IBTText}>총액</div>
                    </div>

                    <div className={styles.IBLayer}>
                        <div className={styles.IBInputBox_L}>
                            <div className={styles.SearchFont1}>총액</div>
                        </div>
                    </div>
                    {/* 한 덩어리 */}
                    
                    <div className={styles.IBBottonLayer}>
                        <div className={styles.Botton_N}>취소</div>
                        <div className={styles.Botton_Y}>
                            <div className={styles.BottonFont}>확인</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inputmoneyloan