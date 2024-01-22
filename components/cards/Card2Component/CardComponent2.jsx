import styles from './CardComponent2.module.css'; // Import our external CSS module

const CardComponent2 = ({ icon, title }) => {
    return (
        <div className={styles.card}>
            <div className={styles.iconWrapper}>
                <img src={icon} alt={title} className={styles.icon} />
            </div>
            <h2 className={styles.title}>{title}</h2>
        </div>
    );
};

export default CardComponent2;
