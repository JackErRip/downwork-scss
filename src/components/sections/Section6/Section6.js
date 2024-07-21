import React from 'react';
import styles from './section6.module.scss';

function Section6() {
    return (
        <div className={styles.sectionSix}>
            <div className={styles.container}>
                <h1 className={styles.title}>
                    Work with a dedicated Upwork team member for each step
                </h1>
                <p className={styles.subtitle}>
                    Enterprise clients have an assigned support team for your businessc each step along the way.
                </p>
                <div className={styles.listcontainer}>
                    <ul>
                        Account Manager
                        <li>
                            Maintains your account and works with your team to maximize the return on your Upwork investment.
                        </li>    
                    </ul>
                    <ul>
                        Solutions Architect
                        <li>
                            Develops custom talent solutions for your organization and unique strategic goals.
                        </li>    
                    </ul> 
                    <ul>
                        Program Success Managers
                        <li>
                            Keeps your team up to date on how to use Upwork and any changes to your account.
                        </li>    
                    </ul> 
                    <ul>
                        Upwork Professional
                        <li>
                            Supports your team through the hiring process, from screening talent to starting projects.
                        </li>    
                    </ul> 
                </div>        
            </div>
        </div>
    ); 
}

export default Section6;