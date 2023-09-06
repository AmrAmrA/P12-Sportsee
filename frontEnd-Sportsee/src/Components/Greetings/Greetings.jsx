import React from "react";
import styles from "./__Greetings.module.scss";

export default function Greetings({ userName }) {
  return (
    <div className={styles.greetings}>
      <p className={styles.greetings__hello}>
        Bonjour <span className= {styles.greetings__username}> {userName} </span>
      </p>
      <p className= {styles.greetings__congratulations}>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
}
