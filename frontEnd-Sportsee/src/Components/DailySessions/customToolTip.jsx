import PropTypes from "prop-types";
export const CustomTooltip = ({ payload, label, data }) => {
  if (label && payload) {
    return (
      <div className="parentScore">
        <div className="custom-tooltip__bar">
          <p> {data[label - 1].kilogram}kg</p>
          <p> {data[label - 1].calories}kcal</p>
        </div>
      </div>
    );
  }
};
CustomTooltip.propTypes = {
  payload: PropTypes.array,
  label: PropTypes.string,
  data: PropTypes.array.isRequired,
}