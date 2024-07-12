"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { userchasuSelector, userinfoSelector } from "@/utils/selector";
import { useridState, chasuState } from "@/utils/atom";
import { useRecoilValueLoadable, useRecoilState } from "recoil";
import { fetchChasuUpdate } from "@/utils/api";
import { Inputbox, Inputbox_M } from "@/components/Inputbox";
import {
  PaymentScheduleButton,
  SearchButton,
  Button_Y,
  Button_N,
} from "@/components/Button";
import styles from "@/styles/Inputmoneypay.module.scss";
import { BsDatabase } from "react-icons/bs";
import { CgSearch } from "react-icons/cg";

export default function Inputmoneypay() {
  console.log("마운트");

  const { register, handleSubmit, setValue } = useForm();
  const [pay, setpay] = useState("");
  const [work, setwork] = useState("");
  const [discount, setdiscount] = useState("");
  const [del, setdel] = useState("0");
  const [tot, settotal] = useState(0);
  const [payprice, setpayprice] = useState("");
  const pathname = usePathname();
  const router = useRouter();

  const [IdState, setIdState] = useRecoilState(useridState);
  const [ChasuState, setChasuState] = useRecoilState(chasuState);
  const [userChasuData, setUserChasuData] = useState(null);

  const userChasudatas = useRecoilValueLoadable(userchasuSelector);
  const [userData, setUserData] = useState(null);
  const userselectordata = useRecoilValueLoadable(userinfoSelector);

  useEffect(() => {
    console.log("effect");
    const regex = /\/(\d+)\/(\d+)$/;
    const match = pathname.match(regex);

    if (match) {
      const extractedId = match[1];
      const extractedChasu = match[2];
      setIdState(extractedId);
      setChasuState(extractedChasu);
    }
  }, [pathname, setIdState, setChasuState]);

  useEffect(() => {
    if (userselectordata.state === "hasValue") {
      const userdata = userselectordata.contents;
      if (userdata === undefined) {
        console.log("잘못된 접근입니다");
      } else {
        setUserData(userdata);
      }
    }
  }, [userselectordata]);

  useEffect(() => {
    if (userChasudatas.state === "hasValue") {
      const userdata = userChasudatas.contents;
      if (userdata === undefined) {
        console.log("잘못된 접근입니다");
      } else {
        setUserChasuData(userdata);
        setpay(userdata.pay);
        setwork(userdata.work);
        setdiscount(userdata.discount);
        setdel(userdata.del);
        setpayprice(userdata.payprice);
      }
    }
  }, [userChasudatas]);

  const isValidDateString = (dateString) => {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    if (!regex.test(dateString)) return false;
    const date = new Date(dateString);
    const timestamp = date.getTime();
    if (typeof timestamp !== "number" || Number.isNaN(timestamp)) return false;
    return dateString === date.toISOString().substring(0, 10);
  };

  const onSubmit = (data) => {
    data["sumprice"] =
      parseInt(pay) + parseInt(work) - parseInt(discount) - parseInt(del);
    if (data["isclear"] === undefined) {
      data["isclear"] = false;
    }
    console.log(data);
    fetchChasuUpdate(IdState, data, () => {
      router.back();
    });
  };

  useEffect(() => {
    calculateTotal();
  }, [pay, work, discount, del, payprice]);

  const calculateTotal = () => {
    const payValue = parseInt(pay) || 0;
    const workValue = parseInt(work) || 0;
    const discountValue = parseInt(discount) || 0;
    const deleteValue = parseInt(del) || 0;
    const paypriceValue = parseInt(payprice) || 0;
    const total =
      payValue + workValue - discountValue - deleteValue - paypriceValue;
    settotal(total);
    console.log("calculateTotal 작동");
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "pay":
        setpay(value);
        break;
      case "work":
        setwork(value);
        break;
      case "discount":
        setdiscount(value);
        break;
      case "del":
        setdel(value);
        break;
      case "payprice":
        setpayprice(value);
        break;
      default:
        break;
    }
  };

  return (
    <>
      {userChasuData && userselectordata.state === "hasValue" && userData && (
        <div className={styles.Container}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.Mainbody}>
              <div className={styles.MainTitle}>
                <div className={styles.MainTitle1}>
                  <div className={styles.SearchClientNum}>
                    <div className={styles.SearchFont1}>고객번호 : </div>
                    <div className={styles.SearchFont2}>{IdState}</div>
                  </div>
                  <div className={styles.SearchClientNum}>
                    <div className={styles.SearchFont1}>성함 : </div>
                    <div className={styles.SearchFont2}>
                      {userData.userinfo.name}
                    </div>
                  </div>
                </div>
                <div className={styles.MainTitle2}>
                  <Link href="/inputmoney">
                    <SearchButton>
                      <div
                        className={styles.BottonIcon}
                        style={{ color: "white" }}
                      >
                        <CgSearch style={{ width: "100%", height: "100%" }} />
                      </div>
                      <div className={styles.BottonFont}>고객선택</div>
                    </SearchButton>
                  </Link>
                </div>
              </div>
              <div className={styles.InputBody}>
                <div className={styles.InputBodyTitle}>
                  <div className={styles.IBTIcon}>
                    <div className={styles.Icon} style={{ color: "#7152F3" }}>
                      <BsDatabase style={{ width: "100%", height: "100%" }} />
                    </div>
                  </div>
                  <div className={styles.IBTText}>{ChasuState}차 납입</div>
                </div>
                <div className={styles.Line}></div>
                <div className={styles.IBBottonLayer}>
                  <PaymentScheduleButton
                    isclear={userChasuData.isclear}
                    setValue={setValue}
                  />
                </div>
                <div className={styles.SIBLayer}>
                  <div className={styles.SearchFont}>완납일자</div>
                  <Inputbox
                    type="date"
                    register={register("findate")}
                    defaultValue={
                      isValidDateString(userChasuData.findate)
                        ? userChasuData.findate
                        : null
                    }
                  />
                </div>
                <div className={styles.SIBLayer}>
                  <div className={styles.SearchFont}>예정일자</div>
                  <Inputbox
                    type="date"
                    register={register("duedate")}
                    defaultValue={
                      isValidDateString(userChasuData.duedate)
                        ? userChasuData.duedate
                        : null
                    }
                  />
                </div>
                <div className={styles.IBLayer}>
                  <Inputbox_M
                    type="text"
                    placeholder="부담금"
                    name="pay"
                    register={register("pay")}
                    onChange={onChange}
                    defaultValue={userChasuData.pay}
                  />
                  <Inputbox_M
                    type="text"
                    placeholder="업무대행비"
                    name="work"
                    register={register("work")}
                    onChange={onChange}
                    defaultValue={userChasuData.work}
                  />
                </div>
                <div className={styles.IBLayer}>
                  <Inputbox_M
                    type="text"
                    placeholder="할인액"
                    name="discount"
                    register={register("discount")}
                    onChange={onChange}
                    defaultValue={userChasuData.discount}
                  />
                  <Inputbox_M
                    type="text"
                    placeholder="면제액"
                    name="del"
                    register={register("del")}
                    onChange={onChange}
                    defaultValue={userChasuData.del}
                  />
                </div>
                <div className={styles.IBLayer}>
                  <Inputbox_M
                    type="text"
                    placeholder="이동"
                    register={register("move")}
                    defaultValue={userChasuData.move}
                  />
                  <Inputbox_M
                    type="text"
                    placeholder="납입액"
                    name="payprice"
                    register={register("payprice")}
                    onChange={onChange}
                    defaultValue={userChasuData.payprice}
                  />
                  <input
                    type="hidden"
                    {...register("chasu")}
                    value={ChasuState}
                  />
                </div>
                <div className={styles.IBLayer}>
                  <div className={styles.IBInputBox_S}>
                    <div className={styles.SearchFont1}>총액 :</div>
                    <div className={styles.SearchFont2}>
                      {tot.toLocaleString()}₩
                    </div>
                  </div>
                </div>
                <div className={styles.IBBottonLayer}>
                  <Link href={"/inputmoney/userinfo/" + IdState}>
                    <Button_N type="submit">
                      <div className={styles.BottonFont2}>취소</div>
                    </Button_N>
                  </Link>
                  <Button_Y type="submit">
                    <div className={styles.BottonFont}>확인</div>
                  </Button_Y>
                </div>
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
