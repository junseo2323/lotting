import styles from "../../styles/Inputclient.module.scss";

const Inputclient = () =>{
    return(
        <div className={styles.Container}>
            <div className={styles.Mainbody}>
                <div className={styles.SearchBody}>
                    <div className={styles.SearchName}></div>
                    <div className={styles.SelectType}></div>
                </div>
                <div className={styles.InfoBody}>
                    <div className={styles.InfoCategory}>
                        <div className={styles.InfoCategory1}>
                            <div className={styles.InfoCategoryFont}>관리번호</div>
                        </div>
                        <div className={styles.InfoCategory2}>
                            <div className={styles.InfoCategoryFont}>성명</div>
                        </div>
                        <div className={styles.InfoCategory3}>
                            <div className={styles.InfoCategoryFont}>타입</div>
                        </div>
                        <div className={styles.InfoCategory4}>
                            <div className={styles.InfoCategoryFont}>군</div>
                        </div>
                        <div className={styles.InfoCategory5}>
                            <div className={styles.InfoCategoryFont}>순번</div>
                        </div>
                        <div className={styles.InfoCategory6}>
                            <div className={styles.InfoCategoryFont}>임시동호</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inputclient;