import styles from './HomeCard.module.css';

interface CardProps {
    imageComponent: React.ReactNode;
    title: string;
    subTitle: string;
}

export const HomeCard: React.FC<CardProps> = ({ imageComponent, title, subTitle }) => {
    return (
        <div className={styles.card}>
            <div className={styles.circle}>
                {imageComponent}
            </div>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.subTitle}>{subTitle}</p>
        </div>
    );
};
