/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import styles from "./__visitChoices.module.scss";
import { Link } from "react-router-dom";

function PathButton({ direction, userNumber }) {
  return (
    <Link to={direction}>
      <button className={styles.button}>
        <span className={styles.button__span}>{userNumber}</span>
      </button>
    </Link>
  );
}

export default function VisitChoices() {
  return (
    <main className= {styles.main__choices}>
      <h1 className={styles.title}>
        Bonjour <span className={styles.title__span}> Visiteur</span>
      </h1>
      <p className={styles.paragph__choice}>
        Quel profil souhaitez-vous sélectionner ?
      </p>    
        <PathButton direction="/user/12" userNumber="Utilisateur 12" />
        <PathButton direction="/user/18" userNumber="Utilisateur 18" />
        <PathButton direction="/user/Mock" userNumber="Utilisateur Mock" />
    </main>
  );
}