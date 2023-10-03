import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DailySessionsStyle from "./__DailySessions.scss";
import Error from "../../Pages/Error/Error";
import ActivityAPI from "../../Services/ActivityAPI";
import PropTypes from "prop-types";
import {
  BarChart,
  Bar,
  XAxis,
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
  /**
   * Call API to gather all Users Data from ActivityAPI and if it fails we have an error handling system
   */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await ActivityAPI(userId);
        setData(result);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [userId]);
  if (loading) return <div>Loading...</div>;
  if (error) return <Error />;

  // Operation to format dates and switch from a days/months/years format to a format that gives the date according to its index in the data Array.
  const dataArrayApi = [...data.data.sessions];
  const dayNumber = dataArrayApi.map((item) => item.day.slice(-1));
  for (let i = 0; i < dataArrayApi.length; i++) {
    dataArrayApi[i].day = dayNumber[i];
  }

  /**
   * When you hover over the daily activity graph, a customized window with a red background appears, displaying daily weight and calories burned
   * @param {*array} payload,
   * @param {*string} label,
   * @returns daily weight and calories burned for every day of the week
   */
  const CustomTooltip = ({ payload, label }) => {
    if (label && payload) {
      return (
        <div className="parentScore">
          <div className="custom-tooltip__bar">
            <p> {dataArrayApi[label - 1].kilogram}kg</p>
            <p> {dataArrayApi[label - 1].calories}kcal</p>
          </div>
        </div>
      );
    }
  };

  CustomTooltip.propTypes = {
    payload: PropTypes.array,
    label: PropTypes.string,
  };
  if (error) {
    return <Error />;
  } else {
    return (
      <div className="charts">
        <p className="DailyActivity">Activité quotidenne</p>
        <ResponsiveContainer>
          <BarChart
            data={dataArrayApi}
            margin={{ top: 5, right: 30, left: 30, bottom: 5 }}
          >
            <CartesianGrid
              stroke="#DEDEDE"
              strokeDasharray="2 2"
              vertical={false}
            />
            <XAxis
              dataKey="day"
              interval={0}
              strokeDasharray="0 10"
              tick={{ fill: "#9B9EAC", opacity: "0.5", dy: 10 }}
            ></XAxis>
            <YAxis
              type="number"
              domain={[50, 400]}
              dataKey="calories"
              orientation="right"
              strokeDasharray="0 2"
              tickCount={4}
              tick={{ fill: "#9B9EAC", opacity: "0.5", dx: 20 }}
              style={{ fontSize: "16" }}
            />
            <Tooltip content={<CustomTooltip />} />
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
}
