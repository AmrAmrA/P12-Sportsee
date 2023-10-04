import PropTypes from "prop-types";
import { CustomTooltip } from "./customToolTip";
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
const ActivityBarChart = ({ data }) => {
  return (
    <ResponsiveContainer>
      <BarChart data={data} margin={{ top: 5, right: 30, left: 30, bottom: 5 }}>
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
        />
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
        <Tooltip content={<CustomTooltip data={data} />} />
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
  );
};
export default ActivityBarChart;
ActivityBarChart.propTypes = { data: PropTypes.array };
