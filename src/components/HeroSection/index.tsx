import styles from './HeroSection.module.css';
import { ReactComponent as CoinImage } from '../../assets/coin-image.svg';
import { ReactComponent as MobileCoinImage } from '../../assets/coin.svg';
import { ReactComponent as LightBall } from '../../assets/light-ball.svg';
import { useNavigate } from 'react-router-dom';

export const HeroSection = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.heroSection}>
            <div className={styles.heroSectionContent}>
                <div className={styles.heroTopContent}>
                    <div className={styles.coinImageTop}>
                        <MobileCoinImage className={styles.imageTop} />
                    </div>
                    <div className={styles.heroText}>
                        <div>
                            <h1 className={styles.heroTitle}>Earn from </h1>
                            <h1 className={styles.heroTitle}>your <span className={styles.heroSpan}>style,</span></h1>
                            <h1 className={styles.heroTitle}> own <span className={styles.heroSpanH1}>your drip</span></h1>
                        </div>
                        <p className={styles.heroSubText}>Qwikdrip is an AI-powered fashion platform with the added benefit of earning tokens through style post engagement.</p>
                    </div>
                    <button className={styles.button} onClick={()=> navigate('/waitlist')}>Join early access</button>
                    <p className={styles.heroSubTextJoin}>🔥 Join 10,000+ fashion enthusiasts already on the waitlist</p>
                </div>
                <div className={styles.coinImage}>
                    <CoinImage className={styles.image} />
                </div>
            </div>
            <div className={styles.lightBall}>
                <LightBall />
            </div>
        </div>
    );
};
