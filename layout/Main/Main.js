import styles from './Main.module.css'
import Navbar from "@/layout/Navbar/Navbar";
import Footer from "@/layout/Footer/Footer";
import MobileNavbar from "@/layout/MobileNavbar/MobileNavbar";
export default function Main({isMobile, children}){
    return <>
        {
            isMobile? (
                <MobileNavbar />
            ): (
                <Navbar />
            )
        }

        {children}
        <Footer />
    </>
}