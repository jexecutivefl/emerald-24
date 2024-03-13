import styles from './Section2.module.css';
import ButtonComponent from "@/components/ButtonComponent";

const Section2 = ({ title, description }) => {
    return (
        <section className={styles.medicalSection}>
            <h2 className={styles.medicalTitle}>
                {title.split(' ').map((word, index) =>
                        word === 'Marijuana' ? (
                            <span key={index}>
              Marij<span className={styles.greenUnderline}>uana</span>
            </span>
                        ) : (
                            word + ' '
                        )
                )}
            </h2>
            <p className={styles.medicalDescription}>
                {description}
            </p>
            <ButtonComponent
                className={styles.button}
                title="Learn More AboutUs Us"
            />
        </section>
    );
};

export default Section2;
