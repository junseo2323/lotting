"use client"

import styles from "@/styles/Inputmoneysearch.module.scss";
import { Searchbox } from "@/components/Inputbox"
import { useForm } from "react-hook-form"
import {CgSearchButton} from "@/components/Button"
import { BsBagDash } from "react-icons/bs";
import { BsDatabase } from "react-icons/bs";
import { CgSearch } from "react-icons/cg";

export default function Inputmoneysearch() {
    const { register,watch,handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
      };

  return(
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.SelectContainer}>
            <div className={styles.SelectTitleBody}>
                <div className={styles.SelectTitle}>
                    <div className={styles.SelectTitleFont}>고객선택</div>
                </div>
                <div className={styles.Search}>
                    <div className={styles.SearchBody}>
                        <Searchbox type="text" placeholder="고객성함" register={register('userinfo.name')} />                    
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
                <div className={styles.CategoryContent}>
                    <div className={styles.CategoryBody1}>
                        <div className={styles.ContentFont}>12344</div>
                    </div>
                    <div className={styles.CategoryBody1}>
                        <div className={styles.ContentFont}>이승준</div>
                    </div>
                    <div className={styles.CategoryBody1}>
                        <div className={styles.ContentFont}>84A-사-1</div>
                    </div>
                </div>
                <div className={styles.Line}></div>
                
                <div className={styles.CategoryContent}>
                    <div className={styles.CategoryBody1}>
                        <div className={styles.ContentFont}>12344</div>
                    </div>
                    <div className={styles.CategoryBody1}>
                        <div className={styles.ContentFont}>이승준</div>
                    </div>
                    <div className={styles.CategoryBody1}>
                        <div className={styles.ContentFont}>84A-사-1</div>
                    </div>
                </div>
                <div className={styles.Line}></div>

                <div className={styles.CategoryContent}>
                    <div className={styles.CategoryBody1}>
                        <div className={styles.ContentFont}>12344</div>
                    </div>
                    <div className={styles.CategoryBody1}>
                        <div className={styles.ContentFont}>이승준</div>
                    </div>
                    <div className={styles.CategoryBody1}>
                        <div className={styles.ContentFont}>84A-사-1</div>
                    </div>
                </div>
                <div className={styles.Line}></div>

                <div className={styles.CategoryContent}>
                    <div className={styles.CategoryBody1}>
                        <div className={styles.ContentFont}>12344</div>
                    </div>
                    <div className={styles.CategoryBody1}>
                        <div className={styles.ContentFont}>이승준</div>
                    </div>
                    <div className={styles.CategoryBody1}>
                        <div className={styles.ContentFont}>84A-사-1</div>
                    </div>
                </div>
                <div className={styles.Line}></div>
                
            </div>
        </div>
        </form>
  )
};

