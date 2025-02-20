import React, { useState } from "react"
import styles from "./Input.module.css"
import clsx from 'clsx';
import { ReactComponent as ErrorIcon } from '../../assets/error-icon.svg';

interface InputFieldProps {
    label: string;
    value: string;
    setValue?: React.Dispatch<React.SetStateAction<string>>;
    type?: string;
    placeholder?: string;
    containerStyle?: any;
    errorMessage?: string;
    onChange?: (text: string) => void;
}

export const InputField = ({
    label,
    value,
    placeholder,
    onChange,
    setValue,
    containerStyle,
    errorMessage
}: InputFieldProps) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleBlur = () => {
        if (value.trim() === '') {
            setIsFocused(false);
        }
    };

    return (
        <div className={styles.main}>
            <div
                className={
                    clsx(
                        styles.inputContainer,
                        isFocused && styles.active,
                        errorMessage && styles.inputErrorMessage,
                        containerStyle
                    )
                }>
                {(isFocused || value !== "") && <label className={styles.label}>{label}</label>}
                <input
                    type="text"
                    placeholder={!isFocused && !value ? placeholder : ""}
                    value={value}
                    onChange={(text) => {
                        setValue?.(text.target.value)
                        onChange?.(text.target.value)
                    }}
                    onFocus={() => setIsFocused(true)}
                    className={clsx(styles.input, errorMessage && styles.inputError)}
                    onBlur={handleBlur}
                />
            </div>
            {errorMessage && <div className={styles.errorContainer}>
                <ErrorIcon />
                <p className={styles.errormessage}>{errorMessage}</p>
            </div>}
        </div>
    )
}