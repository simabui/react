import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistic.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles['stat-list']}>
        {/* loop object arr */}
        {stats.map(data => (
          <li
            className={styles.item}
            key={data.id}
            style={{
              backgroundColor: `rgb(${Math.floor(
                Math.random() * 256,
              )},${Math.floor(Math.random() * 256)},${Math.floor(
                Math.random() * 256,
              )})`,
            }}
          >
            <span className="label">{data.label}</span>
            <span className="percentage">{data.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

//
Statistics.defaultProps = {
  title: 'placeholder',
};
// propTypes
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
export default Statistics;
