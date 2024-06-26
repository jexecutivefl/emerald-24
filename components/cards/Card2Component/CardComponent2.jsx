import styles from './CardComponent2.module.css'; // Import our external CSS module
import Image from 'next/image'
const CardComponent2 = ({ icon, title }) => {
    return (
        <div className={styles.card}>
            <div className={styles.iconWrapper}>
                <Image
                    src={icon}
                    width={100}
                    height={100}
                    alt="Picture of the author"
                />
            </div>
            <h2 className={styles.title}>{title}</h2>
        </div>
    );
};

export default CardComponent2;
