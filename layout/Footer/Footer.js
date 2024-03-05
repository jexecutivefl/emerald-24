// FooterComponent.js
import React from 'react';
import styles from './Footer.module.css'; // Assuming the CSS module file is named Footer.module.css
import Image from "next/image"; // Replace with the actual path to your logo image

const Footer = () => {

    const handleCall = () => {
        window.location.href = 'tel:+9419263100'; // replace with your desired phone number
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.logoContainer}>
                <Image src="/emerald-logo.png" alt='Logo' width={300} height={66}/>
                <p className={styles.address}>
                    Emerald Medical Group of Sarasota<br/>
                    3900 Clark Road, Suite #B1<br/>
                    Sarasota, FL 34233
                </p>
            </div>
            <div className={styles.contactContainer}>
                <h2 className={styles.h2}>Contact Us:</h2>
                <button className={styles.numberButton} onClick={handleCall}>(941) 926-3100</button>
                <p className={styles.emailAddress}>info@emeraldmedicalgroup.com</p>
            </div>
        </footer>
    );
};

export default Footer;
