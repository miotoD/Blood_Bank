import axios from "axios";
import { error } from "console";

const axiosClient = axios.create({
  baseURL: "http://localhost:3001",
});

axiosClient.interceptors.request.use(
  async (config) => {
    const token = await localStorage.getItem("accessToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    if (!token) {
      alert("Please Login First!");
    }

    return config;
  },
  (error) => {
    console.log(" Login first!", error);
  }
);

axiosClient.interceptors.response.use(
  (response) => {
    console.log(" Interceptor successs");
    console.log(response.data);
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("accessToken");
    }
    return Promise.reject(error);
  }
);

export default axiosClient;
