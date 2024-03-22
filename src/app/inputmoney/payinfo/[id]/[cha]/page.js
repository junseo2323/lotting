'use client'

import React, { useState, useEffect } from 'react';
import { Inputbox, Inputbox_L, Inputbox_M } from "@/components/Inputbox"
import { PaymentScheduleButton, SearchButton, Button_Y, Button_N } from "@/components/Button"
import styles from "@/styles/Inputmoneypay.module.scss";
import { BsDatabase } from "react-icons/bs";
import { CgSearch } from "react-icons/cg";
import { useForm } from 'react-hook-form';
import Link from "next/link";

import { usePathname, useRouter } from 'next/navigation';

export default function Inputmoneypay() {
    const { register, handleSubmit } = useForm();
    const [pay, setpay] = useState('');
    const [work, setwork] = useState('');
    const [discount, setdiscount] = useState('');
    const [del, setdelete] = useState('');
    const [tot, settotal] = useState(0);

    const pathname = usePathname();
    console.log(pathname);
    const[id,setId]=useState(null);
    const[chasu,setChasu]=useState(null);
    useEffect(()=>{
        const regex = /\/(\d+)\/(\d+)$/;
        const match = pathname.match(regex);

        if(match){
            const extractedId = match[1];
            const extractedChasu=match[2];
            setId(extractedId);
            setChasu(extractedChasu);
        }
    },[pathname])
    const regex = /\/(\d+)\/(\d+)$/;
    const match = pathname.match(regex);

    if(match){
        const id = match[1];
        const chasu=match[2];
        console.log(id);
        console.log(chasu);
    }
    
    const onSubmit = (data) => {
        console.log(data);
    };
    useEffect(() => {
        calculateTotal();
    }, [pay, work, discount, del]);

    const calculateTotal = () => {
        const payValue = parseInt(pay) || 0;
        const workValue = parseInt(work) || 0;
        const discountValue = parseInt(discount) || 0;
        const deleteValue = parseInt(del) || 0;
        const total = payValue + workValue - discountValue - deleteValue;
        settotal(total);
    };

    const onChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'pay':
                setpay(value);
                break;
            case 'work':
                setwork(value);
                break;
            case 'discount':
                setdiscount(value);
                break;
            case 'del':
                setdelete(value);
                break;
            default:
                break;
        }
    };

    return (

        <div className={styles.Container}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.Mainbody}>
                    <div className={styles.MainTitle}>
                        <div className={styles.MainTitle1}>
                            <div className={styles.SearchClientNum}>
                                <div className={styles.SearchFont1}>고객번호 : </div>
                                <div className={styles.SearchFont2}>{id}</div>
                            </div>
                            <div className={styles.SearchClientNum}>
                                <div className={styles.SearchFont1}>성함 : </div>
                                <div className={styles.SearchFont2}>이승준</div>
                            </div>
                        </div>
                        <div className={styles.MainTitle2}>

                            <Link href="/inputmoney/search">
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
                            <div className={styles.IBTText}>{chasu}차 납입</div>
                        </div>
                        <div className={styles.Line}></div>
                        <div className={styles.IBBottonLayer}>
                            <PaymentScheduleButton />
                        </div>
                        <div className={styles.IBLayer}>
                            <Inputbox type="date" placeholder="완납일" register={('completedate')} />
                        </div>

                        <div className={styles.IBLayer}>
                            <Inputbox_M type="text" placeholder="부담금" name="pay" onChange={onChange} />
                            <Inputbox_M type="text" placeholder="업무대행비" name="work" onChange={onChange} />
                        </div>

                        <div className={styles.IBLayer}>
                            <Inputbox_L type="text" placeholder="할인액" name="discount" onChange={onChange} />
                        </div>

                        <div className={styles.IBLayer}>
                            <Inputbox_L type="text" placeholder="면제액" name="del" onChange={onChange} />
                        </div>

                        <div className={styles.IBLayer}>
                            <Inputbox_M type="text" placeholder="이동" register={register('move')} />
                            <div className={styles.IBInputBox_S}>
                                <div className={styles.SearchFont1}>총액 :</div>
                                <div className={styles.SearchFont2}>{tot.toLocaleString()}₩</div>
                            </div>
                        </div>

                        <div className={styles.IBBottonLayer}>
                    
                        <Link href={"/inputmoney/payinfo/"}>
                            <Button_N type="submit"><div className={styles.BottonFont2}>취소</div></Button_N>
                        </Link>
                            <Button_Y type="submit"><div className={styles.BottonFont}>확인</div></Button_Y>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};