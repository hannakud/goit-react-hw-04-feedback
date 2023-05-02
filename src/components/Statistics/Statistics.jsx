import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ total, positive, state }) => (
  <ul className={css.statList}>
    <li className={css.statItem}>
      <span>Good:</span>
      <span>{state.good}</span>
    </li>
    <li className={css.statItem}>
      <span>Neutral:</span>
      <span>{state.neutral}</span>
    </li>
    <li className={css.statItem}>
      <span>Bad:</span>
      <span>{state.bad}</span>
    </li>
    <li className={css.statItem}>
      <span>Total:</span>
      <span>{total}</span>
    </li>
    <li className={css.statItem}>
      <span>Positive feedback:</span>
      <span>{positive}%</span>
    </li>
  </ul>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positive: PropTypes.number.isRequired,
};
