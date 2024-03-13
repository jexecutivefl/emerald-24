// components/DoctorProfile.js
import Image from 'next/image';
import styles from './Dr.module.css';
import ButtonComponent from "@/components/ButtonComponent";


const handleCall = () => {
    window.location.href = 'tel:+19419263100'; // replace with your desired phone number
};


const Dr = () => {
    return (
        <div className={styles.profileWrapper}>
            <div className={styles.profileContainer}>
                <div className={styles.imageWrapper}>
                    <Image
                        src="/dr-christian.jpg" // Replace with the path to your image
                        alt="Dr. Tiffany Christian"
                        width={480}
                        height={600}
                    />
                </div>
                <div className={styles.details}>
                    <h2 className={styles.nameTitle}>
                        <span className={styles.underline}>DR. Tiffany Christian, MD </span>
                    </h2>
                    <p className={styles.description}>Dr. Tiffany Christian, MD is an emergency medicine-trained physician and native Floridian from Ocala. She specializes in the use of medical cannabis to treat a variety of conditions, believing in a comprehensive approach to wellness.</p>
                    <p className={styles.description}>With degrees from the University of South Carolina School of Medicine, the University of South Florida, and Florida State University, her passion for integrative medicine drives her to empower patients in their healthcare decisions.</p>
                    <p className={styles.description}>Outside of work, she enjoys weightlifting, hiking, traveling, and reading, alongside caring for her Australian Cattle Dog.</p>
                    <p>Phone:<button className={styles.button} onClick={handleCall}>941 926-3100</button></p>
                    <p>Email: <a href="" className={styles.emailLink}>....</a></p>
                    <br/>
                    <br/>
                    <ButtonComponent /> {/* Your ButtonComponent */}
                </div>
            </div>
        </div>
    );
};

export default Dr;