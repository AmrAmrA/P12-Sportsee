import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TypeActivitiesStyles from "./__TypesActivities.scss"
import TypesActivitiesPerformances from "../../Services/ActivitiesPerformances";
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis
  } from "recharts";
  

export default function TypeActivities() {
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
    let newArray = ["intensité", "Vitesse", "Force", "Endurance", "Energie", 'Cardio']
    for (let i = 0; i < ArrayCopy.length; i++) {
        ArrayCopy[i].kind = newArray[i]
    }
    console.log(ArrayCopy);

    return (
        <RadarChart
        cx={200}
        cy={200}
        outerRadius={150}
        width={400}
        height={400}
        data={ArrayCopy}
        fill="black"
      >
        <PolarGrid 
             stroke="white"
             fill="black"
  
        />
        <PolarAngleAxis dataKey="kind"
            fill="white"
            stroke="white"
             />
        <PolarRadiusAxis 
            fill="black"
            stroke="black"
            />
            
        <Radar
          name="Mike"
          dataKey="A"
          fill="black"
          fillOpacity={1}
          stroke="black"
        />
      </RadarChart>
  )
}