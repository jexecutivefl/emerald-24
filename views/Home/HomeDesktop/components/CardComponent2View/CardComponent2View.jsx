import CardComponent2 from "@/components/cards/Card2Component";
import styles from './CardComponentView2.module.css';

import icon1 from 'public/HIV.png';
import icon2 from '/public/anxiety.png';
import icon3 from '/public/chronic-pain.png';
import icon4 from '/public/insomnia.png';
import icon5 from '/public/muscle-spasms.png';
import icon6 from '/public/nausea.png';
import icon7 from '/public/glaucoma.png';
import icon8 from '/public/seizures.png';




const CardComponent2View = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.h2}>Qualifying Medical Conditions</h2>
            <div className={styles.cardContainer}>
                <CardComponent2 icon={icon1} title="HIV & Cancer" />
                <CardComponent2 icon={icon2} title="Anxiety & Depression" />
                <CardComponent2 icon={icon3} title="Chronic Pain" />
                <CardComponent2 icon={icon4} title="Insomnia" />
                <CardComponent2 icon={icon5} title="Muscle Spasms" />
                <CardComponent2 icon={icon6} title="Nausea" />
                <CardComponent2 icon={icon7} title="Glaucoma" />
                <CardComponent2 icon={icon8} title="Seizures" />
                {/* Add more CardComponent2 instances as needed */}
            </div>
        </div>
    );
};

export default CardComponent2View;
