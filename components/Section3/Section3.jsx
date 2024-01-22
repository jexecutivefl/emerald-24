import styles from './Section3.module.css';
import ButtonComponent from "@/components/ButtonComponent";

const Section3 = ({ title, description }) => {
    return (
        <section className={styles.medicalSection}>
            <h2 className={styles.medicalTitle}>
                {title.split(' ').map((word, index) =>
                        word === 'Get' ? (
                            <span key={index}>
              <span className={styles.greenUnderline}>Get </span>
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
                title="Schedule Your Appointment"
            />
            <div>
                <p style={{ fontSize: '18px', color: '#4b446c' }} >
                    <strong>3900 Clark Rd., Suite B1, Sarasota, FL. 34233 | (941) 909-2582</strong>
                </p>
            </div>
        </section>
    );
};

export default Section3;
