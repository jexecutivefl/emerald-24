import React from 'react';
import Link from 'next/link';
import styles from './ResourcesSideBar.module.css';
import FlexBox from "@/components/FlexBox/FlexBox";

function ResourcesSideBar(props) {
    return (
        <FlexBox direction={'column'} className={styles.container}>
            <Link href="/introduction">
                <button className={styles.sidebarButton}>Introduction</button>
            </Link>
            <Link href="/marijuanadoctor/resources/initial-application-instructions">
                <button className={styles.sidebarButton}>Medical Marijuana Card Application Instructions</button>
            </Link>
            <Link href="/marijuanadoctor/resources/how-to-drop-your-doctor-in-mmu-registry.js">
                <button className={styles.sidebarButton}>How to release your medical marijuana doctor</button>
            </Link>
            <Link href="/mmu-initial-application-process">
                <button className={styles.sidebarButton}>MMU Initial Application Process</button>
            </Link>
            <Link href="/mmu-consent-form-process">
                <button className={styles.sidebarButton}>MMU Consent Form Process</button>
            </Link>
            <Link href="/mmu-renewal-form-process">
                <button className={styles.sidebarButton}>MMU Renewal Form Process</button>
            </Link>
            <a href="tel:727-565-0995">
                <button className={`${styles.sidebarButton} ${styles.phoneButton}`}>727 565-0995</button>
            </a>
        </FlexBox>
    );
}

export default ResourcesSideBar;
