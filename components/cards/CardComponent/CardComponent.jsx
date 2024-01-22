import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import styles from './CardComponent.module.css';
import Icon from "@/components/Icon/Icon";

const CardComponent = ({ title, content, icon }) => {
    return (
        <div className={styles.card}>
            <Icon icon={icon} altText="Calendar" />
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.content}>{content}</p>
        </div>
    );
};

// Define PropTypes for your CardComponent
CardComponent.propTypes = {
    title: PropTypes.string.isRequired, // Title should be a required string
    content: PropTypes.string.isRequired, // Content should be a required string
    icon: PropTypes.string.isRequired, // iconName should be a required string
};

export default CardComponent;
