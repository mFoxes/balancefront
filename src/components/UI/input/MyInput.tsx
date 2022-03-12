import React, {FC} from "react";

import styles from "./MyInput.module.scss";

interface IInput {
    value?: string,
    type: string,
    placeholder: string,
    onChange?: React.FormEventHandler<HTMLInputElement>,
    className?: string,
    style?: {}
}

const MyInput: FC<IInput> = ({...props}) => {
    return (
        <input {...props} className={`${styles.myInput} ${props.className}`}/>
    )
};

export default MyInput;