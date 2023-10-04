import { RadialBarChart, RadialBar } from "recharts";
import PropTypes from "prop-types";
const ScoreRadialChart = ({ scoreData }) => {
  return (
    <RadialBarChart
      width={205}
      height={240}
      cx={100}
      cy={130}
      innerRadius={80}
      cornerRadius={80}
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
        label={{ position: "insideStart", fill: "red" }}
        width={0}
        height={0}
        clockWise
        dataKey="pv"
        cornerRadius={50}
      />
    </RadialBarChart>
  );
};

ScoreRadialChart.propTypes = { scoreData: PropTypes.array };
export default ScoreRadialChart;
