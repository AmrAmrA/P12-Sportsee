import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DailySessionsStyle from "./__DailySessions.scss"; 
import ActivityAPI from "../../Services/ActivityAPI";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  Label,
  Line,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
export default function DailySessions() {
  const [data, setData] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { userId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await ActivityAPI(userId);
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
  const dataArrayApi = [...data.data.sessions];
  const dayNumber = dataArrayApi.map((item) => item.day.slice(-1));
  for (let i = 0; i < dataArrayApi.length; i++) {
    dataArrayApi[i].day = dayNumber[i];
  }
  const getIntroOfPage = (label) => {
    return "";
  };
  
  
  
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip__bar">
          <p className="intro">{getIntroOfPage(label)}</p>
          <p> {dataArrayApi[label - 1].kilogram}kg</p>
           <p> {dataArrayApi[label - 1].calories}kcal</p>
        </div>
      );
    }
  
    return null;
  };

  return (
    <div className="charts">
      <p className="DailyActivity">Activité quotidenne</p>
      <ResponsiveContainer>
        <BarChart
          data={dataArrayApi}
          margin={{
            top: 5,
            right: 30,
            left: 30,
            bottom: 5,
          }}
          >
          <CartesianGrid stroke="#DEDEDE" strokeDasharray="2 2" vertical = {false} />
          <XAxis
            dataKey="day"
            interval={0}
            strokeDasharray="0 10"
            tick={{ fill: '#9B9EAC', opacity: '0.5', dy: 10,}}
          ></XAxis>
          <YAxis
            dataKey="calories"
            orientation="right"
            padding={{ top: 70 }}
            strokeDasharray="0 1"
            tickCount={5}
            tick={{ fill: '#9B9EAC', opacity: '0.5', dx: 20,}}
            style={{
              fontSize: '16',
          }}
          />
          <Tooltip content={<CustomTooltip />}/>
          <Legend
            verticalAlign="top"
            height={50}
            iconType="circle"
            iconSize={8}
            align="right"
          />
          <Bar
            dataKey="kilogram"
            fill="#282D30"
            barSize={10}
            radius={[10, 10, 0, 0]}
            name="Poids (kg)"
          />
          <Bar
            dataKey="calories"
            fill="#E60000"
            barSize={10}
            radius={[10, 10, 0, 0]}
            name="Calories brûlées (kCal)"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
