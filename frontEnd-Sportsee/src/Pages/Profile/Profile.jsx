import Header from "../../Components/Header/Header";
import styles from "./__Profile.module.scss";
import Greetings from "../../Components/Greetings/Greetings";
import KeysData from "../../Components/KeysData/KeysData";

function MyComponent() {
  return (
      <main className={styles.main__profile}><Greetings/>
        <div className={styles.statsLayout}><KeysData/></div>
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
