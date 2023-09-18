import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TypeActivitiesStyles from "./__TypesActivities.scss"
import TypesActivitiesPerformances from "../../Services/ActivitiesPerformances";
import {Radar,RadarChart,PolarGrid,PolarAngleAxis,PolarRadiusAxis} from "recharts";
  

export default function TypeActivities() {
    /** 
   * Call API to gather all Users Data from TypesActivitiesPerformances and if it fails we have an error handling system
   */
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { userId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await TypesActivitiesPerformances(userId);
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
  let ArrayCopy = data.data.data;
  // I build a new array with indexes in French in order to 
  // substitue with a loop the kind of sports activities written in English 
  let newArray = [
    "intensité",
    "Vitesse",
    "Force",
    "Endurance",
    "Energie",
    "Cardio",
  ];
  for (let i = 0; i < ArrayCopy.length; i++) {
    ArrayCopy[i].kind = newArray[i];}
  return (
    <div className="wrapperTypeActivities">
      <RadarChart
        cx={104}
        cy={120}
        innerRadius={-12}
        outerRadius={58}
        width={212}
        height={240}
        data={ArrayCopy}
        fill="black"
      >
        <PolarGrid stroke="white" fill="black"/>
        <PolarAngleAxis dataKey="kind" fill="white" stroke="white" />
        <PolarRadiusAxis fill="black" stroke="black"/>

        <Radar
          dataKey="value"
          fill="#FF0101B2" 
          fillOpacity={1}
          stroke="#FF0101B2"
     
        />
      </RadarChart>
    </div>
  );
}