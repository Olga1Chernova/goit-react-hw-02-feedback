import PropTypes from 'prop-types';

import styles from "./statistics.module.scss";

const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return (
        <>
                <h3 className={styles.statisticsTitle}>Statistics</h3>
                <ul className={styles.statisticsList}>
                    <li>Good: {good}</li>
                    <li>Neutral: {neutral}</li>
                    <li>Bad: {bad}</li>
                    <li>Total: {total}</li>
                    <li>Positive Feedback: {positivePercentage}%</li>
                </ul>
        </>
    )
}

export default Statistics;

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}