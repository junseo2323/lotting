"use client";

import { Inputbox, DropInputbox } from "@/components/Inputbox";
import styles from "@/styles/Search.module.scss";
import { searchnameState, searchnumberState } from "@/utils/atom";
import { namesearchSelector } from "@/utils/selector";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRecoilValueLoadable, useSetRecoilState } from "recoil";
import { typelist, grouplist, turnlist } from "@/components/droplistdata";
import { deleteUser } from "@/utils/api";
import { ModifyButton } from "@/components/Button";
import withAuth from "@/utils/hoc/withAuth";

const SearchList = ({ name, number }) => {
  const setNameState = useSetRecoilState(searchnameState);
  const setNumberState = useSetRecoilState(searchnumberState);
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });

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
    return <div>Error loading data</div>;
  }

  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const sortedData = () => {
    let sortableData = [...searchdata.contents];

    if (sortConfig.key !== null) {
      sortableData.sort((a, b) => {
        let aValue, bValue;

        if (sortConfig.key === "id") {
          aValue = parseInt(a[sortConfig.key], 10);
          bValue = parseInt(b[sortConfig.key], 10);
        } else {
          aValue = a.data[sortConfig.key] || a.userinfo[sortConfig.key];
          bValue = b.data[sortConfig.key] || b.userinfo[sortConfig.key];
        }

        if (aValue < bValue) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }

    return sortableData;
  };

  const handleDelete = async (id) => {
    console.log("Deleting user with id:", id);
    try {
      await deleteUser(id);
      alert("사용자가 성공적으로 삭제되었습니다.");
    } catch (error) {
      console.error("Error deleting user:", error);
      alert("사용자 삭제 중 오류가 발생했습니다.");
    }
  };

  return (
    <div>
      <div className={styles.tablecontainer}>
        <span onClick={() => handleSort("id")}>관리번호</span>
        <span onClick={() => handleSort("name")}>성명</span>
        <span onClick={() => handleSort("type")}>타입</span>
        <span onClick={() => handleSort("group")}>군</span>
        <span onClick={() => handleSort("turn")}>순번</span>
        <span onClick={() => handleSort("submitturn")}>가입 차순</span>
        <span onClick={() => handleSort("submitdate")}>가입 날짜</span>
        <span>임시동호</span>
      </div>
      {searchdata.state === "hasValue" &&
        sortedData()
          .filter((k) => k.userinfo && k.data)
          .map((k) => {
            console.log(k);
            return (
              <div className={styles.maincontainer} key={k.id}>
                <Link href={"/modify/" + k.id} className={styles.link}>
                  <div className={styles.rowContainer}>
                    <div className={styles.unitContainer}>{k.id}</div>
                    <div className={styles.unitContainer}>
                      {k.userinfo?.name || "N/A"}
                    </div>
                    <div className={styles.unitContainer}>
                      {k.data?.type || "N/A"}
                    </div>
                    <div className={styles.unitContainer}>
                      {k.data?.group || "N/A"}
                    </div>
                    <div className={styles.unitContainer}>
                      {k.data?.turn || "N/A"}
                    </div>
                    <div className={styles.unitContainer}>
                      {k.data?.submitturn || "N/A"}
                    </div>
                    <div className={styles.unitContainer}>
                      {k.data?.submitdate.slice(0, 10) || "N/A"}
                    </div>
                    <div
                      className={styles.unitContainer}
                    >{`${k.data?.type || "N/A"}-${k.data?.group || "N/A"}-${k.data?.turn || "N/A"}`}</div>
                  </div>
                </Link>
                <ModifyButton onClick={() => handleDelete(k.id)}>
                  <div className={styles.CBBottonFont}>삭제</div>
                </ModifyButton>
              </div>
            );
          })}
    </div>
  );
};

function Modify() {
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

  return (
    <>
      <h1></h1>
      <div className={styles.flexContainer}>
        <Inputbox type="text" placeholder="고객 성함" onChange={onNameChange} />
        <Inputbox
          type="text"
          placeholder="관리번호"
          onChange={onNumberChange}
        />
        <DropInputbox list={typelist} />
        <DropInputbox list={grouplist} />
        <DropInputbox list={turnlist} />
      </div>
      {typeof window !== "undefined" && (
        <SearchList name={name} number={number} />
      )}
    </>
  );
}

export default withAuth(Modify);
