import React, { useState, useEffect } from 'react';
import Header from '../../Components/Header/Header'
import { useParams } from "react-router-dom";
import CallsApi from '../../Services/CallsAPI';

function MyComponent() {
  const [data, setData] = useState({}); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { userId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await CallsApi(userId);
        setData(result);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };
    fetchData();
  }, [userId]);  // Ajouter userId à la liste de dépendances

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      {console.log(data.keyData)}
    </div>
  );
}

export default function Profile() {
  return (
      <>
      <Header />
      <MyComponent />
      </>
  )
}