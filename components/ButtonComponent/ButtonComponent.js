
import React from 'react';
import styles from './ButtonComponent.module.css';

const ButtonComponent = () => {

  const handleCall = () => {
    window.location.href = 'tel:+19419093582'; // replace with your desired phone number
  };

  return (
    <button className={styles.button} onClick={handleCall}>Call Us</button>
  );
};

export default ButtonComponent;
