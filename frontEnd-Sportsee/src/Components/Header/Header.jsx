import React, { useState, useEffect } from 'react';
import "./__header.scss";
import logo from "./assets/logoSportSee.png";
import meditation from "./assets/meditation.png";
import swimming from "./assets/swimming.png";
import cycling from "./assets/cycling.png";
import bodyBuilding from "./assets/bodyBuilding.png";

export default function Header() {
  return (
    <>
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__list__item">
          <img src= {logo} alt="Sportsee logo" 
          className="navigation__list__logo"
          />
        </li>
        <li className="navigation__list__item">Accueil</li>
        <li className="navigation__list__item">Profil</li>
        <li className="navigation__list__item">Réglage</li>
        <li className="navigation__list__item">Communauté</li>
      </ul>
    </nav>

    <nav className="navigationTwo">
      <ul className="navigationTwo__list">
        <li className="navigationTwo__list__item"><img src={meditation} alt="
A character meditating" /></li>
        <li className="navigationTwo__list__item">
          <img src= {swimming} alt="A character swimming" />
        </li>
        <li className="navigationTwo__list__item">
          <img src= {cycling} alt="A character Cycling" />
        </li>
        <li className="navigationTwo__list__item">
          <img src={bodyBuilding} alt="A red dumbell" />
        </li>
      </ul>
        <p className="navigationTwo__list__Text">Copyright, SportSee 2023</p>
    </nav>
    </>

    
  )
}