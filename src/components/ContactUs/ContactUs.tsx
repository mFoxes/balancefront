import React, {FC} from "react";
import MyInput from "../UI/input/MyInput";

import styles from "./ContactUs.module.scss";
import btn_styles from "../UI/button/MyButton.module.scss";
import inp_styles from "../UI/input/MyInput.module.scss";

import MyButton from "../UI/button/MyButton";


const ContactUs: FC<{type: string}> = ({type, children, ...props}) => {
    return (
        <div className={(type === "public") ? styles.contactus : styles.modal__contactus}>
            <p className={styles.contactus__title}>{children}</p>
            <div className={styles.contactus__input}>
                <MyInput type={"text"} placeholder={"Анна Петрова*"} className={inp_styles.modal_input}/>
                <MyInput type={"email"} placeholder={"email*"} className={inp_styles.modal_input}/>
                <MyInput type={"tel"} placeholder={"+7 (987) 654 32-10"} className={inp_styles.modal_input}/>
            </div>
            <MyButton className={(type === "public") ? "" : btn_styles.modal__btn}>позвонить нам</MyButton>
        </div>
    );
}

export default ContactUs;