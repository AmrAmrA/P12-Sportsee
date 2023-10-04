import { useState, useEffect } from "react";

export default function useKeysDataApi(userId, fetchUserKeysData) {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const result = await fetchUserKeysData(userId);
          setData(result);
        } catch (error) {
          setError(error);
        }
        setLoading(false);
      };
      fetchData();
    }, [userId, fetchUserKeysData]);
    return{data,loading, error}
}