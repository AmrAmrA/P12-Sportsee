// RadarActivitiesChart.js
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from "recharts";

export function RadarActivitiesChart({ data }) {
  return (
    <RadarChart cx={104} cy={120} innerRadius={-12} outerRadius={58} width={212} height={240} data={data} fill="black">
      <PolarGrid stroke="white" fill="black"/>
      <PolarAngleAxis dataKey="kind" fill="white" stroke="white" />
      <PolarRadiusAxis fill="black" stroke="black"/>
      <Radar dataKey="value" fill="#FF0101B2" fillOpacity={1} stroke="#FF0101B2"/>
    </RadarChart>
  );
}
