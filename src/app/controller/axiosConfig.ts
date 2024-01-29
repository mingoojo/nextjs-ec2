import axios from "axios";

const url = "http://localhost:3000"

const apiAxios = axios.create({
  baseURL: url,
  timeout: 5000,
});

export default apiAxios