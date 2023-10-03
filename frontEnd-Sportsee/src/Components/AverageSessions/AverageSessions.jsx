import React from "react";
import Error from "../../Pages/Error/Error";
import { useParams } from "react-router-dom";
import { useActivityData } from "./useActivityData";
import AverageSessionsChart from "./AverageSessionsChart";
import AveragesSessionsStyle from "./__AverageSessions.scss";

export default function AverageSessions() {
  const { userId } = useParams();
  const { data, loading, error } = useActivityData(userId);
  if (loading) return <div>Loading...</div>;
  if (error) return <Error />;
  const sessions = data?.data?.sessions || [];
  return <AverageSessionsChart sessions={sessions} />;
}
