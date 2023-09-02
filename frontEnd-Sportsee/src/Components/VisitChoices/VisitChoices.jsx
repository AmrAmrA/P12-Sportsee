import React from "react";
import "./__visitChoices.scss";
export default function VisitChoices() {
  return (
    <main>
      <h1 className="title">
        Bonjour <span className="title__span"> Visiteur</span>
      </h1>
      <p className="paragraph__choice">Quel profil souhaitez-vous sélectionner ? </p>
      <button>
        <span className="button__span">Utilisateur 12</span>

      </button>
      <button>

        <span className="button__span">Utilisateur 18</span>
      </button>
      <button>
      <span className="button__span">Utilisateur Mock</span>
      </button>
    </main>
  );
}
