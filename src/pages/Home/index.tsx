import { ReactComponent as Star } from '../../assets/star-icon.svg';
import { ReactComponent as AiImage } from '../../assets/ai-image-2.svg';
import { ReactComponent as SmartIcon } from '../../assets/hanger-icon.svg';
import { ReactComponent as SmartImage } from '../../assets/wardobe-image.svg';
import { ReactComponent as ClimbImage } from '../../assets/climb-image.svg';
import { ReactComponent as ClimbIcon } from '../../assets/solar-icon.svg';
import { ReactComponent as BuyImage } from '../../assets/buy-sell-image.svg';
import { ReactComponent as Cart } from '../../assets/cart-icon.svg';
import styles from './Home.module.css'
import { HeroInput } from '../../components/HeroInput';
import { HomeCard } from '../../components/HomeCard';
import { CommunitySection } from '../../components/CommunitySection';
import { Footer } from '../../components/Footer';
import { HeroSection } from '../../components/HeroSection';

export const Home = () => {
    return (
        <div className={styles.landingPage}>
            <div className={styles.heroTop}>
                <HeroInput />
            </div>
            <div className={styles.heroContent}>
                <HeroSection />
                <div className={styles.landingContents}>
                    <HomeCard
                        title='AI-Powered Style Analysis'
                        subTitle='Get personalized style insights and recommendations based on your preferences and fashion choices.'
                        imageComponent={
                            <Star />
                        }
                    />
                    <div className={styles.image}>
                        <AiImage />
                    </div>
                </div>
                <div className={styles.landingContents}>
                    <HomeCard
                        title='Smart Wardrobe'
                        subTitle='Get personalized style insights and recommendations based on your preferences and fashion choices.'
                        imageComponent={
                            <SmartIcon />
                        }
                    />
                    <div className={styles.image}>
                        <SmartImage />
                    </div>
                </div>
                <div className={styles.landingContents}>
                    <HomeCard
                        title='Climb Leaderboards'
                        subTitle='Active creators earn bonus rewards and exclusive partnership opportunities.'
                        imageComponent={
                            <ClimbIcon />
                        }
                    />
                    <div className={styles.image}>
                        <ClimbImage />
                    </div>
                </div>
                <div className={styles.landingContents}>
                    <HomeCard
                        title='Buy & Sell Drips Instantly'
                        subTitle='Turn your style into success. Buy trending outfits or sell your fashion combinations instantly on our marketplace.'
                        imageComponent={
                            <Cart />
                        }
                    />
                    <div className={styles.image}>
                        <BuyImage />
                    </div>
                </div>
                <div className={styles.waitlistContent}>
                    <CommunitySection />
                </div>
                <Footer />
            </div>
        </div>
    )
}