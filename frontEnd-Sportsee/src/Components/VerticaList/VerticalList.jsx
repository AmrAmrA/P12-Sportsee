import styles from "./__vertical.module.scss";
import meditation from "../assets/meditation.svg";
import swimming from "../assets/swimming.svg";
import cycling from "../assets/cycling.svg";
import bodyBuilding from "../assets/bodyBuilding.svg";

export default function VerticalList() {
  const configVerticalArray = [
    {
      src: meditation,
      alt: "A character meditating",
    },
    {
      src: swimming,
      alt: "A character swimming",
    },
    {
      src: cycling,
      alt: "A character Cycling",
    },
    {
      src: bodyBuilding,
      alt: "A red dumbell",
    },
  ];

  return (
    <nav className={styles.navigationVertical}>
      <ul className={styles.navigationVertical__list}>
        {configVerticalArray.map((item, index) => (
          <li className={styles.navigationVertical__list__item} key={index}>
            <img src={item.src} alt={item.alt} />
          </li>
        ))}
      </ul>
      <p className={styles.navigationVertical__list__text}>
      Copyright, SportSee {new Date().getFullYear()}
      </p>
    </nav>
  );
}
