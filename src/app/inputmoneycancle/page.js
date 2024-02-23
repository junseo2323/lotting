import styles from "../../styles/Inputmoneycancle.module.scss";
import { BsDatabase } from "react-icons/bs";
import { CgSearch } from "react-icons/cg";

const Inputmoneycancle = () =>{
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
                            <div className={styles.BottonIcon} style={{ color: 'white' }}>
                                <CgSearch style={{ width: '100%', height: '100%' }} />
                            </div>
                            <div className={styles.BottonFont}>고객선택</div>
                        </div>
                    </div>
                </div>
                <div className={styles.InputBody}>
                    <div className={styles.InputBodyTitle}>
                        <div className={styles.IBTIcon}>
                            <div className={styles.Icon} style={{ color: '#7152F3' }}>
                                <BsDatabase style={{ width: '100%', height: '100%' }} />
                            </div>
                        </div>
                        <div className={styles.IBTText}>해약</div>
                    </div>
                    <div className={styles.Line}></div>
                    <div className={styles.IBLayer}>
                        <div className={styles.IBInputBox_L}>
                            <div className={styles.SearchFont1}>해지일자</div>
                        </div>
                    </div>
                    {/* 한 덩어리 */}

                    <div className={styles.IBLayer}>
                        <div className={styles.IBInputBox_L}>
                            <div className={styles.SearchFont1}>환급일자</div>
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
                    
                    <div className={styles.IBBottonLayer}>
                        <div className={styles.Botton_N}>취소</div>
                        <div className={styles.Botton_Y}>
                            <div className={styles.BottonFont}>해약</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inputmoneycancle