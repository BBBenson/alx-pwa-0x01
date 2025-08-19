import { useEffect, useState } from 'react';
import axios from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const useFetchData = <T>(endpoint: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching:", `${BASE_URL}${endpoint}`, "with key:", API_KEY);
        const res = await axios.get(`${BASE_URL}${endpoint}`, {
          params: { api_key: API_KEY },
        });
        setData(res.data as T);
      } catch (err: any) {
        console.error("Fetch error:", err.response?.data || err.message);
        setError(err.response?.data?.status_message || 'Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, loading, error };
};

export default useFetchData;
