import axios from 'axios';
const path = "http://localhost:8000"

export const fetchUserinfo = (userid) => {    
    return axios.get('http://localhost:8000/api/userinfo/'+userid)
    .then(result => {
        return result.data[0];
    })
    .catch(error => {
        console.error(error);

        throw error;
    })
   
    
};