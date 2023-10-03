import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AverageScoreStyle from "./__AverageScore.scss";
import CallsApi from "../../Services/CallsAPI";
import { RadialBarChart, RadialBar, Pie } from "recharts";
import ErrorPage from "../../Pages/Error/Error";

export default function AverageScore() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { userId } = useParams();
  /**
   * Call API to gather all Users Data from CallsApi and if it fails we have an error handling system
   */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await CallsApi(userId);
        setData(result);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [userId]); // Ajouter userId à la liste de dépendances
  if (loading) return <div>Loading...</div>;
  if (error) return <ErrorPage />;
  let objectScore = [
    {
      // I have to use a ternary because inside our API DATA, some users have the key "score" and other ones have the key "todayScore"
      score: `${data.data.todayScore ? data.data.todayScore : data.data.score}`,
      fill: "red",
      uv: 2,
      pv: 1,
    },
  ];
  let scoreFormatted = objectScore[0].score;
  return (
    <>
      <div className="centralCircle">
        <p className="scoreInsideCirlce">{scoreFormatted * 100}%</p>
        <p className="objectifInsideCircle">
          {" "}
          de votre <br /> objectif{" "}
        </p>
      </div>
      <p className="score__absolute">Score</p>
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
        data={objectScore}
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
    </>
  );
}
