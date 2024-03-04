
import React from 'react';
import styles from './ButtonComponent.module.css';

const ButtonComponent = () => {

  const handleCall = () => {
    window.location.href = 'tel:+19419263100'; // replace with your desired phone number
  };

  return (
    <button className={styles.button} onClick={handleCall}>Call now 941 926-3100</button>
  );
};

export default ButtonComponent;
