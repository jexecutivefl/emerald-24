import styles from './Hero.module.css';

const Hero = () => {
    return (
        <div className={styles.heroBanner}>
            <h1 className={styles.heroText}>About Emerald Medical Group of Sarasota</h1>
            <p className={styles.text}>Welcome to our About Us page. Our team is dedicated to offering personalized care and expert guidance.</p>
        </div>
    );
};

export default Hero;
