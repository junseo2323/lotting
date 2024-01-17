import Mininav from "@/components/Mininav"
import styles from "@/styles/Userinfo.module.scss"

const dummydata = {
  "id": 122321,
  "typeid": 1,
  "classification": 1,
  "type": "84A",
  "group": "사",
  "turn": 1,
  "tempinfo": "84A-사-1",
  "registerturn" : "1차-1",
  "order": {
    "1차": {
      "findate": null,
      "price": null,
      "price2": null,
      "discountprice": null,
      "deleteprice": null,
      "ext": null,
      "sumprice": null
    },
    "2차": {
      "findate": null,
      "price": null,
      "price2": null,
      "discountprice": null,
      "deleteprice": null,
      "ext": null,
      "sumprice": null
    },
    "3차": {
      "findate": null,
      "price": null,
      "price2": null,
      "discountprice": null,
      "deleteprice": null,
      "ext": null,
      "sumprice": null
    }
  },
  "submitdate": "2024-01-11T00:00:00.000Z",
  "registerdate": "2024-12-27T00:00:00.000Z",
  "resgisterprice": 565435000,
  "userinfo": {
    "name": "oh jun seo",
    "firstid": "030523",
    "secondid": "1234567",
    "phone": "01034307314",
    "getpost": "인천광역시 중구 운서동 신도시남로 15 금호베스트빌 101동 101호",
    "email": "hunseol03@gmail.com",
    "bank": "신한은행",
    "bankid": "110479111111",
    "bankwho": "오준서",
    "bankwhere": "무궁화신탁",
    "postnumber": 12345,
    "post": "인천광역시 중구 운서동 신도시남로 15 금호베스트빌 101동 101호",
    "come": "친구/지인"
  },
  "data": {
    "type": null,
    "grout": null,
    "turn": null,
    "submitturn": null,
    "submitdate": null,
    "trustsubmitdate": null,
    "submitprice": null,
    "earnestdate": null,
    "earnest": null
  },
  "loan": {
    "loandate": null,
    "price1": null,
    "price2": null,
    "selfdate": null,
    "price3": null,
    "price4": null,
    "sumprice": null
  },
  "fileinfo": {
    "file1": null,
    "file2": null,
    "file3": null,
    "file4": null,
    "file5": null,
    "file6": null,
    "file7": null,
    "file8": null
  },
  "ext": {
    "manage": "1",
    "managemain": "2",
    "manageteam": "1",
    "managename": "오준서",
    "ext": "기타 정보입니다."
  },
  "cancel": {
    "canceldate": null,
    "paybackdate": null,
    "paybackprice": null
  }
}

export default function Search() {
  
    return (
        <>
          <h1></h1>
          <Mininav />

          <div className={styles.container}>
            <span className={styles.title}>관리번호</span>
            <span className={styles.title}>성명</span>
            <span className={styles.title}>주민번호</span>
            <span className={styles.title}>이메일</span>
            
            <span>{dummydata.id}</span>
            <span>{dummydata.userinfo.name}</span>
            <span>{dummydata.userinfo.firstid}-{dummydata.userinfo.secondid}</span>
            <span>{dummydata.userinfo.email}</span>

            <span className={styles.title}>휴대전화</span>
            <span className={styles.title}>타입</span>
            <span className={styles.title}>군</span>
            <span className={styles.title}>순번</span>
            
            <span>{dummydata.userinfo.phone}</span>
            <span>{dummydata.type}</span>
            <span>{dummydata.group}</span>
            <span>{dummydata.turn}</span>

            <span className={styles.title}>가입차순</span>
            <span className={styles.title}>신탁사제출</span>
            <span className={styles.title}>가입일자</span>
            <span className={styles.title}>가입가</span>
            
            <span>{dummydata.registerturn}</span>
            <span>{dummydata.submitdate.slice(0,10)}</span>
            <span>{dummydata.registerdate.slice(0,10)}</span>
            <span>{dummydata.resgisterprice.toLocaleString('ko-KR')}₩</span>

            <span className={styles.title}>우편번호</span>
            <span className={styles.title}>주소</span>
            <span className={styles.title}>우편물주소</span>
            <span className={styles.title}></span>
            
            <span>{dummydata.userinfo.postnumber}</span>
            <span>{dummydata.userinfo.post}</span>
            <span>{dummydata.userinfo.getpost}</span>
            <span></span>

            <span className={styles.title}>은행명</span>
            <span className={styles.title}>계좌번호</span>
            <span className={styles.title}>예금주</span>
            <span className={styles.title}>신탁사</span>
            
            <span>{dummydata.userinfo.bank}</span>
            <span>{dummydata.userinfo.bankid}</span>
            <span>{dummydata.userinfo.bankwho}</span>
            <span>{dummydata.userinfo.bankwhere}</span>

            <span className={styles.title}>총괄</span>
            <span className={styles.title}>본부</span>
            <span className={styles.title}>팀</span>
            <span className={styles.title}>담당자</span>
            
            <span>{dummydata.ext.manage}</span>
            <span>{dummydata.ext.managemain}</span>
            <span>{dummydata.ext.manageteam}</span>
            <span>{dummydata.ext.managename}</span>
          </div>
        </>
      )
  }
  