import PropTypes from 'prop-types';

import styles from "./section.module.scss"

const Section = ({title, children}) => {
    return (
        <>
            <h2 className={styles.feedbackTitle}>{title}</h2>
            {children}
        </>
    )
}
export default Section;

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}