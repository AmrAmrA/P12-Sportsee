import { useState, useEffect } from "react";
import styles from "./__Greetings.module.scss";
import CallsApi from "../../Services/CallsAPI";
import { useParams } from "react-router-dom";

export default function Greetings() {
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
  }, [userId]); 
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  const firstName = data.data.userInfos.firstName;
  return (
    <div className={styles.greetings}>
      <p className={styles.greetings__hello}>
        Bonjour <span className= {styles.greetings__username}> {firstName}  </span>
      </p>
      <p className= {styles.greetings__congratulations}>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
}