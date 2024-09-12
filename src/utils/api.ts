import { UseAxiosInstance } from "@/types/response-api";
import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
  baseURL: "https://icodeu-backend-vwixvuygpq-as.a.run.app/api/v1",
});

const request = async ({ path, method, body }: UseAxiosInstance) => {
  const options: AxiosRequestConfig = {
    url: path,
    method,
    data: body,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };

  return axiosInstance(options);
};

export default request;
