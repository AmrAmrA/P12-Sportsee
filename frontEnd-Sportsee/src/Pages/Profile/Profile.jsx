import styles from "./__Profile.module.scss";
import Header from "../../Components/Header/Header";
import KeysData from "../../Components/KeysData/KeysData";
import Greetings from "../../Components/Greetings/Greetings";
import AverageScore from "../../Components/AverageScore/AverageScore";
import DailySessions from "../../Components/DailySessions/DailySessions";
import AverageSessions from "../../Components/AverageSessions/AverageSessions";

function MyComponent() {
  return (
      <main className={styles.main__profile}><Greetings/>
        <div className={styles.statsLayout}>
          <DailySessions/>
          <KeysData/>
        </div>
        <div className={styles.wraper__stats}>  

        <AverageSessions/>
          <AverageScore/>
        </div>
   
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
