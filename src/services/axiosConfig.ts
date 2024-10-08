import axios from "axios";
import { CONFIG as configuration } from "../../config";

const isTokenExpired = (token: string): boolean => {
  try {
    const payloadBase64 = token.split(".")[1];
    const decodedPayload = JSON.parse(atob(payloadBase64)); 
    const currentTime = Date.now() / 1000; 

    return decodedPayload.exp < currentTime;
  } catch (error) {
    return true;
  }
};

const apiClient = axios.create({
  baseURL: configuration.API_URL,
});

apiClient.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("authToken");

    if (token && !config.url?.includes("/api/Auth/login")) {
      if (isTokenExpired(token)) {
        sessionStorage.removeItem("authToken");
        sessionStorage.removeItem("userRole");
        return Promise.reject({ message: "Token expired", code: "TOKEN_EXPIRED" });
      }
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
