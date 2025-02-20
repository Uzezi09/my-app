import { useNavigate } from "react-router-dom";
import styles from "./WaitListForm.module.css";
import { ReactComponent as SuccessIcon } from '../../assets/success-icon.svg';


export const WaitListSuccess = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <div className={styles.overlay}></div>

            <div className={styles.formWrapper}>
                <div className={styles.form}>
                    <div className={styles.cancelContainer}>
                        <div className={styles.cancel} onClick={() => navigate("/")}>
                            <h1>x</h1>
                        </div>
                    </div>
                    <SuccessIcon className={styles.image} />
                    <div className={styles.content}>
                        <h1 className={styles.title}>You're on the list!</h1>
                        <div>
                            <p className={styles.subText}>Thanks for joining our waitlist. We'll reach out as soon as we're </p>
                            <p className={styles.subText}>ready! Keep an eye on your inbox for updates.</p>
                        </div>
                    </div>
                    <div className={styles.buttonContainer}>
                        <button type="submit" className={styles.button}>
                            Okay
                        </button>
                    </div>
                </div>

            </div>
        </div>

    );
};
