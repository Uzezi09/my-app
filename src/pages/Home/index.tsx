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
import clsx from 'clsx';
import { Animator, batch, Fade, FadeIn, FadeOut, Move, MoveOut, ScrollContainer, ScrollPage, Sticky, StickyIn } from 'react-scroll-motion';


export const Home = () => {
    const FadeUp1 = batch( FadeIn(), Move(0, 300, 0.8), StickyIn(38, 100), FadeOut(0, 0), MoveOut(0, -50)); 
    // const FadeUp1 = batch(StickyIn(36, 90),FadeIn(), Move(0, 300, 0.8),  FadeOut(0, 0), MoveOut(0, -200)); 
    const FadeUp2 = batch(FadeIn(), Move(0, 300, 0.8), StickyIn(38, 60), FadeOut(0, 0), MoveOut(0, -50));
    const FadeUp3 = batch( StickyIn(42, 60),FadeIn(), Move(0, 300, 0.8), FadeOut(0, 0), MoveOut(0, -50));
    const FadeUp4 = batch(FadeIn(), Move(0, 300, 0.8), StickyIn(37, 60), FadeOut(0, 0), MoveOut(0, -200));


    return (
        <div className={styles.landingPage}>
            <div className={styles.heroTop}>
                <HeroInput />
            </div>

            <div className={styles.heroContent}>
                <HeroSection />

                {/* ✅ Dynamic Sections */}
                <ScrollContainer>
                    <ScrollPage >
                        <Animator animation={FadeUp1}>
                            <div className={clsx(styles.landingContents, styles.content)}>
                                <HomeCard
                                    title='AI-Powered Style Analysis'
                                    subTitle='Get personalized style insights and recommendations based on your preferences and fashion choices.'
                                    imageComponent={<Star className={styles.icon} />}
                                />
                                <div className={styles.image}>
                                    <AiImage className={styles.svg} />
                                </div>
                            </div>
                        </Animator>
                    </ScrollPage>
                    <ScrollPage>
                        <Animator animation={FadeUp2} >
                            <div className={clsx(styles.landingContents, styles.content)}>
                                <HomeCard
                                    title='Smart Wardrobe'
                                    subTitle='Organize and optimize your wardrobe with AI-driven recommendations.'
                                    imageComponent={<SmartIcon className={styles.icon} />}
                                />
                                <div className={styles.image}>
                                    <SmartImage className={styles.svg} />
                                </div>
                            </div>
                        </Animator>
                    </ScrollPage>

                    <ScrollPage>
                        <Animator animation={FadeUp3} >
                            <div className={clsx(styles.landingContents, styles.content)}>
                                <HomeCard
                                    title='Climb Leaderboards'
                                    subTitle='Active creators earn bonus rewards and exclusive partnership opportunities.'
                                    imageComponent={<ClimbIcon className={styles.icon} />}
                                />
                                <div className={styles.image}>
                                    <ClimbImage className={styles.svg} />
                                </div>
                            </div>
                        </Animator>
                    </ScrollPage>
                    <ScrollPage>
                        <Animator animation={FadeUp4} >
                            <div className={clsx(styles.landingContents,styles.content)}>
                            <HomeCard
                                    title='Buy & Sell Drips Instantly'
                                    subTitle='Turn your style into success. Buy trending outfits or sell your fashion combinations instantly on our marketplace.'
                                    imageComponent={<Cart className={styles.icon} />}
                                />
                                <div className={styles.image}>
                                    <BuyImage className={styles.svg} />
                                </div>
                            </div>
                        </Animator>
                    </ScrollPage>

                </ScrollContainer>
                {/* ✅ Community & Footer */}
                <div className={styles.waitlistContent}>
                    <CommunitySection />
                </div>

                <Footer />
            </div>
        </div>
    );
};
