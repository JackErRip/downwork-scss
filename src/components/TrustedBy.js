import React from 'react';
import styles from './trustedBy.module.scss';

function TrustedBy() {
    return (
        <div className={styles.trustedby}>
            <div className={styles.container}>
                <h3 className={styles.trustedbytext}>
                    TRUSTED BY
                </h3>
                <div className={styles.images}>
                    <img
                        src="Microsoft.png"
                        alt="microsoft"
                        className={styles.microsoft}
                    />
                    <img
                        src="AutomatticLogo.png"
                        alt="Automattic"
                        className={styles.automattic}
                    />
                    <img
                        src="Bissell.png"
                        alt="Bissell"
                        className={styles.bissell}
                    />
                </div>
            </div>
        </div>
    );
}

export default TrustedBy;
