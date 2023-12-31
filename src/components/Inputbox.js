"use client"

import React,{useState} from 'react'
import styles from '@/styles/Inputbox.module.scss'
import { IoMdCloudUpload } from "react-icons/io";

export const Inputbox = (props) => {
    const type = props.type;
    const placeholder = props.placeholder;
    const value = props.value;
    const onChange = props.onChange;
    return(
        <>
            <input
                className={styles.inputcontainer}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </>
    )
}

export const LongInputbox = (props) => {
    const type = props.type;
    const placeholder = props.placeholder;
    return(
        <>
            <input
                className={styles.Longinputcontainer}
                type={type}
                placeholder={placeholder}
            />
        </>
    )
}


export const DropInputbox = (props) => {
    const type = props.type;
    const placeholder = props.placeholder;
    return(
        <select className={styles.Dropinputcontainer}>
            <option value="test">테스트1</option>
            <option value="test">테스트2</option>
            <option value="test">테스트3</option>
        </select>
    )
}
const iconstyle = { fontSize: "3.4em", textAlign: "center",color: "#7152F3",paddingRight: "10%", paddingLeft: "7%" };

export const FileInputbox = (props) => {

    return(
        <label className={styles.Fileinputcontainer} for="file">
            <input type='file'id="file"/>
            <p style={{textAlign: "center",margin: 0}}><IoMdCloudUpload  style={iconstyle}/></p>
            <p className={styles.filetext}>드래그 드랍 또는 <span className={styles.texthighlight}>업로드 할 파일</span>을 선택해주세요</p>
            <p className={styles.filetypetext}>파일형식 : PDF, PNG, JPEG</p>
        </label>
    )
}
export const PostInputbox = (props) => {
    const [postnumber,setPostnumber] = useState("우편번호")
    const [post,setPost] = useState("주소")
    const [postdetail,setPostdetail] = useState("")

    const getpost = () => {
        new daum.Postcode( {
          oncomplete: function( data ) {
            setPostnumber(data.zonecode)
            setPost(data.roadAddress)
        }
        } ).open();
    }

    const handleChange = e => {
        setPostdetail(e.target.value)
    }

    return(
        <>
            <input
                className={styles.postcontainer}
                type="button"
                value={postnumber}
                onClick={getpost}
                placeholder="우편번호"
            />
            <input
                className={styles.postcontainer}
                type="button"
                value={post}
                onClick={getpost}
                placeholder="주소"
            />
            <input
                className={styles.inputcontainer}
                type="text"
                onChange={handleChange}
                value={postdetail}
                placeholder="주소상세"
            />
        </>
    )
}