export default function transformScoreData(data) {
  if (!data || !data.data) return null;
  const scoreValue = data.data.todayScore || data.data.score;
  return [
    {
      score: `${scoreValue}`,
      fill: "red",
      uv: 2,
      pv: 1,
    },
  ];
}
