import React from 'react';
import styles from './TrustedMedicalProfessional.module.css';

const TrustedMedicalProfessional = () => {
    return (
        <div className={styles.trustedMedicalProfessionals}>
            <img src="/dr-lance.jpeg" alt="Dr. William Rymer" className={styles.doctorImage} />
            <div className={styles.textSection}>
                <h1 className={styles.doctorName}>Dr. Scot Lance</h1>
                <p className={styles.doctorInfo}>
                    Dr. Scot Lance is a distinguished medical professional with a rich background in
                    facial and oculoplastic surgery, Dr. Lance's educational journey began with an
                    undergraduate degree from University of Notre dame. He then pursued his medical
                    degree from Ohio State Medical, solidifying his foundation in the medicl sciences.
                    His expertise was refined through residency training at Pittsburgh University and
                    fellowship training at the University of Texas. For 38 years Dr. Lance ran a
                    successful solo practice in Sarasota, Fl, specalizing in facial and oculoplastic
                    surgery. Now, as the Medical Director at Emerald Medical Group Inc, he continues
                    his passion for patient care and excellence in the filed.
                </p>
            </div>
        </div>
    );
};

export default TrustedMedicalProfessional;
