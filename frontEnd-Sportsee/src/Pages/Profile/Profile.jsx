import Error from "../Error/Error";
import styles from "./__Profile.module.scss";
import Header from "../../Components/Header/Header";
import { ErrorBoundary } from "react-error-boundary";
import KeysData from "../../Components/KeysData/KeysData";
import Greetings from "../../Components/Greetings/Greetings";
import AverageScore from "../../Components/AverageScore/AverageScore";
import DailySessions from "../../Components/DailySessions/DailySessions";
import TypeActivities from "../../Components/TypeActivities/TypeActivities";
import AverageSessions from "../../Components/AverageSessions/AverageSessions";
import VerticalList from "../../Components/VerticaList/VerticalList";

function MyComponent() {
  return (
    <ErrorBoundary fallback={<Error />}>
      <main className={styles.main__profile}>
        <VerticalList />
      <div className={styles.content__wrapper}>
      <Greetings />
        <div className={styles.statsLayout}><DailySessions /><KeysData /></div>
        <div className={styles.wraper__stats}><AverageSessions /><TypeActivities /><AverageScore />
        </div>
      </div>
      </main>
    </ErrorBoundary>
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