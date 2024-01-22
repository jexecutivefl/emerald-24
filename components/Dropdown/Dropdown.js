import React, { useState } from 'react';
import styles from './Dropdown.module.css';

function Dropdown({ label, items }) {
    const [showDropdown, setShowDropdown] = useState(false);

    const handleMouseEnter = () => setShowDropdown(true);
    const handleMouseLeave = () => setShowDropdown(false);

    return (
        <li
            className={styles.navItem}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <a href="#" className={styles.navLink}>
                {label}
                <svg
                    className={`${styles.arrowIcon} ${showDropdown ? styles.rotate : ''}`}
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z" fill="currentColor" />
                </svg>
            </a>
            <ul className={showDropdown ? styles.dropdown : styles.hidden}>
                {items.map((item, index) => (
                    <li key={index} className={styles.dropdownItem}>
                        <a href={item.link} className={styles.dropdownLink}>{item.label}</a>
                    </li>
                ))}
            </ul>
        </li>
    );
}

export default Dropdown;
