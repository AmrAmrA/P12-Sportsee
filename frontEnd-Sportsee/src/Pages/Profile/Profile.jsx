import styles from "./__Profile.module.scss";
import { useParams } from "react-router-dom";
import Header from "../../Components/Header/Header";
import KeysData from "../../Components/KeysData/KeysData";
import Greetings from "../../Components/Greetings/Greetings";
import AverageScore from "../../Components/AverageScore/AverageScore";
import DailySessions from "../../Components/DailySessions/DailySessions";
import TypeActivities from "../../Components/TypeActivities/TypeActivities";
import Error from "../Error/Error";
import AverageSessions from "../../Components/AverageSessions/AverageSessions";
import { ErrorBoundary } from "react-error-boundary";

function MyComponent() {

  return (
    <ErrorBoundary fallback={<Error/>}>
            <main className={styles.main__profile}><Greetings/>
        <div className={styles.statsLayout}>
          <DailySessions/>
          <KeysData/>
        </div>
        <div className={styles.wraper__stats}>  

        <AverageSessions/>
          <TypeActivities/>
          <AverageScore/>
        </div>
   
      </main>
    </ErrorBoundary>
  );
}

export default function Profile() { 
  const { userId } = useParams();
  return userId == 12 || userId == 18 ? (
      <>
    <Header />
      <MyComponent />
      </>
    ) : (
      <Error/>);
}