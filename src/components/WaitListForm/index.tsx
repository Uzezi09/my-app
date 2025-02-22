import styles from "./WaitListForm.module.css";
import { CheckboxInput } from "../CheckboxInput";
import { InputField } from "../Input";
import { Formik } from "formik";
import { useState } from "react";
import { WaitListHeader } from "../WaitListHeader";
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";
import { FormPage } from "./FormPage";

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


export const WaitListForm = () => {
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
        <div className={styles.container}>
            <div className={styles.overlay}></div> {/* Background + Overlay */}

            <div className={styles.formWrapper}>
                <FormPage 
                containerForm={styles.containerForm}
                />
            </div>
        </div>
    );
};
