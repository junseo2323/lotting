"use client";

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
import {
  banklist,
  sintacklist,
  typeidlist,
  typelist,
  grouplist,
  turnlist,
} from "@/components/droplistdata";

const SearchList = ({ name }) => {
  const setNameState = useSetRecoilState(searchnameState);
  let searchname = name.length > 1 ? name : "";

  useEffect(() => {
    setNameState(searchname);
  }, [searchname, setNameState]);

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
        searchdata.contents.map((k) => (
          <Link
            className={styles.maincontainer}
            href={"/modify/" + k.id}
            key={k.id}
          >
            <span>{k.id}</span>
            <span>{k.userinfo.name}</span>
            <span>{k.data.type}</span>
            <span>{k.data.group}</span>
            <span>{k.data.turn}</span>
            <span>{k.data.type + "-" + k.data.group + "-" + k.data.turn}</span>
          </Link>
        ))}
    </div>
  );
};

export default function Modify() {
  const [name, setName] = useState("");

  const onChange = (e) => {
    const text = e.target.value;
    setName(text.replace(/ /g, ""));
  };

  return (
    <>
      <h1></h1>
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
