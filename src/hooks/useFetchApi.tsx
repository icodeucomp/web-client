import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";

interface UseAxiosResponse<T = any> {
  response: T | null;
  error: string | null;
  loading: boolean;
}

axios.defaults.baseURL = "https://catfact.ninja";

const useFetchApi = <T extends unknown>(url: string, method: string, contentType?: string): UseAxiosResponse => {
  const [response, setResponse] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const execute = async () => {
      try {
        setLoading(true);
        const response: AxiosResponse<T> = await axios(url, {
          method,
          timeout: 10000,
          headers: {
            "Content-Type": contentType || "application/json",
          },
        });
        setResponse(response.data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        setResponse(null);
      } finally {
        setLoading(false);
      }
    };

    execute();
  }, [url, method, contentType]);

  return { response, error, loading };
};

export default useFetchApi;
