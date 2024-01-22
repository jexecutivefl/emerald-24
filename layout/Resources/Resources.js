import styles from './Resources.module.css';
import ResourcesSideBar from "@/layout/components/ResourcesSideBar/ResourcesSideBar";
import FlexBox from "@/components/FlexBox/FlexBox";
import Navbar from "@/layout/Navbar/Navbar";
export default function Resources({children}){
    return <div className={styles.container}>
        <Navbar />
        <FlexBox>
            <ResourcesSideBar />
            {children}
        </FlexBox>
    </div>
}