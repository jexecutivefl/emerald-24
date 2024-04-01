import CardComponent3 from "@/components/cards/CardComponent3";
import Section from "@/components/Section/Section";
import styles from './CardComponent3View.module.css';
const CardComponent3View = () => {
    return (
        <Section>
        <div className={styles.container}>
            <div style={{ display: 'flex', marginBottom: '20px', gap: '20px' }}>

                <CardComponent3
                    imageUrl="/women-with-glasses.jpeg"
                    title="What is the Best Medical Marijuana for Energy?"
                    description="If you’re feeling tired, sluggish, or unmotivated and are exploring the benefits of medical marijuana for energy, you’re not alone. Many people are turning to…"
                    link="/what-is-the-best-medical-marijuana-for-energy" // Specify the link for navigation
                />

                <CardComponent3
                    imageUrl="/weed-pills.jpeg"
                    title="How to Renew Your Florida Medical Marijuana Card"
                    description="We’ve mentioned this a few times in passing but it’s often helpful to find the topic upfront in the blog. So – whether you’re a…"
                    link="/how-to-renew-your-florida-medical-marijuana-card"
                />

                <CardComponent3
                    imageUrl="/loose-weight.jpeg"
                    title="Medical Marijuana and Weight Loss: What You Should Know"
                    description="Beyond its recreational use, medical marijuana has shown promise in addressing various health issues, some indirectly contributing to weight control. This blog post will look…"
                    link="/medical-marijuana-and-weight-loss-what-you-should-know"
                />
            </div>
        </div>
        </Section>
    );
};

export default CardComponent3View;
