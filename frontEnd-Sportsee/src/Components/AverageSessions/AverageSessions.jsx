import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CallAverageSessions from "../../Services/AverageSessionsAPI";
import AveragesSessionsStyle from "./__AverageSessions.scss";
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
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianAxis,
} from "recharts";

export default function AverageSessions() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { userId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await CallAverageSessions(userId);
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
  const copyArray = [...data.data.sessions];
  const daysWithLetters = ["L", "M", " M ", "J", "V", "S", "D"];
  for (let i = 0; i < copyArray.length; i++) {
    copyArray[i].day = daysWithLetters[i];
  }
  let emptyArray = [];
  for (let i = 0; i < data.data.sessions.length; i++) {
    emptyArray.push(data.data.sessions[i].sessionLength);
  }

  const labelToIndexMap = {
    "L": 0,
    "M": 1,
    " M ": 2,
    "J": 3,
    "V": 4,
    "S": 5,
    "D": 6,
  };
  const getIntroOfPage = (label) => {
    const index = labelToIndexMap[label];
    console.log(<LineChart/>);
    
    return index !== undefined ? `${emptyArray[index]}` : "";
  };
  const CustomTooltip = ({ label }) => {
    if (label) {
      return (
        <div className="custom__tooltip__char">
          <p className="intro__">{getIntroOfPage(label)} min</p>
        </div>
      );
    }

    return null;
  };
  return (
    <div className="Line__charts">
      <p className="sessionss__time">Durée moyenne des sessions</p>
      <ResponsiveContainer>
        <LineChart
        
          width={7300}
          height={2500}
          data={data.data.sessions}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <Cell fill="white" stroke="green" />
          <CartesianGrid
            strokeDasharray="3 3"
            horizontal={false}
            vertical={false}
            axisLine={false}
          />
          <XAxis
            dataKey="day"
            axisLine={false}
            stroke="#FFFFFF"
            opacity="0.7"
          />
          <YAxis dataKey="sessionLength" width={0} tickCount={30}  />
          <Tooltip content={<CustomTooltip />} cursor={false} />
          <Legend iconSize={0}/>
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="#FFFFFF"
            name=" "
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );

}
