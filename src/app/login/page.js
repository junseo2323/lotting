"use client";
import { LoginInputbox } from "@/components/Inputbox";
import { Button, CheckButton } from "@/components/Button";
import styles from "@/styles/Login.module.scss";
import { useState } from "react";
import { fetchLogin } from "@/utils/api";

export default function Login() {
  const [userform, setUserform] = useState({
    id: "",
    pw: "",
  });

  const handleChange = (e) => {
    setUserform({
      ...userform,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetchLogin(userform.id, userform.pw);
      console.log("Login successful:", response.data);
    } catch (error) {
      console.error("Login error:", error.response.data.message);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.childcontainer}>
        <h1>환영합니다👋</h1>
        <h3>민간임대주택 분양인관리시스템에 오신것을 환영합니다!</h3>
        <form onSubmit={handleSubmit}>
          <LoginInputbox
            name="id"
            placeholder="아이디"
            onChange={handleChange}
          />
          <LoginInputbox
            name="pw"
            placeholder="비밀번호"
            type="password"
            onChange={handleChange}
          />
          <div className={styles.checkcontainer}>
            <CheckButton />
            <span className={styles.remembertext}>아이디 기억하기</span>
            <span className={styles.forgottext}>계정 분실시 관리자 문의</span>
          </div>
          <Button type="submit">로그인</Button>
        </form>
      </div>
    </div>
  );
}
