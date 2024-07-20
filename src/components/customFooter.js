import React from 'react';
import styles from './customFooter.module.scss';

function CustomFooter() {
    return (
        <div className={styles.customFooter}>
                <hr className={styles.hrline} />
            <div className={styles.container}>
                <footer className={styles.footerText}>
                    Copyright © DownWork 2024..... NOT REALLY. please dont sue me. And also, Everything was created by: Aldrien Velasco
                </footer>
            </div>
        </div>
    );
}

export default CustomFooter;