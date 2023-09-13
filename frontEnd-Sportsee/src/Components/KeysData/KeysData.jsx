import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./__KeysData.module.scss";
import CallsApi from "../../Services/CallsAPI";
import carbsIcon from "./assets/carbsIcon.png";
import lipidsIcon from "./assets/lipidsIcon.png";
import caloriesIcon from "./assets/caloriesIcon.png";
import proteinesIcon from "./assets/proteinsIcon.png";

export default function KeysData() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { userId } = useParams();
    /** 
   * Call API to gather all Users Data from CallsAPI and if it fails we have an error handling system
   */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await CallsApi(userId);
        setData(result);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };
    fetchData();
  }, [userId]); 
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>; 
// Destructuring keyData Object
const myArray = [];
myArray.push(
  data.data.keyData.calorieCount,
  data.data.keyData.proteinCount,
  data.data.keyData.carbohydrateCount,
  data.data.keyData.lipidCount
);
let [calorieCount, proteinCount, carbohydrateCount, lipidCount] = myArray;
  // Displays the number of Calories, proteins, Carbs and lipids
  return (
    <>
      <div className={`${styles.keyDataBox }  ${styles.caloriesBox}`}  >
        <div className={styles.keyDataBox__calories}>
          <img className={styles.keyDataBox__calories__icon} src={caloriesIcon} alt="calories icon"/>
          <div className={styles.keyDataBox__calories__text}>
            <p className={styles.keyDataBox__calories__text__value}><span>{calorieCount}</span>kCal</p>
            <p className={styles.keyDataBox__calories__text__title}>Calories</p>
          </div>
        </div>
      </div>
      <div className={`${styles.keyDataBox }  ${styles.proteinsBox}`}>
        <div className={styles.keyDataBox__calories}>
          <img className={styles.keyDataBox__calories__icon} src={proteinesIcon} alt="proteins icon"/>
          <div className={styles.keyDataBox__calories__text}>
            <p className={styles.keyDataBox__calories__text__value}><span>{proteinCount}</span>g</p>
            <p className={styles.keyDataBox__calories__text__title}>Proteines</p>
          </div>
        </div>
      </div>
      <div className={`${styles.keyDataBox }  ${styles.carboBox}`}>
        <div className={styles.keyDataBox__calories}>
          <img className={styles.keyDataBox__calories__icon} src={carbsIcon} alt="carbohydrates icon"/>
          <div className={styles.keyDataBox__calories__text}>
            <p className={styles.keyDataBox__calories__text__value}><span>{carbohydrateCount}</span>g</p>
            <p className={styles.keyDataBox__calories__text__title}>Glucides</p>
          </div>
        </div>
      </div>
      <div className={`${styles.keyDataBox }  ${styles.lipidsBox}`}>
        <div className={styles.keyDataBox__calories}>
          <img className={styles.keyDataBox__calories__icon} src={lipidsIcon} alt="lipids icon"/>
          <div className={styles.keyDataBox__calories__text}>
            <p className={styles.keyDataBox__calories__text__value}><span>{lipidCount}</span>g</p>
            <p className={styles.keyDataBox__calories__text__title}>Lipides</p>
          </div>
        </div>
      </div>
    </>
  );
}
