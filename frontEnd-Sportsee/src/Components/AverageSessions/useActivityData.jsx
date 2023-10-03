import { useState, useEffect } from "react";
import AverageSessionsAPI from "../../Services/AverageSessionsAPI";
export const useActivityData = (userId) => {
  const [data, setData] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await AverageSessionsAPI(userId);
        setData(result);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [userId]);

  return { data, loading, error };
};
