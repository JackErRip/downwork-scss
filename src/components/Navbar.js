import React from 'react';
import styles from './navbar.module.scss';

function Navbar() {
    return (
        <div className={styles.nav}>
            <div className={styles.navcontainer}>
                <h1 className={styles.downwork}>
                    downwork
                </h1>
            </div>
                <hr className={styles.hrline} />
        </div>
    );      
}

export default Navbar;