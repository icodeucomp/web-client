import axios, { AxiosRequestConfig } from "axios";

const API = async <T>(endpoint: string, options?: AxiosRequestConfig): Promise<T> => {
  try {
    const response = await axios(`https://icodeu-backend-vwixvuygpq-uc.a.run.app/api/v1${endpoint}`, options);
    return response.data;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : "An error occurred");
  }
};

export default API;
