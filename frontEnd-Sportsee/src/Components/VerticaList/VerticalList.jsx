import styles from "./__vertical.module.scss";
import meditation from "../assets/meditation.png";
import swimming from "../assets/swimming.png";
import cycling from "../assets/cycling.png";
import bodyBuilding from "../assets/bodyBuilding.png";

export default function VerticalList() {
  return (
         <nav className= {styles.navigationVertical}>
        <ul className= {styles.navigationVertical__list}>
          <li className= {styles.navigationVertical__list__item}><img src={meditation}alt=" A character meditating"/></li>
          <li className={styles.navigationVertical__list__item}><img src={swimming} alt="A character swimming" /></li>
          <li className={styles.navigationVertical__list__item}><img src={cycling} alt="A character Cycling" />
          </li>
          <li className={styles.navigationVertical__list__item}><img src={bodyBuilding} alt="A red dumbell" /></li>
       </ul>
        <p className={styles.navigationVertical__list__text}>Copyright, SportSee 2023</p>
      </nav> 
  )
}
