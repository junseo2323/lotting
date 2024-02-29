"use client"

import React,{useState} from 'react'
import styles from '@/styles/Inputbox.module.scss'
import { IoMdCloudUpload } from "react-icons/io";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";

export const Spanbox = ({children}) => {
    return(
        <>
            <span className={styles.spancontainer}>
                {children}
            </span>
        </>
    )
}

export const Inputbox = (props) => {
    const type = props.type;
    const placeholder = props.placeholder;
    const onChange = props.onChange;
    const date_placeholder = props.date_placeholder;
    const name = props.name;

    return(
        <>
            <input
                className={styles.inputcontainer}
                data-placeholder={date_placeholder}
                type={type}
                onChange={onChange}
                placeholder={placeholder}
                {...props.register}
            />
        </>
    )
}
   
export const Inputbox_L = (props) => {
    const type = props.type;
    const placeholder = props.placeholder;
    const onChange = props.onChange;
    const date_placeholder = props.date_placeholder;
    const name = props.name;

    return(
        <>
            <input
                className={styles.inputcontainer_L}
                data-placeholder={date_placeholder}
                type={type}
                placeholder={placeholder}
                {...props.register}
            />
        </>
    )
}

export const Inputbox_M = (props) => {
    const type = props.type;
    const placeholder = props.placeholder;
    const onChange = props.onChange;
    const date_placeholder = props.date_placeholder;
    const name = props.name;

    return(
        <>
            <input
                className={styles.inputcontainer_M}
                data-placeholder={date_placeholder}
                type={type}
                placeholder={placeholder}
                {...props.register}
            />
        </>
    )
}

export const LoginInputbox = (props) => {
    const type = props.type;
    const placeholder = props.placeholder;
    const value = props.value;
    const onChange = props.onChange;
    const name = props.name;
    
    return(
        <>
            <input
                className={styles.logininputcontainer}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                {...props.register}
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
                {...props.register}
            />
        </>
    )
}


export const DropInputbox = (props) => {
    const optionlist = props.list;

    return(
        <select className={styles.Dropinputcontainer} {...props.register}>
            {
                optionlist.map((i)=>
                    <option value={i.value}>{i.item}</option>
                )
            }
        </select>
    )
}
const iconstyle = { fontSize: "3.4em", textAlign: "center",color: "#7152F3",paddingRight: "10%", paddingLeft: "7%" };

export const FileInputbox = (props) => {
    console.log(props)
    return(
        <label className={styles.Fileinputcontainer} for="file">
            <input type='file' id="file" onChange={props.handleChange} className={props.className}/>
            <p style={{textAlign: "center",margin: 0}}><IoMdCloudUpload  style={iconstyle}/></p>
            {props.isupload?<p>업로드완료</p>:<p>업로드하십쇼.</p>}
            <p className={styles.filetext}>드래그 드랍 또는 <span className={styles.texthighlight}>업로드 할 파일</span>을 선택해주세요</p>
            <p className={styles.filetypetext}>파일형식 : PDF, PNG, JPEG</p>
        </label>
    )
}
export const PostInputbox = (props) => {
    const [postnumber,setPostnumber] = useState("우편번호")
    const [post,setPost] = useState("주소")
    const [postdetail,setPostdetail] = useState("")
    const placeholder = props.placeholder

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
            <label>{placeholder}</label>
            <input
                className={styles.postcontainer}
                type="button"
                value={postnumber}
                onClick={getpost}
                placeholder="우편번호"
                {...props.register}
            />
            <input
                className={styles.postcontainer}
                type="button"
                value={post}
                onClick={getpost}
                placeholder="주소"
                {...props.register}
            />
            <input
                className={styles.inputcontainer}
                type="text"
                onChange={handleChange}
                value={postdetail}
                placeholder="주소상세"
                {...props.register}
            />
        </>
    )
}