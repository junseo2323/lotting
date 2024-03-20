import axios from 'axios';
const path = "http://3.39.167.172:8000"

export const newIdGenerate = () => {
    return axios.get(path+"/api/generateid")
    .then(result => {
        return result.data.nextid;
    })
    .catch(error => {
        console.error(error);
        throw error;
    })  
}

export const createFile = (files) => {
    console.log("업로드 파일 : " ,files)
    const formData = new FormData()
    files.forEach(data => {
        formData.append('file', data );
    });

    return axios.post(path+'/upload', formData, {
        headers: {'Content-Type': 'multipart/form-data', charset: 'utf-8'},
    });

}

export const createUser = (data) => {
    console.log("생성하는 유저의 정보 : ", data);
    return axios.post(path+'/api/createuser',data);
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

export const searchFinchasu = (userid) => {
    return axios.get(path+"/api/chasuinit/fin/"+userid)
    .then(result => {
        return result.data;
    })
    .catch(error => {
        console.error(error);
        throw error;
    })
}

export const searchPrechasu = (userid) => {
    return axios.get(path+"/api/chasuinit/pre/"+userid)
    .then(result => {
        return result.data;
    })
    .catch(error => {
        console.error(error);
        throw error;
    })
}

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

export const fetchLoanInit = (userid) => {
    return axios.get(path+"/api/chasuinit/loan/"+userid)
    .then(result => {
        console.log(userid)
        console.log(result.data)
        return result.data;
    })
    .catch(error => {
        console.log(error);
        throw error;
    })
}