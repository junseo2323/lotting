"use client"

import styles from "@/styles/Inputmoneysearch.module.scss";
import { Searchbox } from "@/components/Inputbox";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { searchnameState } from "@/utils/atom";
import { namesearchSelector } from "@/utils/selector";
import { useEffect, useState } from "react";
import { useRecoilValue, useRecoilValueLoadable, useSetRecoilState } from "recoil";
import { CgSearch } from "react-icons/cg";

const SearchList = ( name ) => {
  let searchname;
  if((name.name).length > 1) searchname = name.name;
  
  const setNameState = useSetRecoilState(searchnameState);
  let searchdata = useRecoilValueLoadable(namesearchSelector);
  useEffect(()=>{ setNameState(searchname)});

  switch (searchdata.state) {
    case 'loading':
      return <div></div>;

    case 'hasValue':
      return (
        <div>
          {(searchdata.contents).map((k) => (
            <Link key={k.id} className={styles.MainContainer} href={`/inputmoney/userinfo/${k.id}`}>
              <div className={styles.CategoryContent}>
                <div className={styles.CategoryBody1}>
                  <div className={styles.ContentFont}>{k.id}</div>
                </div>
                <div className={styles.CategoryBody1}>
                  <div className={styles.ContentFont}>{k.userinfo.name}</div>
                </div>
                <div className={styles.CategoryBody1}>
                  <div className={styles.ContentFont}>{k.type}{k.group}{k.turn}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      );
    case 'hasError':
      return <div>Error fetching data</div>
    default:
      return null;
  }
};

export default function Inputmoneysearch() {
  const [name, setName] = useState("");

  const onChange = (e) => {
    const text = e.target.value;
    setName(text.replace(/ /g, ""));
  };

  return (
      <div className={styles.SelectContainer}>
        <div className={styles.SelectTitleBody}>
          <div className={styles.SelectTitle}>
            <div className={styles.SelectTitleFont}>고객선택</div>
          </div>
          <div className={styles.Search}>
            <div className={styles.SearchBody}>
              <Searchbox type="text" placeholder="고객 성함" onChange={onChange} />
            </div>
            <div className={styles.SearchIcon}>
              <CgSearch style={{ width: '30px', height: '30px' }} />
            </div>
          </div>
          <div className={styles.CategoryBody}>
            <div className={styles.CategoryBody1}>
              <div className={styles.CategoryFont}>고객번호</div>
            </div>
            <div className={styles.CategoryBody1}>
              <div className={styles.CategoryFont}>성명</div>
            </div>
            <div className={styles.CategoryBody1}>
              <div className={styles.CategoryFont}>동호번호</div>
            </div>
          </div>
          <div className={styles.Line}></div>
          <SearchList name={name} />
          <div className={styles.Line}></div>
        </div>
      </div>
  );
}
