import { RadialBarChart, RadialBar } from "recharts";
import PropTypes from "prop-types";
const ScoreRadialChart = ({ scoreData }) => {
  ScoreRadialChart.propTypes = { scoreData: PropTypes.array };
  return (
    <RadialBarChart
      width={205}
      height={240}
      cx={100}
      cy={130}
      innerRadius={80}
      outerRadius={80}
      startAngle={80}
      endAngle={150}
      barSize={10}
      clockWise
      data={scoreData}
      className="TextInside"
    >
      <RadialBar
        minAngle={15}
        label={{ position: "insideStart", fill: "green" }}
        width={0}
        height={0}
        clockWise
        dataKey="pv"
        radius={[20, 20, 20, 20]}
      />
    </RadialBarChart>
  );
};

export default ScoreRadialChart;
