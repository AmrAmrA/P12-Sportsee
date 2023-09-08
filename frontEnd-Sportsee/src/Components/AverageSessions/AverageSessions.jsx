import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CallAverageSessions from "../../Services/AverageSessionsAPI";
import AveragesSessionsStyle from "./__AverageSessions.scss"
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
  return (
        <div className="Line__charts">
                <ResponsiveContainer>
            <LineChart
      width={7300}
      height={2500}
      data={data.data.sessions}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <Cell fill="white" stroke="green"/>
      <CartesianGrid strokeDasharray="3 3" horizontal = {false}  vertical = {false}  axisLine = {false}/>
      <XAxis dataKey="day"   axisLine = {false}  stroke="#FFFFFF" />
      <YAxis dataKey= "sessionLength"     width={0}    tickCount={18} />
      <Tooltip />
      <Legend iconSize={0} />
      <Line type="monotone" dataKey="sessionLength" stroke="#FFFFFF"  name=" " />
    </LineChart>

    </ResponsiveContainer>
        </div>
  );
}
