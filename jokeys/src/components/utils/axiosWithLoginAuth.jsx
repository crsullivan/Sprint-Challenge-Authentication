import axios from "axios";

export const axiosWithLoginAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "http://localhost:3300",
    headers: {
      Authorization: token
    }
  });
};
