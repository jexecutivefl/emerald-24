import React from 'react';
import { useRouter } from 'next/router';
import styles from './CardComponent3.module.css';
import ButtonComponent from "@/components/ButtonComponent";

const CardComponent = ({ imageUrl, title, description, link, phoneNumber }) => {
    const router = useRouter();

    const handleCardClick = () => {
        router.push(link);
    };


    return (
        <div className={styles.card} onClick={handleCardClick} role="link" tabIndex="0" onKeyPress={handleCardClick}>
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
