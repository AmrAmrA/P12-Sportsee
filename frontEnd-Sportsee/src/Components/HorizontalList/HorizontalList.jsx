import styles from "./__horizontal.module.scss";
import useHorizontalData from "./useHorizontalData";
export default function HorizontalList() {
  const configListArray = useHorizontalData(); 
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