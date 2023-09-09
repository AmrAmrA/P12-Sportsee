import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AverageScoreStyle from "./__AverageScore.scss";
import CallsApi from "../../Services/CallsAPI";
import {
    BarChart,
    LineChart,
    Bar,
    Cell,
    XAxis,
    Label,
    Line,
    Text,
    YAxis,
    CartesianGrid,
    RadialBarChart,
    PolarAngleAxis,
    Tooltip,
    Legend,
    ResponsiveContainer,
    CartesianAxis,
  } from "recharts";

export default function AverageScore() {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { userId } = useParams();
  
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
    }, [userId]); // Ajouter userId à la liste de dépendances
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>; 
    console.log(data.data.todayScore);
  return (
    <RadialBarChart width={143} height={143} data={data}
    // cx={30 / 2}
    // cy={30 / 2}
    innerRadius={25}
    // outerRadius={18}
    barSize={4}
    startAngle={90}
    endAngle={-270}>
      <PolarAngleAxis
        type="number"
        domain={[0, 10]}
        angleAxisId={0}
        tick={false}
      />
      <RadialBarChart
        background
        dataKey="value"
        cornerRadius={30 / 2}
        fill="#0BEFF2"
      />
      <text
        x={30 / 2}
        y={33 / 2}
        textAnchor="middle"
        dominantBaseline="middle"
        className="progress-label"
      >
        89
      </text>
    </RadialBarChart>
  )
}
