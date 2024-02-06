
import icon1 from '/public/HIV.png';
import icon2 from '/public/HIV.png';
import icon3 from '/public/HIV.png';
import icon4 from '/public/HIV.png';
import icon5 from '/public/HIV.png';
import icon6 from '/public/HIV.png';
import icon7 from '/public/HIV.png';
import icon8 from '/public/HIV.png';

import CardComponent2 from "@/components/cards/Card2Component";
import styles from './CardComponentView2.module.css';


const CardComponent2View = () => {
    return (
        <div className={styles.container}>
            <style>{`
                .cardContainer {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-around;
                    gap: 20px;
                    width: 390px;
                }
                .cardContainer .card {
                    width: calc(20% - 20px);
                    /* Other card styles can be added here if needed */
                }
            `}</style>
            <div className="cardContainer">
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
