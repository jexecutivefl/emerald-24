import React from 'react';
import styles from './TextInput.module.css'; // CSS Module

const TextInput = ({ label, value, onChange }) => {
    return (
        <div className={styles.inputContainer}>
            {label && <label className={styles.label}>{label}</label>}
            <input
                type="text"
                value={value}
                onChange={e => onChange(e.target.value)}
                className={styles.textInput}
            />
        </div>
    );
};

export default TextInput;
