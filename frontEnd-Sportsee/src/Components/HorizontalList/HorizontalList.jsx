import logo from "../assets/logoSportSee.svg";
import styles from "./__horizontal.module.scss";
export default function HorizontalList() {
  const configListArray = [
    {type: "logo",src: logo,alt: "Sportsee logo"},
    { type: "text", value: "Accueil" },
    { type: "text", value: "Profil" },
    { type: "text", value: "Réglage" },
    { type: "text", value: "Communauté" },
  ];
  return (
    <nav>
      <ul className={styles.navigation__list}>
        {configListArray.map((item, index) => (
          <li className={styles.navigation__list__item} key={index}>
            {item.type === "logo" ? (
              <img src={item.src} alt={item.alt} className={styles.navigation__list__logo}/>
            ) : (
              item.value
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}