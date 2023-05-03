import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onAddFeedback }) => {
  return (
    <div className={css.buttonWrapper}>
      {options.filter(Boolean).map(option => {
        return (
          <button
            className={css.button}
            key={option}
            onClick={() => onAddFeedback(option)}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onAddFeedback: PropTypes.func.isRequired,
};
