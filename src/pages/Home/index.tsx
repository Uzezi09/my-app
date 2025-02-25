import { ReactComponent as Star } from '../../assets/star-icon.svg';
import { ReactComponent as AiImage } from '../../assets/ai-image-2.svg';
import { ReactComponent as SmartIcon } from '../../assets/hanger-icon.svg';
import { ReactComponent as SmartImage } from '../../assets/wardobe-image.svg';
import { ReactComponent as ClimbImage } from '../../assets/climb-image.svg';
import { ReactComponent as ClimbIcon } from '../../assets/solar-icon.svg';
import { ReactComponent as BuyImage } from '../../assets/buy-sell-image.svg';
import { ReactComponent as Cart } from '../../assets/cart-icon.svg';

import styles from './Home.module.css';
import { HeroInput } from '../../components/HeroInput';
import { HomeCard } from '../../components/HomeCard';
import { CommunitySection } from '../../components/CommunitySection';
import { Footer } from '../../components/Footer';
import { HeroSection } from '../../components/HeroSection';

export const Home = () => {

    const homeSections = [
        {
            title: 'AI-Powered Style Analysis',
            subTitle: 'Get personalized style insights and recommendations based on your preferences and fashion choices.',
            icon: <Star className={styles.icon} />,
            image: <AiImage className={styles.svg} />
        },
        {
            title: 'Smart Wardrobe',
            subTitle: 'Organize and optimize your wardrobe with AI-driven recommendations.',
            icon: <SmartIcon className={styles.icon} />,
            image: <SmartImage className={styles.svg} />
        },
        {
            title: 'Climb Leaderboards',
            subTitle: 'Active creators earn bonus rewards and exclusive partnership opportunities.',
            icon: <ClimbIcon className={styles.icon} />,
            image: <ClimbImage className={styles.svg} />
        },
        {
            title: 'Buy & Sell Drips Instantly',
            subTitle: 'Turn your style into success. Buy trending outfits or sell your fashion combinations instantly on our marketplace.',
            icon: <Cart className={styles.icon} />,
            image: <BuyImage className={styles.svg} />
        }
    ];

    return (
        <div className={styles.landingPage}>
            {/* ✅ Hero Section */}
            <div className={styles.heroTop}>
                <HeroInput />
            </div>

            <div className={styles.heroContent}>
                <HeroSection />

                {/* ✅ Dynamic Sections */}
                {homeSections.map((section, index) => (
                    <div key={index} className={styles.landingContents}>
                        <HomeCard
                            title={section.title}
                            subTitle={section.subTitle}
                            imageComponent={section.icon}
                        />
                        <div className={styles.image}>
                            {section.image}
                        </div>
                    </div>
                ))}

                {/* ✅ Community & Footer */}
                <div className={styles.waitlistContent}>
                    <CommunitySection />
                </div>

                <Footer />
            </div>
        </div>
    );
};
