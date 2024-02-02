import styles from './Sidebar.module.css';
import {forwardRef} from "react";
import FlexBox from "@/components/FlexBox/FlexBox";
import Link from "next/link";

const Sidebar = forwardRef(({ closeSidebar }, ref) => {
    return (
        <div className={styles.sidebar} ref={ref}>
            <div className={styles.closeButton} onClick={closeSidebar}>x</div>

            <FlexBox>
                <Link href={'/initial-application-instructions'} />
            </FlexBox>
            <a href="/"
               className={styles.sidebarLink}
               onClick={closeSidebar}>Home</a>

            <a href="/about"
               className={styles.sidebarLink}
               onClick={closeSidebar}>About Us</a>

            <a href="/medical-marijuana"
               className={styles.sidebarLink}
               onClick={closeSidebar}>Medical Marijuana </a>

            <a href="/blog"
               className={styles.sidebarLink}
               onClick={closeSidebar}>Blog</a>


            <a href="/contact"
               className={styles.sidebarLink}
               onClick={closeSidebar}>Contact Us</a>


            {/* Add other links and a button similar to the above line */}
            {/* Remember to add the onClick={closeSidebar} to close the sidebar when a link is clicked */}
        </div>
    );
})
export default Sidebar;
