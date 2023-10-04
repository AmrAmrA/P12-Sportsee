import { useParams } from "react-router-dom";
import "./__DailySessions.scss";
import FetchActivityData from "../../Services/ActivityAPI";
import { useDailyData } from "./useDailyData";
import formatActivityData from "./utils";
import ActivityBarChart from "./ActivityBarChart";
export default function DailySessions() {
  const { userId } = useParams();
  const { data, loading } = useDailyData(userId, FetchActivityData);
  if (loading) return <div>Loading...</div>;
  const dataArrayApi = formatActivityData(data.data);
  console.log(dataArrayApi);
  return (
    <div className="charts">
      <p className="DailyActivity">Activité quotidenne</p>
      <ActivityBarChart data={dataArrayApi} />
    </div>
  );
}