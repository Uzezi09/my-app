import { ReactComponent as QwickLogo } from '../../assets/qwikdrip-icon.svg';
import styles from './HeroInput.module.css';

export const HeroInput = () => {
    return (
        <div className={styles.border}>
            <div className={styles.content}>
                <div className={styles.contentLeft}>
                    <QwickLogo />
                    <h1 className={styles.qwikText}>Qwikdrip</h1>
                </div>
                <button className={styles.button}>Join the Waitlist</button>
            </div>
        </div>
    )
}