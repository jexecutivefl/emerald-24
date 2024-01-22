import React, { useState } from 'react';
import styles from './Specifications.module.css';

const Specifications = ({ title, children, isExpanded, toggleExpansion }) => {
    return (
        <div className={styles.card}>
            <div className={styles.header} onClick={toggleExpansion}>
                <span className={styles.toggle}>{isExpanded ? '−' : '+'}</span>
                <h3 className={styles.title}>{title}</h3>
            </div>
            {isExpanded && <div className={styles.content}>{children}</div>}
        </div>
    );
};

export default Specifications;
