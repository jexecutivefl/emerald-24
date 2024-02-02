import React from 'react';
import styles from './CardComponent3.module.css';
import ButtonComponent from "@/components/ButtonComponent";

const CardComponent = ({ imageUrl, title, description }) => {
    return (
        <div className={styles.card}>
            <img src={imageUrl} alt={title} className={styles.cardImage} />
            <h2 className={styles.cardTitle}>{title}</h2>
            <p className={styles.cardDescription}>{description}</p>
            <ButtonComponent
                className={styles.button}
                title="Read More"
            />
            <br />
        </div>
    );
};

export default CardComponent;
