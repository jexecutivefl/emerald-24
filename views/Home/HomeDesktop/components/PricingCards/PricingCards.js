import CardComponent3 from "@/components/cards/CardComponent3";
import Section from "@/components/Section/Section";
import styles from './PricingCards.module.css';
import PricingCardsComponent from "@/components/cards/PricingCards";
const PricingCards = () => {
    return (
        <Section>
        <div className={styles.container}>
            <div style={{ display: 'flex', marginBottom: '20px', gap: '20px' }}>

                <PricingCardsComponent
                    title="New Patient"
                    description="210 days worth of prescriptions"
                    description2="All routes"
                    description3="All dispensaries"
                    price="$159"
                />

                <PricingCardsComponent
                    title="Transfer"
                    description="210 days worth of prescriptions"
                    description2="All routes"
                    description3="All dispensaries"
                    price="$99"
                />

                <PricingCardsComponent
                    title="Renewal"
                    description="210 days worth of prescriptions"
                    description2="All routes"
                    description3="All dispensaries"
                    price="$99"
                />
            </div>
        </div>
        </Section>
    );
};

export default PricingCards;
