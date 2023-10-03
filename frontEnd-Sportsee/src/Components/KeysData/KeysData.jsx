import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./__KeysData.module.scss";
import CallsApi from "../../Services/CallsAPI";
import carbsIcon from "./assets/carbsIcon.svg";
import lipidsIcon from "./assets/lipidsIcon.svg";
import caloriesIcon from "./assets/caloriesIcon.svg";
import proteinesIcon from "./assets/proteinsIcon.svg";

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
  const { calorieCount, proteinCount, carbohydrateCount, lipidCount } = data.data.keyData;

  const configArray = [
    {
      value: calorieCount,
      unit: "Kcal",
      title: "Calories",
      icon: caloriesIcon,
      style: styles.caloriesBox,
    },
    {
      value: proteinCount,
      unit: "g",
      title: "Proteines",
      icon: proteinesIcon,
      style: styles.proteinsBox,
    },
    {
      value: carbohydrateCount,
      unit: "g",
      title: "Glucides",
      icon: carbsIcon,
      style: styles.carboBox,
    },
    {
      value: lipidCount,
      unit: "g",
      title: "Lipides",
      icon: lipidsIcon,
      style: styles.lipidsBox,
    },
  ];

  return (
    <>
      {configArray.map(({ value, unit, title, icon, style }) => (
        <div className={`${styles.keyDataBox} ${style}`} key={title}>
          <div className={styles.keyDataBox__calories}>
            <img className={styles.keyDataBox__calories__icon} src={icon} alt={`${title} icon`} />
            <div className={styles.keyDataBox__calories__text}>
              <p className={styles.keyDataBox__calories__text__value}> <span>{value}</span> {unit} </p>
              <p className={styles.keyDataBox__calories__text__title}>{title}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
