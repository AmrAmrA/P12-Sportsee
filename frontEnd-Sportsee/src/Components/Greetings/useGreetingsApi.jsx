import { useState, useEffect } from "react";
export default function useGreetingsApi(userId, fetchUserName) {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const result = await fetchUserName(userId);
            setData(result);
          } catch (error) {
            setError(true);
          }
          setLoading(false);
        };
        fetchData();
      }, [userId, fetchUserName]); 
      return { data, loading, error };
}