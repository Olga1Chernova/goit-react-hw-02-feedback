import styles from "./feedback-options.module.scss";
import PropTypes from 'prop-types';

const FeedbackOptions = ({onLeaveFeedback, options}) => {
    return (
        <ul className={styles.feedbackList}>
            {options.map(option => {
                return (<li key={option}><button onClick={() => onLeaveFeedback(option)} className={styles.feedbackButton}>{option}</button></li>)
            })}
        </ul>
    )
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired,
}