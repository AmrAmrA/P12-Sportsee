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
  RadialBar,
  PolarAngleAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianAxis,
} from "recharts";

const dataTest = [
  {

  },

];
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
  return (
    <RadialBarChart
      width={250}
      height={260}
      cx={130}
      cy={110}
      innerRadius={80}
      outerRadius={80}
      startAngle={12 * 18}
      endAngle={90}
      barSize={10}
      data={dataTest}
      className="TextInside"
    >
      <RadialBar
        minAngle={15}
        label={{ position: "insideStart", fill: "#fff" }}
        background
        clockWise
        dataKey="uv"
        fill="red"
      />
      {/* <Legend
        iconSize={10}
        width={120}
        height={140}
        layout="vertical"
        verticalAlign="middle"
        content= "Score"
      /> */}
    </RadialBarChart>
  );
}
