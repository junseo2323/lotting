"use client";
import { LoginInputbox } from "@/components/Inputbox";
import { Button, CheckButton } from "@/components/Button";
import styles from "@/styles/Login.module.scss";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { fetchLogin } from "@/utils/api"; // Import the login API function
import Swal from "sweetalert2"; // Import SweetAlert2

export default function Login() {
  const [userform, setUserform] = useState({
    id: "",
    pw: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

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
      const token = response.data.token;
      localStorage.setItem("token", token);
      localStorage.setItem("username", userform.id);
      Swal.fire({
        title: "로그인 성공",
        text: "로그인에 성공했습니다!",
        icon: "success",
        confirmButtonText: "확인",
      }).then(() => {
        router.push("/dashboard"); // Redirect to dashboard
      });
      console.log("Login successful:", response.data);
    } catch (error) {
      console.error("Login error:", error.response.data.message);
      Swal.fire({
        title: "로그인 실패",
        text: error.response.data.message || "로그인에 실패했습니다.",
        icon: "error",
        confirmButtonText: "확인",
      });
    }
  };

  if (isLoggedIn) {
    return (
      <div className={styles.container}>
        <div className={styles.childcontainer}>
          <h1>이미 로그인 되어있습니다</h1>
        </div>
      </div>
    );
  }

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
