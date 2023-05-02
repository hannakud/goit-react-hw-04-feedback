import PropTypes from 'prop-types';
import css from './Statistics.module.css';
export const Statistics = ({ good, neutral, bad, count, percentage }) => (
  <ul className={css.statList}>
    <li className={css.statItem}>
      <span>Good:</span>
      <span>{good}</span>
    </li>
    <li className={css.statItem}>
      <span>Neutral:</span>
      <span>{neutral}</span>
    </li>
    <li className={css.statItem}>
      <span>Bad:</span>
      <span>{bad}</span>
    </li>
    <li className={css.statItem}>
      <span>Total:</span>
      <span>{count}</span>
    </li>
    <li className={css.statItem}>
      <span>Positive feedback:</span>
      <span>{percentage}%</span>
    </li>
  </ul>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};
