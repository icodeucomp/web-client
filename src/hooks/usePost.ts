"use client";

import { useState } from "react";

import toast from "react-hot-toast";

import request from "@/utils/api";

const usePost = <T extends unknown>(path: string) => {
  const [response, setResponse] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const execute = async (payload: any) => {
    setLoading(true);
    await request({ path, method: "POST", body: payload })
      .then((response) => {
        setResponse(response.data);
        toast.success(response.data.message as string);
      })
      .catch((err) => {
        setError(err instanceof Error ? err.message : "An error occurred");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { response, error, loading, execute };
};

export default usePost;
