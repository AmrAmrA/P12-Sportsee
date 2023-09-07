import Header from "../../Components/Header/Header";
import styles from "./__Profile.module.scss";
import Greetings from "../../Components/Greetings/Greetings";
import KeysData from "../../Components/KeysData/KeysData";
import DailySessions from "../../Components/DailySessions/DailySessions";

function MyComponent() {
  return (
      <main className={styles.main__profile}><Greetings/>
        <div className={styles.statsLayout}>
          <DailySessions/>
          <KeysData/>
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
