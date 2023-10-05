import PropTypes from "prop-types";
import { mapDaysToLetters} from "./utils";
import {LineChart,Cell,XAxis,Line,CartesianGrid,Tooltip,Legend,Rectangle,ResponsiveContainer} from "recharts";
export default function AverageSessionsChart({ sessions }) {
  const processedSessions = mapDaysToLetters(sessions);
  // The custom Tooltip with my own style and data who appears when we hoover the Red LineChart
  const CustomTooltip = ({ label }) => {
    const session = processedSessions.find((s) => s.day === label);
    console.log(session);
    const sessionLength = session ? session.sessionLength : undefined;
    return (
      <div className="custom__tooltip__char">
        <p className="intro__"> {sessionLength ? `${sessionLength} min` : "0 min"}</p>
      </div>
    );
  };
  const CustomizedCursor = ({ points }) => {
    return (<Rectangle fill="black" opacity={0.3} x={points[1].x - 20} width={540} height={177}/>);
  }
  
  CustomizedCursor.propTypes = { points: PropTypes.array };
  CustomTooltip.propTypes = { label: PropTypes.string };
  AverageSessionsChart.propTypes = { sessions: PropTypes.array };
  return (
    <div className="Line__charts">
      <p className="sessionss__time">Durée moyenne des sessions</p>
      <ResponsiveContainer>
        <LineChart width={7300} height={2500} data={processedSessions} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <Cell fill="white" stroke="green" />
          <CartesianGrid strokeDasharray="3 3" horizontal={false} vertical={false} axisLine={false}/>
          <XAxis dataKey="day" axisLine={false} stroke="#FFFFFF" opacity="0.7"/>
          <Tooltip content={<CustomTooltip />} cursor={<CustomizedCursor />} />
          <Legend iconSize={0} />
          <Line type="monotone" dataKey="sessionLength" stroke="#FFFFFF" name=""/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}