import { ReactComponent as LightBall } from '../../assets/light-ball.svg';
import styles from './Footer.module.css'

export const Footer = () => {
    return (
        <div className={styles.footer}>
            <LightBall height={180} />
            <div>
                <p>© 2025 Demz Labs, Inc.</p>
            </div>
        </div>
    )
}