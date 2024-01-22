import React from 'react';
import styles from './footer.module.css'
import Image from "next/image";

function Footer(props) {
    return (
        <div className={styles.container}>
            <div className={styles.logoContainer}>
                Logo
            </div>
            <div className={styles.lowerFooter}>
                <p className={styles.footerText}>
                    Copyright 2023 | Cedar Ridge Homes & Executive Real Estate | All Rights Reserved
                </p>
            </div>
        </div>
    );
}

export default Footer;
