import styles from './Hero.module.css';

const Hero = () => {
    return (
        <div className={styles.heroBanner} role="banner" aria-label="Main banner">
            <h1 className={styles.heroText}>About Emerald Medical Group of Sarasota</h1>
        </div>
    );
};

export default Hero;
