import { useEffect, useState } from "react";
export const UseActivitiesData = (userId, FetchUserActivities) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await FetchUserActivities(userId);
        setData(result);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };
    fetchData();
  }, [FetchUserActivities, userId]);
  return { data, loading, error };
}
