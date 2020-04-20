import React from 'react';
import styles from './Card.module.css';

export default ({ headline, text, image }) => (
    <div className={styles.card}>
        <div className={styles.logoPlaceholder}>
            <img src={image} alt="" className={styles.logo} />
        </div>
        <div className={styles.description}>
            <h4 className={styles.headline}>{headline}</h4>
            <p className={styles.text}>{text}</p>
        </div>
    </div>
);
