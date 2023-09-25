import React, { useState, useEffect,} from "react";
import PropTypes from "prop-types";
import Error from "../../Pages/Error/Error";
import { useParams } from "react-router-dom";
import CallAverageSessions from "../../Services/AverageSessionsAPI";
import AveragesSessionsStyle from "./__AverageSessions.scss";
import {
  LineChart,
  Cell,
  XAxis,
  Line,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Rectangle, 
  ResponsiveContainer,
} from "recharts";






export default function AverageSessions() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { userId } = useParams();
  /**
   * Call API to gather all Users Data from TypesActivitiesPerformances and if it fails we have an error handling system
   */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await CallAverageSessions(userId);
        setData(result);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [userId]);
  if (loading) return <div>Loading...</div>;
  if (error) return (
    <Error />
  )
  console.log(data);
  // I replace the array of days of the week with another array of their abbreviations
  const copyArray = [...data.data.sessions];
  const daysWithLetters = ["L", "M", " M ", "J", "V", "S", "D"];
  for (let i = 0; i < copyArray.length; i++) {
    copyArray[i].day = daysWithLetters[i];
  }
  // I need to extract the array of every session length because i will display with my customToolTip
  const durationArray = [];
  for (let i = 0; i < data.data.sessions.length; i++) {
    durationArray.push(data.data.sessions[i].sessionLength);
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
  // A function with a ternary condition
  // If while i hoover my index exists, return me the sessions length, Else don't return anything
  const getIntroOfPage = (label) => {
    const index = labelToIndexMap[label];
    return index !== undefined ? `${durationArray[index]}` : "";
  };
  // The custom Tooltip with my own style and data who appears when we hoover the Red LineChart
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

  CustomTooltip.propTypes = {
    label: PropTypes.string,
  };

 const  CustomizedCursor = ({points}) => {
		return <Rectangle fill="black" opacity={0.3} x={points[1].x - 20 } width={540} height={177} />;}
  CustomizedCursor.propTypes = {points : PropTypes.array, };

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
          <YAxis dataKey="sessionLength" width={0} tickCount={30} />
          <Tooltip content={<CustomTooltip />} cursor={<CustomizedCursor />}  />
          <Legend iconSize={0} />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="#FFFFFF"
            name=""
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
