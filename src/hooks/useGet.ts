"use client";

import { useState, useEffect } from "react";

import { AxiosResponse } from "axios";

import request from "@/utils/api";

const useGet = <T extends unknown>(path: string) => {
  const [response, setResponse] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const execute = async () => {
      setLoading(true);
      try {
        const response: AxiosResponse<T> = await request({ path, method: "GET" });
        setResponse(response.data);
        setError(null);
      } catch (err: any) {
        setError(err instanceof Error ? err.message : "An error occurred");
        setResponse(null);
      } finally {
        setLoading(false);
      }
    };

    execute();
  }, [path]);

  return { response, error, loading };
};

export default useGet;
