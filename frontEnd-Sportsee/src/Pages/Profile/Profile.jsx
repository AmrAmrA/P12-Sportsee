import Header from "../../Components/Header/Header";
import styles from "./__Profile.module.scss";
import Greetings from "../../Components/Greetings/Greetings";
import KeysData from "../../Components/KeysData/KeysData";
import DailySessions from "../../Components/DailySessions/DailySessions";
import AverageSessions from "../../Components/AverageSessions/AverageSessions";

function MyComponent() {
  return (
      <main className={styles.main__profile}><Greetings/>
        <div className={styles.statsLayout}>
          <DailySessions/>
          <KeysData/>
        </div>
          <AverageSessions/>
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
