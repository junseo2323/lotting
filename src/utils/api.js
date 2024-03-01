import axios from 'axios';
const path = "http://localhost:8000"

export const createFile = (files) => {
    console.log("업로드 파일 : " ,files)
    
    return axios.post(path+"/upload",{
        file: files
    })
}

export const fetchLogin = (username,password) => {
    return axios.post(path+"/api/auth/signin")
}

export const fetchUserinfo = (userid) => {    
    return axios.get(path+'/api/userinfo/'+userid)
    .then(result => {
        return result.data[0];
    })
    .catch(error => {
        console.error(error);
        throw error;
    })  
};

export const fetchNameSearch = (username) => {
    return axios.get(path+'/api/searchname/'+username)
    .then(result => {
        return result.data;
    })
    .catch(error => {
        console.log(error);
        throw error;
    })  
};

