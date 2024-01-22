import React from 'react';
import styles from './Section1.module.css';
const Section1 = ({ children }) => {
    return (
        <div className={styles.paddedsection}>
            {children}
        </div>
    );
}

export default Section1;
