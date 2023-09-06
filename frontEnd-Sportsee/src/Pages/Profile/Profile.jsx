import React, { useState, useEffect } from "react";
import Header from "../../Components/Header/Header";
import styles from "./__Profile.module.scss";
import { useParams } from "react-router-dom";
import Greetings from "../../Components/Greetings/Greetings";
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
  let firstName = data.data.userInfos.firstName;
  console.log(firstName);
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
      <main className={styles.main__profile}>
        <Greetings 
        userName={firstName}
        />

      </main>
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
