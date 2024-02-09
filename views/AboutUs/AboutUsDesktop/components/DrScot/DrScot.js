// components/DoctorProfile.js
import Image from 'next/image';
import styles from './DrScot.module.css';
import ButtonComponent from "@/components/ButtonComponent";


const handleCall = () => {
    window.location.href = 'tel:+19414210012'; // replace with your desired phone number
};


const DoctorProfile = () => {
    return (
        <div className={styles.profileWrapper}>
            <div className={styles.profileContainer}>
                <div className={styles.imageWrapper}>
                    <Image
                        src="/dr-lance.jpeg" // Replace with the path to your image
                        alt="Dr. Scot Lance"
                        width={320}
                        height={400}
                        layout="fixed"
                    />
                </div>
                <div className={styles.details}>
                    <h2 className={styles.nameTitle}>
                        <span className={styles.underline}>DR.</span>  SCOT LANCE, MD, MBA
                    </h2>
                    <p className={styles.description}>
                        Dr. Scot Lance is a distinguished medical professional with a rich background
                        in facial and oculoplastic surgery, Dr. Lance's educational journey began with an undergraduate degree from University of Notre dame.
                        He then pursued his medical degree from Ohio State Medical, solidifying his foundation in the medicl sciences. His expertise was refined through residency
                        training at Pittsburgh University and fellowship training at the University of Texas. For 38 years
                        Dr. Lance ran a successful solo practice in Sarasota, Fl, specalizing in facial and oculoplastic surgery. Now, as the Medical Director
                        at Emerald Medical Group Inc, he continues his passion for patient care and excellence in the filed.

                    </p>
                    <p>Phone:<button className={styles.button} onClick={handleCall}>941 421-0012</button></p>
                    <p>Email: <a href="mailto:scotlance73@gmail.com" className={styles.emailLink}>scotlance73@gmail.com</a></p>
                    <br/>
                    <br/>
                    <ButtonComponent /> {/* Your ButtonComponent */}
                </div>
            </div>
        </div>
    );
};

export default DoctorProfile;