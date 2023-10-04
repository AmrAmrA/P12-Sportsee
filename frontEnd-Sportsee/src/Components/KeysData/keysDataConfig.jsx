import carbsIcon from "./assets/carbsIcon.svg";
import lipidsIcon from "./assets/lipidsIcon.svg";
import caloriesIcon from "./assets/caloriesIcon.svg";
import proteinesIcon from "./assets/proteinsIcon.svg";
import styles from "./__KeysData.module.scss";

export const keysDataConfig = (data) => {
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

  return configArray;
};
