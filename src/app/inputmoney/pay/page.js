"use client"

import { useRouter } from 'next/router'; 
import React, { useState } from 'react';
import { Inputbox,Inputbox_L,Inputbox_M,PostInputbox,LongInputbox,DropInputbox,FileInputbox, Spanbox } from "@/components/Inputbox"
import {PaymentScheduleButton,ToggleButton,SearchButton,Button_Y,Button_N} from "@/components/Button"
import styles from "@/styles/Inputmoneypay.module.scss";
import { BsDatabase } from "react-icons/bs";
import { CgSearch } from "react-icons/cg";
import { useForm } from 'react-hook-form';
import Link from "next/link";

export default function Inputmoneypay() {
    const router = useRouter(); // 라우터 객체 생성
    const { register, handleSubmit } = useForm();
    const [price, setPrice] = useState('');

    const onSubmit = (data) => {
        console.log(data);
    };
      
    const handleCancel = () => {
        router.back(); // 이전 페이지로 이동
    };
    
    return (
        <div className={styles.Container}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.Mainbody}>
                    <div className={styles.MainTitle}>
                        <div className={styles.MainTitle1}>

                            <div className={styles.SearchClientNum}>
                                <div className={styles.SearchFont1}>고객번호 : </div>
                                <div className={styles.SearchFont2}>123456</div>
                            </div>
                            <div className={styles.SearchClientNum}>
                                <div className={styles.SearchFont1}>성함 : </div>
                                <div className={styles.SearchFont2}>이승준</div>
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
                            <div className={styles.IBTText}>5차 납입</div>
                        </div>
                        <div className={styles.Line}></div>
                        <div className={styles.IBBottonLayer}>
                            <PaymentScheduleButton/>
                        </div>
                        <div className={styles.IBLayer}>
                            <Inputbox_L type="text" placeholder="완납일" register={register('fullpayment')} />
                        </div>

                        <div className={styles.IBLayer}>
                            <Inputbox_M type="text" placeholder="부담금" register={register('data.price')} />
                            <Inputbox_M type="text" placeholder="업무대행비" register={register('data.price2')} />
                        </div>

                        <div className={styles.IBLayer}>
                            <Inputbox_L type="text" placeholder="할인액" register={register('data.discountprice')} />
                        </div>

                        <div className={styles.IBLayer}>
                            <Inputbox_L type="text" placeholder="면제액" register={register('data.deleteprice')} />
                        </div>

                        <div className={styles.IBLayer}>
                            <Inputbox_M type="text" placeholder="이동" register={register('move')} />
                            <div className={styles.IBInputBox_S}>
                                <div className={styles.SearchFont1}>총액 :</div>
                                <div className={styles.SearchFont2}>123,456,789 ₩</div>
                            </div>
                        </div>
                        
                        <div className={styles.IBBottonLayer}>
                            <Button_N onClick={handleCancel}><div className = {styles.BottonFont2}>취소</div></Button_N>
                            <Button_Y type="submit"><div className = {styles.BottonFont}>확인</div></Button_Y>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};
