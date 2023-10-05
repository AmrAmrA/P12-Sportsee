import styles from "./__vertical.module.scss";
import { useVerticalList } from "./useVerticalList";
export default function VerticalList() {
const configVerticalArray = useVerticalList();
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