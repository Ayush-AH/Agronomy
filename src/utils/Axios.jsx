import axios from "axios";

const instance = axios.create({
  // baseURL:  "https://ago-backend-sua6.onrender.com",
  baseURL: "http://localhost:3001",
  withCredentials: true
})

export default instance