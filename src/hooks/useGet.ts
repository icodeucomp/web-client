"use client";

import { useState, useEffect } from "react";

import request from "@/utils/api";

const useGet = <T extends unknown>(path: string) => {
  const [response, setResponse] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await request({ path, method: "GET" })
        .then((response) => {
          setResponse(response.data);
        })
        .catch((err) => {
          setError(err instanceof Error ? err.message : "An error occurred");
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchData();
  }, [path]);

  return { response, error, loading };
};

export default useGet;
