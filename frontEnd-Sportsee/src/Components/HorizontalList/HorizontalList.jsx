import React from "react";
import logo from "../assets/logoSportSee.png";
import styles from "./__horizontal.module.scss";

export default function HorizontalList() {
  return (
    <nav>
      <ul className={styles.navigation__list}>
        <li className={styles.navigation__list__item}>
          <img
            src={logo}
            alt="Sportsee logo"
            className={styles.navigation__list__logo}
          />
        </li>
        <li className={styles.navigation__list__item}>Accueil </li>
        <li className={styles.navigation__list__item}>Profil</li>
        <li className={styles.navigation__list__item}>Réglage</li>
        <li className={styles.navigation__list__item}>Communauté </li>
      </ul>
    </nav>
  );
}
