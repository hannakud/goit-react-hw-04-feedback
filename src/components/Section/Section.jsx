import PropTypes from 'prop-types';
import css from './Section.module.css';

export const Section = ({ children, title }) => (
  <section className={css.section}>
    <h3 className={css.title}>{title}</h3>
    <div>{children}</div>
  </section>
);

Section.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};
