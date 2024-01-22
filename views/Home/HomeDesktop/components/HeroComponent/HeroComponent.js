import styles from './HeroComponent.module.css';
import ButtonComponent from "@/components/ButtonComponent";

const HeroComponent = ({ heading, description, backgroundImageUrl }) => {
    const containerStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImageUrl})`, // Added linear gradient for dark overlay
        backgroundSize: 'cover', // Covers the entire container
        backgroundPosition: 'center', // Center the image
        backgroundRepeat: 'no-repeat', // Prevents repeating the image
        textAlign: 'left',
        color: 'white',
        padding: '50px',
        height: '500px', // You might need to adjust the height
        // Add other styles as needed
    };

    const renderTextWithLineBreaks = (text, isHeading = false) => {
        return text.split('\n').map((line, index) => {
            const Element = isHeading ? 'span' : 'p';
            return (
                <Element key={index} className={isHeading ? styles.headingLine : styles.description}>
                    {line}
                    {isHeading && index < text.split('\n').length - 1 && <br />}
                </Element>
            );
        });
    };

    return (
        <div className={styles.container} style={containerStyle}>
            <h2 className={styles.title}>
                {renderTextWithLineBreaks(heading, true)}
            </h2>
            {renderTextWithLineBreaks(description)}
            <div style={{ paddingLeft: '200px' }}>
                <ButtonComponent />
            </div>
        </div>
    );
};


export default HeroComponent;
