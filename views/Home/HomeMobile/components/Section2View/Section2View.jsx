import Section2 from "@/components/Section2";
import styles from "./Section2View.module.css"

const Section2View = () => {
    return (
        <div className={styles.container}>
            <Section2
            title="Medical Marijuana  Made Simple"
            description="Don’t let another day go by feeling less than your best. Come see Dr. Lance and the team here
             at Emerald – let us restore your energy, relieve your pain, and help you live your best life today."
            />
        </div>
    );
};

export default Section2View;