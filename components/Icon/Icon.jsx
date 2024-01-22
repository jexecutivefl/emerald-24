import PropTypes from 'prop-types'; // This library is used for typechecking props
import styles from './Icon.module.css';

const Icon = ({ icon, altText }) => {
    // Check if the icon is a string, it will be treated as an image URL
    // Otherwise, it will be treated as a React component
    const content = typeof icon === 'string' ? <img src={icon} alt={altText} className={styles.image} /> : icon;

    return <div className={styles.icon}>{content}</div>;
};

// Set the PropTypes for the Icon component
Icon.propTypes = {
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    altText: PropTypes.string
};

Icon.defaultProps = {
    altText: 'icon'
};

export default Icon;
