import styles from "./FormPage.module.css";
import { CheckboxInput } from "../CheckboxInput";
import { InputField } from "../Input";
import { Formik } from "formik";
import { useState } from "react";
import { WaitListHeader } from "../WaitListHeader";
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";
import { clsx } from "clsx";

const data = [
    "Join as a business owner",
    "Join as a creator",
    "Join as a consumer"
]

export const waitListSchema = Yup.object().shape({
    firstName: Yup.string()
        .required('First name is required')
        .min(2, 'First name must be at least 2 characters'),

    lastName: Yup.string()
        .required('Last name is required')
        .min(2, 'Last name must be at least 2 characters'),

    email: Yup.string()
        .required('Email is required')
        .email('Invalid email address'),
});


export const FormPage = ({ containerForm }: { containerForm?: any }) => {
    const navigate = useNavigate();
    const [checkItemes, setCheckedItems] = useState<string[]>([])

    const handleSubmit = (values: any) => {
        console.log("val", values, checkItemes);
        navigate("/waitlist/success")
    };

    const handleCheckboxChange = (label: string, isChecked: boolean) => {
        setCheckedItems((prev) =>
            isChecked ? [...prev, label] : prev.filter((item) => item !== label)
        );
    };

    return (
        <div className={clsx(styles.container, containerForm)}>
            <Formik
                initialValues={{
                    firstName: "",
                    lastName: "",
                    email: ""
                }}
                onSubmit={handleSubmit}
                validationSchema={waitListSchema}
            >
                {({
                    values,
                    handleChange,
                    handleSubmit,
                    touched,
                    errors
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
                                    errorMessage={touched.firstName && errors.firstName ? errors.firstName : ""}
                                />
                                <InputField
                                    label="Last name"
                                    placeholder="Last name"
                                    value={values.lastName}
                                    onChange={handleChange('lastName')}
                                    containerStyle={styles.input}
                                    errorMessage={touched.lastName && errors.lastName ? errors.lastName : ""}
                                />
                            </div>
                            <InputField
                                label="Email address"
                                placeholder="Email address"
                                value={values.email}
                                onChange={handleChange('email')}
                                errorMessage={touched.email && errors.email ? errors.email : ""}
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
    );
};
