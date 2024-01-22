import React from 'react';
import styles from './Section.module.css';
const Section = ({ children }) => {
    return (
        <div className={styles.paddedsection}>
            {children}
        </div>
    );
}

export default Section;
