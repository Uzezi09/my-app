import { useNavigate } from 'react-router-dom';
import styles from './WaitListHeader.module.css'

export const WaitListHeader = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.mainContainer}>
            <div className={styles.cancelContainer}>
                <div className={styles.cancel} onClick={() => navigate("/")}>
                    <h1>x</h1>
                </div>
            </div>
            <div className={styles.content}>
                <h1 className={styles.title}>Join the waitlist</h1>
                <div>
                    <p className={styles.subText}>Join our exclusive waitlist today and be notified when we </p>
                    <p className={styles.subText}>launch. Early members will receive special perks and features.</p>
                </div>
            </div>
        </div>
    )
}