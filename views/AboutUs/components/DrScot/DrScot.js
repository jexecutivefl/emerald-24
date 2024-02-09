// components/DoctorProfile.js
import Image from 'next/image';
import styles from './DrScot.module.css';
import ButtonComponent from "@/components/ButtonComponent";

const DoctorProfile = () => {
    return (
        <div className={styles.profileWrapper}>
            <div className={styles.profileContainer}>
                <div className={styles.imageWrapper}>
                    <Image
                        src="/dr-lance.jpeg" // Replace with the path to your image
                        alt="Dr. Scot Lance"
                        width={400}
                        height={400}
                        layout="fixed"
                    />
                </div>
                <div className={styles.details}>
                    <h2 className={styles.nameTitle}>
                        <span className={styles.underline}>DR.</span> SCOT LANCE, MD, MBA
                    </h2>
                    <p className={styles.description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <ButtonComponent /> {/* Your ButtonComponent */}
                </div>
            </div>
        </div>
    );
};

export default DoctorProfile;