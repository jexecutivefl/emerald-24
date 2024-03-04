import React from 'react';
import styles from './PricingCardsComponent.module.css';
import ButtonComponent from "@/components/ButtonComponent";

const PricingCardsComponent = ({ imageUrl, title, description, description2, description3, price }) => {
    return (
        <div className={styles.card}>
            {
                imageUrl && (<img src={imageUrl} alt={title} className={styles.cardImage} />)
            }
            <h2 className={styles.cardTitle}>{title}</h2>
            <p className={styles.cardDescription}>{description}</p>
            <p className={styles.cardDescription}>{description2}</p>
            <p className={styles.cardDescription}>{description3}</p>
            <p className={styles.price}>{price}</p>
            <ButtonComponent
                className={styles.button}
                title="Read More"
            />
            <br />
        </div>
    );
};

export default PricingCardsComponent;
