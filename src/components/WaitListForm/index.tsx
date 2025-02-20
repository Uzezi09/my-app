import styles from "./WaitListForm.module.css";
import { CheckboxInput } from "../CheckboxInput";
import { InputField } from "../Input";
import { Formik } from "formik";
import { useState } from "react";
import { WaitListHeader } from "../WaitListHeader";

const data = [
    "Join as a business owner",
    "Join as a creator",
    "Join as a consumer"
]

export const WaitListForm = () => {
    const [checkItemes, setCheckedItems] = useState<string[]>([])

    const handleSubmit = (values: any) => {
        console.log("val", values, checkItemes);
    };

    const handleCheckboxChange = (label: string, isChecked: boolean) => {
        setCheckedItems((prev) =>
            isChecked ? [...prev, label] : prev.filter((item) => item !== label)
        );
    };

    return (
        <div className={styles.container}>
            <div className={styles.overlay}></div> {/* Background + Overlay */}

            <div className={styles.formWrapper}>
                <Formik
                    initialValues={{
                        firstName: "",
                        lastName: "",
                        email: ""
                    }}
                    onSubmit={handleSubmit}
                >
                    {({
                        values,
                        handleChange,
                        handleSubmit,
                    }) => (
                        <form onSubmit={handleSubmit} className={styles.form}>
                            <WaitListHeader />
                            <div className={styles.formInput}>
                                <div className={styles.nameFeild}>
                                    <InputField
                                        label="First name"
                                        placeholder="First name"
                                        value={values.firstName}
                                        onChange={handleChange('firstName')}
                                        containerStyle={styles.input}
                                    />
                                    <InputField
                                        label="Last name"
                                        placeholder="Last name"
                                        value={values.lastName}
                                        onChange={handleChange('lastName')}
                                        containerStyle={styles.input}
                                    />
                                </div>
                                <InputField
                                    label="Email address"
                                    placeholder="Email address"
                                    value={values.email}
                                    onChange={handleChange('email')}
                                />
                            </div>
                            <div className={styles.checkboxFeild}>
                                {data.map((x, i) => (
                                    <div>
                                        <CheckboxInput
                                            label={x}
                                            name={x}
                                            key={i}
                                            checked={checkItemes.includes(x)}
                                            onChange={(isChecked) =>
                                                handleCheckboxChange(x, isChecked)
                                            }
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className={styles.buttonContainer}>
                                <button type="submit" className={styles.button}>
                                    Get early access
                                </button>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        </div>

    );
};
