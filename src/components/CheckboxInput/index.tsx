import { useState } from "react";
import styles from "./CheckboxInput.module.css";

interface CheckboxInputProps {
    label: string;
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    name?: string;
}

export const CheckboxInput = ({
    label = "Checkbox",
    checked,
    onChange,
    name,
}: CheckboxInputProps) => {
    const [isChecked, setIsChecked] = useState(checked ?? false);

    const handleCheckboxChange = () => {
        const newChecked = !isChecked;
        setIsChecked(newChecked);
        onChange?.(newChecked); // Notify parent component
    };

    return (
        <div className={styles.container}>
            <label>{label}</label>
            <input
                type="checkbox"
                name={name}
                checked={isChecked}
                onChange={handleCheckboxChange}
                className={styles.checkbox}
            />
        </div>
    );
};
