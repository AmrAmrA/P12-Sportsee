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

  let objectScore = [{
   "score": `${data.data.todayScore ? data.data.todayScore : data.data.score}`, 
    "fill" : "red", 
    "uv": 2,
    "pv": 1, 
  }
]
 let scoreFormatted = objectScore[0].score 
 return (
   <>
   <div className="centralCircle">
    <p className="scoreInsideCirlce">{scoreFormatted * 100}%</p>
    <p className="objectifInsideCircle"> de votre <br /> objectif  </p>
   </div>
   <p className="score__absolute">Score</p>
      <RadialBarChart
      width={205}
      height={240}
      cx={100}
      cy={130}
      innerRadius={80}
      outerRadius={80}
      startAngle={80}
      endAngle={210}
      barSize={10}
      clockWise
      data={objectScore}
      className="TextInside"
    >
      <RadialBar
        minAngle={15}
        label={{ position: "insideStart", fill: "red" }}
        background
        width={0}
        height={0}
        clockWise
        dataKey="pv"
        fill="red"
      />
    </RadialBarChart>
     
     </>
  );
}
