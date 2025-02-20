import { useNavigate } from 'react-router-dom';
import { ReactComponent as QwickLogo } from '../../assets/qwikdrip-icon.svg';
import styles from './HeroInput.module.css';

export const HeroInput = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.border}>
            <div className={styles.content}>
                <div className={styles.contentLeft}>
                    <QwickLogo />
                    <h1 className={styles.qwikText}>Qwikdrip</h1>
                </div>
                <button className={styles.button} onClick={()=> navigate('/waitlist')}>Join the Waitlist</button>
            </div>
        </div>
    )
}