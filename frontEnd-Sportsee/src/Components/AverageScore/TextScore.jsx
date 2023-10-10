import PropTypes from "prop-types";

export default function TextScore({ scoreFormatted }) {
  return (
    <>
      <div className="centralCircle">
        <p className="scoreInsideCirlce">{scoreFormatted * 100}%</p>
        <p className="objectifInsideCircle">de votre <br /> objectif</p>
      </div>
      <p className="score__absolute">Score</p>
    </>
  );
}
TextScore.propTypes = { scoreFormatted: PropTypes.string };