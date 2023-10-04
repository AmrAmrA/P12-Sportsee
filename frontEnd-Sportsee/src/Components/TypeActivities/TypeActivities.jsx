import { useParams, redirect } from "react-router-dom";
import Error from "../../Pages/Error/Error";
import "./__TypesActivities.scss"
import FetchUserActivities from "../../Services/ActivitiesPerformances";
import { UseActivitiesData } from "./UseActivitiesData";
import { UseTransformedActivitiesData } from "./UseTransformedActivitiesData";
import { RadarActivitiesChart } from "./RadarActivitiesChart";

export default function TypeActivities() {
  const { userId } = useParams();
  const {data, error, loading} = UseActivitiesData(userId, FetchUserActivities)
  if (loading) return <div>Loading...</div>;
  if (error) {return redirect(Error)}
  const transformedData = UseTransformedActivitiesData(data);
  return (
    <div className="wrapperTypeActivities">
     <RadarActivitiesChart data={transformedData} />
    </div>
  );
}