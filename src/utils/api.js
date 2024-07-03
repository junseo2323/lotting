import axios from "axios";
//const path = "http://3.39.167.172:8000"
const path = "http://localhost:8000";

export const newIdGenerate = () => {
  return axios
    .get(path + "/api/generateid")
    .then((result) => {
      return result.data.nextid;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};

export const createFile = (files) => {
  console.log("업로드 파일 : ", files);
  const formData = new FormData();
  files.forEach((data) => {
    formData.append("file", data);
  });

  return axios.post(path + "/api/upload", formData, {
    headers: { "Content-Type": "multipart/form-data", charset: "utf-8" },
  });
};

export const downloadFile = async (id, filename) => {
  try {
    const response = await axios.post(
      path + "/api/download",
      { id, filename },
      {
        responseType: "blob",
      }
    );

    // 파일 다운로드
    const name = response.headers["content-disposition"]
      .split("filename=")[1]
      .replace(/"/g, "");
    console.log(response);
    console.log(name);
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", name);
    link.style.cssText = "display:none";
    document.body.appendChild(link);
    link.click();
    link.remove();
  } catch (error) {
    console.error("Error downloading file:", error);
    // 오류 처리
  }
};

export const createUser = (data) => {
  console.log("생성하는 유저의 정보 : ", data);
  return axios.post(path + "/api/createuser", data);
};

export const fetchLogin = (username, password) => {
  return axios.post(path + "/api/auth/signin");
};

export const fetchUserinfo = (userid) => {
  return axios
    .get(path + "/api/userinfo/" + userid)
    .then((result) => {
      return result.data[0];
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};

export const searchFinchasu = (userid) => {
  return axios
    .get(path + "/api/chasuinit/fin/" + userid)
    .then((result) => {
      return result.data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};

export const searchPrechasu = (userid) => {
  return axios
    .get(path + "/api/chasuinit/pre/" + userid)
    .then((result) => {
      return result.data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};

export const fetchNameSearch = (username) => {
  return axios
    .get(path + "/api/searchname/" + username)
    .then((result) => {
      return result.data;
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
};

export const fetchLoanInit = (userid) => {
  return axios
    .get(path + "/api/chasuinit/loan/" + userid)
    .then((result) => {
      return result.data;
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
};

export const fetchChasuData = (userid, chasu) => {
  return axios
    .get(path + "/api/chasu/" + userid + "/" + chasu)
    .then((result) => {
      return result.data[0];
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
};

export const fetchChasuUpdate = (userid, data, callback) => {
  axios
    .put(path + "/api/chasuupdate/" + userid, data)
    .then(() => {
      callback();
    })
    .catch((error) => {
      console.error("Error updating data:", error);
    });
};

export const fetchLoanUpdate = (userid, data, callback) => {
  axios
    .put(path + "/api/loanupdate/" + userid, data)
    .then(() => {
      callback();
    })
    .catch((error) => {
      console.error("Error updating data: ", error);
    });
};
