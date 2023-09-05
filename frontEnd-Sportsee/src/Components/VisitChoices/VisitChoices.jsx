/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import "./__visitChoices.scss";
import { Link } from "react-router-dom";

function PathButton({ direction, userNumber }) {
  return (
    <Link to={direction}>
      <button>
        <span className="button__span">{userNumber}</span>
      </button>
    </Link>
  );
}

export default function VisitChoices() {
  return (
    <main>
      <h1 className="title">
        Bonjour <span className="title__span"> Visiteur</span>
      </h1>
      <p className="paragraph__choice">
        Quel profil souhaitez-vous sélectionner ?
      </p>    
        <PathButton direction="/user/12" userNumber="Utilisateur 12" />
        <PathButton direction="/user/18" userNumber="Utilisateur 18" />
        <PathButton direction="/user/Mock" userNumber="Utilisateur Mock" />
    </main>
  );
}