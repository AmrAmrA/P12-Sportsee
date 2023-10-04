import { useParams } from "react-router-dom";
import useKeysDataApi from "./useKeysDataApi";
import styles from "./__KeysData.module.scss";
import fetchUserKeysData from "../../Services/CallsAPI";
import { keysDataConfig } from "./KeysDataConfig";
export default function KeysData() {
  const { userId } = useParams();
  const {data, loading} = useKeysDataApi(userId, fetchUserKeysData)
  if (loading) return <div>Loading...</div>;
  const configArray = keysDataConfig(data);
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