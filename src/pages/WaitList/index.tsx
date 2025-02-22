import { WaitListForm } from "../../components/WaitListForm"
import { FormPage } from "../../components/WaitListForm/FormPage"
import styles from "./WaitList.module.css"

export const WaitList = () => {
    return (
        <div>
            <div className={styles.desktop}>
                <WaitListForm />
            </div>
            <div className={styles.mobile}>
                <FormPage />
            </div>
        </div>
    )
}