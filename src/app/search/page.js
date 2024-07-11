"use client";

import {
  banklist,
  sintacklist,
  typeidlist,
  typelist,
  grouplist,
  turnlist,
} from "@/components/droplistdata";
import {
  Inputbox,
  PostInputbox,
  LongInputbox,
  DropInputbox,
  FileInputbox,
} from "@/components/Inputbox";
import styles from "@/styles/Search.module.scss";

import { searchnameState } from "@/utils/atom";
import { namesearchSelector } from "@/utils/selector";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  useRecoilValue,
  useRecoilValueLoadable,
  useSetRecoilState,
} from "recoil";

const SearchList = ({ name }) => {
  let searchname = name.length > 1 ? name : "";

  const setNameState = useSetRecoilState(searchnameState);
  let searchdata = useRecoilValueLoadable(namesearchSelector);

  useEffect(() => {
    setNameState(searchname);
  }, [searchname, setNameState]);

  console.log(searchdata);

  if (searchdata.state === "loading") {
    return null; // 초기 렌더링에서 서버와 클라이언트 간 차이를 없애기 위해 null 반환
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
              href={"/search/userinfo/" + k.id}
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

export default function Search() {
  const [name, setName] = useState("");

  const onChange = (e) => {
    const text = e.target.value;
    setName(text.replace(/ /g, ""));
  };

  return (
    <>
      <h3>고객 정보 검색</h3>
      <div className={styles.container}>
        <Inputbox type="text" placeholder="고객 성함" onChange={onChange} />
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
      {typeof window !== "undefined" && <SearchList name={name} />}
    </>
  );
}
