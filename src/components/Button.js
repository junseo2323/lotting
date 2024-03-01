"use client"
import styles from "@/styles/Button.module.scss"
import { useState } from 'react'

export const Button = (props) => {
    return(
        <button className={styles.buttonstyle}>
            {props.children}
        </button>
    )
}

export const CheckButton = (props) => {
    const {name, value} = props;
    return(
        <input type="checkbox" className={styles.checkstyle} name={name} value={value} />
    )
}

export const Button_Y = (props) => {
    return(
        <button className={styles.buttonstyle_y}>
            {props.children}
        </button>
    )
}

export const Button_N = (props) => {
    return(
        <button className={styles.buttonstyle_n}>
            {props.children}
        </button>
    )
}

export const SearchButton = (props) => {
    return(
        <button className={styles.searchbuttonstyle}>
            {props.children}
        </button>
    )
}

export const ModifyButton = (props) => {
    return(
        <button className={styles.modifybutton}>
            {props.children}
        </button>
    )
}

export const ChecButton = (props) => {
    return(
        <button className={styles.checkbutton}>
            {props.children}
        </button>
    )
}
export const PaymentScheduleButton = () => {
    const [isActivePayment, setIsActivePayment] = useState(true); // 납입 버튼 활성화 상태를 관리하는 상태

    const handlePaymentClick = () => {
        setIsActivePayment(true); // 납입 버튼 활성화
    };

    const handleScheduleClick = () => {
        setIsActivePayment(false); // 예정 버튼 활성화
    };

    return (
        <div>
            <button className={`${styles.toggleButton} ${isActivePayment ? styles.active : ''}`} onClick={handlePaymentClick}>
                <div className={styles.ButtonFont}>납입</div>
            </button>
            <button className={`${styles.toggleButton} ${!isActivePayment ? styles.active : ''}`} onClick={handleScheduleClick}>
                <div className={styles.ButtonFont2}>예정</div>
            </button>
        </div>
    );
};