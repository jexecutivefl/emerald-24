// components/ScheduleYourConsultation.js
import React from 'react';
import styles from './ScheduleYourConsultation.module.css';
import ButtonComponent from "@/components/ButtonComponent"; // Import CSS module
import Image from 'next/image';
const ScheduleYourConsultation = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textSection}>
                <h2 className={styles.h2}>Schedule Your Consultation</h2>
                <p>Are you ready to explore whole-health welness? We aim to always
                be proactive, diligent, and driven to proven the absolute best care.
                Schedule an appointment in our warm and welcoming clinic today, and come
                experience the Emerald way.</p>
                <div className={styles.buttonWrapper}>
                    <ButtonComponent />
                </div>
            </div>
            <div className={styles.imageSection}>
                {/* Replace the src with your desired image URL */}
                <Image src="/consultation-image.png"
                       alt="Consultation"
                       width={380}
                       height={240}
                />
            </div>
        </div>
    );
};

export default ScheduleYourConsultation;
