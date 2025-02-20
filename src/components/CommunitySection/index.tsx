import styles from './CommunitySection.module.css';
import { ReactComponent as LineDot } from '../../assets/line-dot.svg';
import { ReactComponent as Instagram } from '../../assets/instagram-icon.svg';
import { ReactComponent as TelegramIcon } from '../../assets/telegram-icon.svg';
import { ReactComponent as TwitterIcon } from '../../assets/twitter-icon.svg';
import { ReactComponent as BigStarIcon } from '../../assets/big-star-icon.svg';
import { ReactComponent as BeatIcon } from '../../assets/beat-image.svg';
import { ReactComponent as LeftIcon } from '../../assets/left-coin.svg';
import { ReactComponent as RightIcon } from '../../assets/right-coin.svg';
import { SocialSocialCard } from '../SocialCard';

export const CommunitySection = () => {
    return (
        <div className={styles.footSection}>
            <div className={styles.footSectionContainer}>
                <div className={styles.footSectionCard}>
                    <div className={styles.footSectionCenter}>
                        <div>
                            <h1 className={styles.sectionHeader}>Be Among the First to Experience <span className={styles.span}>QwikDrip</span></h1>
                            <p className={styles.subTitle}>Join our exclusive waitlist today and be notified when we launch. Early members will receive special perks and features.</p>
                        </div>
                        <button className={styles.footSectionButton}>Join the Waitlist</button>
                        <div>
                            <LineDot />
                        </div>
                        <div className={styles.socialIcons}>
                            <SocialSocialCard imageComponent={<Instagram />} />
                            <SocialSocialCard imageComponent={<TelegramIcon />} />
                            <SocialSocialCard imageComponent={<TwitterIcon />} />
                        </div>
                        <p className={styles.join}>Join our community today</p>
                    </div>
                </div>
                <div className={styles.footSectionStar}>
                    <BigStarIcon />
                </div>
            </div>
            <div className={styles.footSectionBeat}>
                <BeatIcon />
            </div>
            <div className={styles.footSectionCoins}>
                <LeftIcon />
                <RightIcon />
            </div>
        </div>
    );
};
