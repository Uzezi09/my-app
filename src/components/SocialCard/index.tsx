import styles from './SocialCard.module.css';

interface SocialCardProps {
    imageComponent: React.ReactNode;
    link: string;
}

export const SocialSocialCard: React.FC<SocialCardProps> = ({ imageComponent, link}) => {
    return (
        <a href={link} target='_blank' rel="noopener noreferrer" className={styles.mediaContainer}>
            {imageComponent}
        </a>
    );
};
