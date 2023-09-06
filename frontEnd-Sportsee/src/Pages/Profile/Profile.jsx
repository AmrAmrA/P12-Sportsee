// import React, { useState, useEffect } from 'react';
// import Header from '../../Components/Header/Header'
// import { useParams } from "react-router-dom";
// import CallsApi from '../../Services/CallsAPI';

// function MyComponent() {
//   const { userId } = useParams();
//   const { userData} = CallsApi(userId);
//   console.log(userData.data.keyData)
// }

// export default function Profile() {
//   return (
//       <>
//       <Header />
//       <MyComponent />
//       </>
//   )
// }

import React, { useState, useEffect } from "react";
import Header from "../../Components/Header/Header";
import { useParams } from "react-router-dom";
import CallsApi from "../../Services/CallsAPI";

function MyComponent({children}) {
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
  }, [userId]); // Ajouter userId à la liste de dépendances
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
// Destruction de l'objet KeyData
const myArray = [];
myArray.push(
  data.data.keyData.calorieCount,
  data.data.keyData.proteinCount,
  data.data.keyData.carbohydrateCount,
  data.data.keyData.lipidCount
);
let [calorieCount, proteinCount, carbohydrateCount, lipidCount] = myArray;
  return (
    <div>
      <p>{...myArray}</p>
    </div>
  );
}

export default function Profile() {
  return (
    <>
      <Header />
      <MyComponent />
    </>
  );
}
