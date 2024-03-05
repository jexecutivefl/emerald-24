import CardComponent2 from "@/components/cards/Card2Component";
import styles from './CardComponentView2.module.css';

import icon2 from '/public/anxiety.png';
import icon3 from '/public/chronic-pain.png';
import icon4 from '/public/insomnia.png';
import icon5 from '/public/muscle-spasms.png';
import icon6 from '/public/nausea.png';
import icon7 from '/public/glaucoma.png';




const CardComponent2View = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.h2}>Medical Benefits</h2>
            <div className={styles.cardContainer}>
                <CardComponent2 icon={icon2} title="Anxiety Reduction" />
                <CardComponent2 icon={icon3} title="Sleep Improvement" />
                <CardComponent2 icon={icon4} title="Stress Relief" />
                <CardComponent2 icon={icon5} title="Pain Relief" />
                <CardComponent2 icon={icon6} title="Nause Control" />
                <CardComponent2 icon={icon7} title="Inflammation Reduction" />
                {/* Add more CardComponent2 instances as needed */}
            </div>
        </div>
    );
};

export default CardComponent2View;
