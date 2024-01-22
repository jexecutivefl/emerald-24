import React from 'react';
import styles from './TextArea.module.css'; // CSS Module

const TextArea = ({ label, value, onChange }) => {
    return (
        <div className={styles.textAreaContainer}>
            {label && <label className={styles.label}>{label}</label>}
            <textarea
                value={value}
                onChange={e => onChange(e.target.value)}
                className={styles.textArea}
            />
        </div>
    );
};

export default TextArea;
