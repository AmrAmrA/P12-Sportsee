import styles from "./__Greetings.module.scss";
import fetchUserName from "../../Services/CallsAPI";
import { useParams } from "react-router-dom";
import useGreetingsApi from "./useGreetingsApi";
export default function Greetings() {
  const { userId } = useParams();
  const {data, loading} = useGreetingsApi(userId, fetchUserName)
  if (loading) return <div>Loading...</div>;
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