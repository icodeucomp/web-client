"use client";

import { useState } from "react";

import { AxiosResponse } from "axios";

import request from "@/utils/api";

const usePost = <T extends unknown>(path: string) => {
  const [response, setResponse] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const execute = async (payload: any) => {
    setLoading(true);
    try {
      const response: AxiosResponse<T> = await request({ path, method: "POST", body: payload });
      setResponse(response.data);
      setError(null);
    } catch (err: any) {
      setError(err instanceof Error ? err.message : "An error occurred");
      setResponse(null);
    } finally {
      setLoading(false);
    }
  };

  return { response, error, loading, execute };
};

export default usePost;
