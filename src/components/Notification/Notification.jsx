import PropTypes from 'prop-types';
import css from './Notification.module.css';

export const Notification = ({ message }) => (
  <div className={css.messageWrapper}>{message}</div>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
