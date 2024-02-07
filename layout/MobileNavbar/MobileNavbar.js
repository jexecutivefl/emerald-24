import styles from './MobileNavbar.module.css';
import Image from "next/image";
import Link from "next/link";
import {useEffect, useRef, useState} from "react";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function MobileNavbar({background}) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const sidebarRef = useRef(null);
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleCall = () => {
        window.location.href = 'tel:+19419093582'; // replace with your desired phone number
    };

    const handleClickOutside = event => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            setIsSidebarOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    return (
        <nav className={styles.navbar}>
            <div className={styles.logoAndButtonContainer}>
                <button className={styles.numberButton} onClick={handleCall}>(941) 421-0012</button>
                <Link href={'/'}>
                    <Image src="/emerald-logo.png" alt="Emerald Logo" width={300} height={75}/>
                </Link>
            </div>
            <div className={styles.hamburger} onClick={toggleSidebar}>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
            </div>
            {isSidebarOpen && <Sidebar ref={sidebarRef} closeSidebar={toggleSidebar} />}
        </nav>
    );
}
