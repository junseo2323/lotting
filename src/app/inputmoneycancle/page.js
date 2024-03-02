"use client"

import { Inputbox,Inputbox_L,Inputbox_M,PostInputbox,LongInputbox,DropInputbox,FileInputbox, Spanbox } from "@/components/Inputbox"
import {PaymentScheduleButton,ToggleButton,SearchButton,Button_Y,Button_N, ModifyButton} from "@/components/Button"
import styles from "../../styles/Inputmoneycancle.module.scss";
import { BsDatabase } from "react-icons/bs";
import { CgSearch } from "react-icons/cg";
import { useForm } from 'react-hook-form';
import Link from "next/link";

const Inputmoneycancle = () =>{

    const { register,watch,handleSubmit } = useForm();
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
                    <Link href = "/inputmoneysearch">
                        <SearchButton>
                            <div className={styles.BottonIcon} style={{ color: 'white' }}>
                                <CgSearch style={{ width: '100%', height: '100%' }} />
                            </div>
                            <div className={styles.BottonFont}>고객선택</div>
                        </SearchButton>
                    </Link>
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
                        <Inputbox_L type="text" placeholder="해지일자" register={register('cancledate')} />
                    </div>
                    {/* 한 덩어리 */}

                    <div className={styles.IBLayer}>
                        <Inputbox_L type="text" placeholder="환급일자" register={register('paybackdate')} />
                    </div>
                    {/* 한 덩어리 */}

                    {/* 한 덩어리 */}
                    <div className={styles.IBLayer}>
                        <Inputbox_L type="text" placeholder="해지일자" register={register('paybackmoney')} />
                    </div>
                    {/* 한 덩어리 */}
                    
                    <div className={styles.IBBottonLayer}>
                        <Button_N><div className = {styles.BottonFont2}>취소</div></Button_N>
                        <Button_Y><div className = {styles.BottonFont}>해약</div></Button_Y>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inputmoneycancle