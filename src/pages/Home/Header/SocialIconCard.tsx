import styles from './Header.module.css';

interface SocialCardProps {
    imageComponent: React.ReactNode;
}

export const SocialSocialCard: React.FC<SocialCardProps> = ({ imageComponent}) => {
    return (
        <div className={styles.mediaContainer}>
            {imageComponent}
        </div>
    );
};
