import { useState, useEffect } from "react";
export const useAverageScoreData = (userId, FetchUserScore) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await FetchUserScore(userId);
        setData(result);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };
    fetchData();
  }, [FetchUserScore, userId]);
  return { data, loading, error };
};