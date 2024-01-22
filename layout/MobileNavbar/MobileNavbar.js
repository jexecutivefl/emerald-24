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
            <div className={styles.logo}>
                <Link href={'/'}>
                    {
                        (background === 'light')?(
                            <Image src="/emerald-logo.png" alt="SellQuickCT Logo" width={300} height={75}/>
                        ):(
                            <Image src="/emerald-logo.png" alt="SellQuickCT Logo" width={300} height={75}/>
                        )
                    }
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
