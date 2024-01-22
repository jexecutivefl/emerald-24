import styles from './Main.module.css'
import Navbar from "@/layout/Navbar/Navbar";
import Footer from "@/layout/Footer/Footer";
import MobileNavbar from "@/layout/MobileNavbar/MobileNavbar";
export default function Main({isMobile, children}){
    return <div className={styles.container}>
        {
            isMobile? (
                <MobileNavbar />
            ): (
                <Navbar />
            )
        }

        {children}
        <Footer />
    </div>
}