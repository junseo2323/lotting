"use client"

import { Inputbox,Inputbox_L,Inputbox_M,PostInputbox,LongInputbox,DropInputbox,FileInputbox, Spanbox } from "@/components/Inputbox"
import {PaymentScheduleButton,ToggleButton,SearchButton,Button_Y,Button_N} from "@/components/Button"
import styles from "../../styles/Inputmoneypay.module.scss";
import { BsDatabase } from "react-icons/bs";
import { CgSearch } from "react-icons/cg";
import { useForm } from 'react-hook-form';


const handleChange = e => {
    setPostdetail(e.target.value)
  }

export default function Inputmoneypay() {

    const { register,watch,handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
      };
    
    return(
        <div className={styles.Container}>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.Mainbody}>
                <div className={styles.MainTitle}>
                    <div className={styles.MainTitle1}>

                        <div className={styles.SearchClientNum}>
                            <div className={styles.SearchFont1}>고객번호 : </div>
                            <div className={styles.SearchFont2}>123456</div>
                        </div>
                        
                    </div>
                    <div className={styles.MainTitle2}>

                        <SearchButton>
                            <div className={styles.BottonIcon} style={{ color: 'white' }}>
                                <CgSearch style={{ width: '100%', height: '100%' }} />
                            </div>
                            <div className={styles.BottonFont}>고객선택</div>
                        </SearchButton>


                    </div>
                </div>
                <div className={styles.InputBody}>
                    <div className={styles.InputBodyTitle}>
                        <div className={styles.IBTIcon}>
                            <div className={styles.Icon} style={{ color: '#7152F3' }}>
                                <BsDatabase style={{ width: '100%', height: '100%' }} />
                            </div>
                        </div>
                        <div className={styles.IBTText}>5차 납입</div>
                    </div>
                    <div className={styles.Line}></div>
                    <div className={styles.IBBottonLayer}>

                        {/* <div className={styles.BackgroundBotton}>
                            <div className={styles.InnerBotton}>
                            <div className={styles.BottonFont}>납입</div>
                        </div>
                            <div className={styles.BackgroundBottonFont}>예정</div>
                        </div> */}
                        <PaymentScheduleButton/>

                    </div>
                    <div className={styles.IBLayer}>
                        {/* <div className={styles.IBInputBox_L}>
                            <div className={styles.SearchFont1}>완납일</div>
                        </div> */}
                        <Inputbox_L type="text" placeholder="완납일" register={register('fullpayment')} />
                    </div>
                    {/* 한 덩어리 */}

                    <div className={styles.IBLayer}>
                        {/* <div className={styles.IBInputBox_S}>
                            <div className={styles.SearchFont1}>부담금</div>
                        </div> */}
                        <Inputbox_M type="text" placeholder="부담금" register={register('contribution')} />
                        {/* <div className={styles.IBInputBox_S}>
                            <div className={styles.SearchFont1}>업무대행비</div>
                        </div> */}
                        <Inputbox_M type="text" placeholder="업무대행비" register={register('business')} />
                    </div>
                    {/* 한 덩어리 */}

                    <div className={styles.IBLayer}>
                        {/* <div className={styles.IBInputBox_L}>
                            <div className={styles.SearchFont1}>할인액</div>
                        </div> */}
                        <Inputbox_L type="text" placeholder="할인액" register={register('discount')} />
                    </div>
                    {/* 한 덩어리 */}

                    {/* 한 덩어리 */}
                    <div className={styles.IBLayer}>
                        {/* <div className={styles.IBInputBox_L}>
                            <div className={styles.SearchFont1}>면제액</div>
                        </div> */}
                        <Inputbox_L type="text" placeholder="면제액" register={register('exemption')} />
                    </div>
                    {/* 한 덩어리 */}

                    <div className={styles.IBLayer}>
                        {/* <div className={styles.IBInputBox_S}>
                            <div className={styles.SearchFont1}>이동</div>
                        </div> */}
                        <Inputbox_M type="text" placeholder="이동" register={register('move')} />
                        <div className={styles.IBInputBox_S}>
                            <div className={styles.SearchFont1}>총액 :</div>
                            <div className={styles.SearchFont2}>123,456,789 ₩</div>
                        </div>
                    </div>
                    {/* 한 덩어리 */}
                    
                    <div className={styles.IBBottonLayer}>
                        {/* <div className={styles.Botton_N}>취소</div> */}
                        <Button_N><div className = {styles.BottonFont2}>취소</div></Button_N>
                        <Button_Y><div className = {styles.BottonFont}>확인</div></Button_Y>
                        {/* <div className={styles.Botton_Y}>
                            <div className={styles.BottonFont}>확인</div>
                        </div> */}
                    </div>
                </div>
            </div>
            </form>
        </div>
    );
};
