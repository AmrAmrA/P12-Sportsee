import { useState, useEffect } from "react";
export const useDailyData = (userId, FetchActivityData) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await FetchActivityData(userId);
        setData(result);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };
    fetchData();
  }, [FetchActivityData, userId]);
  return { data, loading, error };
};