import React, { useState } from 'react';
import styles from './Accordion.module.css';

const Accordion = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.accordionWrapper}>
            <div className={styles.accordionHeader} onClick={() => setIsOpen(!isOpen)}>
                {title}
                <span className={styles.accordionToggleIcon}>{isOpen ? '−' : '+'}</span>
            </div>
            {isOpen && <div className={styles.accordionBody}>{content}</div>}
        </div>
    );
};

export default Accordion;
