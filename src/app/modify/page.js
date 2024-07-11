"use client";

import {
  Inputbox,
  PostInputbox,
  LongInputbox,
  DropInputbox,
  FileInputbox,
} from "@/components/Inputbox";
import styles from "@/styles/Search.module.scss";
import { searchnameState, searchnumberState } from "@/utils/atom";
import { namesearchSelector } from "@/utils/selector";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  useRecoilValue,
  useRecoilValueLoadable,
  useSetRecoilState,
} from "recoil";
import {
  banklist,
  sintacklist,
  typeidlist,
  typelist,
  grouplist,
  turnlist,
} from "@/components/droplistdata";

const SearchList = ({ name, number }) => {
  const setNameState = useSetRecoilState(searchnameState);
  const setNumberState = useSetRecoilState(searchnumberState);
  let searchname = name.length > 1 ? name : "";
  let searchnumber = number.length > 1 ? number : "";

  useEffect(() => {
    setNameState(searchname);
    setNumberState(searchnumber);
  }, [searchname, searchnumber, setNameState, setNumberState]);

  let searchdata = useRecoilValueLoadable(namesearchSelector);

  if (searchdata.state === "loading") {
    return null;
  }

  if (searchdata.state === "hasError") {
    return <div> </div>;
  }

  return (
    <div>
      {searchdata.state === "hasValue" &&
        searchdata.contents
          .filter((k) => k.userinfo && k.data) // 필터 조건 추가
          .map((k) => (
            <Link
              className={styles.maincontainer}
              href={"/modify/" + k.id}
              key={k.id}
            >
              <span>{k.id}</span>
              <span>{k.userinfo?.name || "N/A"}</span>
              <span>{k.data?.type || "N/A"}</span>
              <span>{k.data?.group || "N/A"}</span>
              <span>{k.data?.turn || "N/A"}</span>
              <span>{`${k.data?.type || "N/A"}-${k.data?.group || "N/A"}-${k.data?.turn || "N/A"}`}</span>
            </Link>
          ))}
    </div>
  );
};

export default function Modify() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const onNameChange = (e) => {
    const text = e.target.value;
    setName(text.replace(/ /g, ""));
  };

  const onNumberChange = (e) => {
    const text = e.target.value;
    setNumber(text.replace(/ /g, ""));
  };

  const containerStyle = {
    display: 'flex',
    flexWrap: 'nowrap',
    gap: '10px'
  };

  return (
    <>
      <h1></h1>
      <div className={styles.flexContainer}>
        <Inputbox type="text" placeholder="고객 성함" onChange={onNameChange} />
        <Inputbox type="text" placeholder="관리번호" onChange={onNumberChange} />
        <DropInputbox list={typelist} />
        <DropInputbox list={grouplist} />
        <DropInputbox list={turnlist} />
      </div>
      <div className={styles.tablecontainer}>
        <span>관리번호</span>
        <span>성명</span>
        <span>타입</span>
        <span>군</span>
        <span>순번</span>
        <span>임시동호</span>
      </div>
      {typeof window !== "undefined" && <SearchList name={name} number={number} />}
    </>
  );
}
