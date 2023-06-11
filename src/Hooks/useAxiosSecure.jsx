import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const baseUrl = "https://fll-school-serer.vercel.app/";
const axiosSecure = axios.create({
  baseURL: baseUrl,
});
export const useAxiosSecure = () => {
  const navigate = useNavigate();
  useEffect(() => {
    axiosSecure.interceptors.request.use(config => {
      const token = localStorage.getItem("access_token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    axiosSecure.interceptors.response.use(
      response => response,
      async error => {
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          //   await logOut();
          navigate("/login");
        }
        return Promise.reject(error);
      }
    );
  }, [navigate]);
  return [axiosSecure];
};
