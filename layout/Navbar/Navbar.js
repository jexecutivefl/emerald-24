// Importing necessary libraries and components
import React, { useEffect, useState } from 'react';
import styles from './Navbar.module.css'; // assuming this is your CSS module
import FlexBox from "@/components/FlexBox/FlexBox";
import Image from "next/image";
import Link from "next/link";
import ButtonComponent from "@/components/ButtonComponent";

// HamburgerIcon Component

// Navbar Component
function Navbar() {
  const [navbarWhite, setNavbarWhite] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbarWhite(true);
    } else {
      setNavbarWhite(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleCall = () => {
    window.location.href = 'tel:+19419263100'; // replace with your desired phone number
  };



  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);
  return (
      <nav className={navbarWhite ? `${styles.navbar} ${styles.navbarWhite}` : styles.navbar}>
        <div className={styles.navContainer}>
          <Link href={'/'}><Image src="/emerald-logo.png" alt='Logo' width={300} height={66}/></Link>
            <ul className={styles.navList}>
            <FlexBox direction={'row'} columnGap={'15px'} alignItems={'center'}>
              <li className={styles.navItem}><a href="/" className={styles.navLink}>Home</a></li>
              <li className={styles.navItem}><a href="/about" className={styles.navLink}>About Us</a></li>
              <li className={styles.navItem}><a href="/medical-marijuana" className={styles.navLink}>Medical Marijuana</a></li>
              <li className={styles.navItem}><a href="/blog" className={styles.navLink}>Blog</a></li>
              <li className={styles.navItem}><a href="/contact" className={styles.navLink}>Contact Us</a></li>
            </FlexBox>
              <div className={styles.buttonContainer}>
                <ButtonComponent />
              </div>
              <button className={styles.numberButton} onClick={handleCall}>(941) 926-3100</button>
            </ul>
          </div>
      </nav>
  );
}

export default Navbar;
