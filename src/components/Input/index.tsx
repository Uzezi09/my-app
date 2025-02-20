import React, { useState } from "react"
import styles from "./Input.module.css"
import clsx from 'clsx';

interface InputFieldProps {
    label: string;
    value: string;
    setValue?: React.Dispatch<React.SetStateAction<string>>;
    type?: string;
    placeholder?: string;
    containerStyle?: any;
    onChange?: (text: string) => void;
}

export const InputField = ({ label, value, placeholder, onChange, setValue, containerStyle }: InputFieldProps) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleBlur = () => {
        if (value.trim() === '') {
            setIsFocused(false);
        }
    };

    return (
        <div className={clsx(styles.inputContainer, isFocused && styles.active, containerStyle)}>
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
                className={styles.input}
                onBlur={handleBlur}
            />
        </div>
    )
}