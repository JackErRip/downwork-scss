import React from 'react';
import styles from './navbar.module.scss';

function Navbar() {
    return (
        <div className={styles.nav}>
            <div className={styles.navcontainer}>
                <a className={styles.downwork} href="/">
                    downwork
                </a>
            </div>
                <hr className={styles.hrline} />
        </div>
    );      
}

export default Navbar;