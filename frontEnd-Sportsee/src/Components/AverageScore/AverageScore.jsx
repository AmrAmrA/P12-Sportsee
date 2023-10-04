import { useParams } from "react-router-dom";
import "./__AverageScore.scss";
import { useAverageScoreData } from "./useAverageScoreData";
import ErrorPage from "../../Pages/Error/Error";
import ScoreRadialChart from "./ScoreRadialBarChart";
import FetchUserScore from "../../Services/CallsAPI";
import transformScoreData from "./transformScoreData";

export default function AverageScore() {
  const { userId } = useParams();
  const { data, loading, error } = useAverageScoreData(userId, FetchUserScore);
  if (loading) return <div>Loading...</div>;
  if (error) return <ErrorPage />;
  const objectScore = transformScoreData(data);
  if (!objectScore || objectScore.length === 0) return <ErrorPage message="Invalid data format" />;
  const scoreFormatted = objectScore[0].score;
  return (
    <>
      <div className="centralCircle">
        <p className="scoreInsideCirlce">{scoreFormatted * 100}%</p>
        <p className="objectifInsideCircle">de votre <br /> objectif</p>
      </div>
      <p className="score__absolute">Score</p>
      <ScoreRadialChart scoreData={objectScore} />
    </>
  );
}