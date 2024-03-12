import axios from "axios";
// let BASE_URL = "http://localhost:5004";
let BASE_URL = "https://natneli.github.io/VJ-Project/";

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
});

export { axiosInstance };
