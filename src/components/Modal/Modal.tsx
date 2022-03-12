import React, {FC, useContext, useEffect} from "react";

import styles from "./Modal.module.scss";
import ContactUs from "../ContactUs/ContactUs";

import close_btn from "../../img/close_btn.png";
import IModalProps, {Context} from "../../Provider";

const Modal: FC = () => {
    const { modalValue, swiperValue } = useContext(Context);
    const { modalActive, setModalActive } = modalValue;

    return (
        <div className={`${styles.modal} ${modalActive ? styles.modal__active : ""} `} onClick={() => setModalActive(false)}>
            <div className={`${styles.modal__body} ${modalActive ? styles.body__active : ""} `} onClick={e => e.stopPropagation()}>
                <img src={close_btn} onClick={() => setModalActive(false)} alt="close btn"/>
                <ContactUs type="modal">Закажите абонемент, заполнив форму. Мы свяжемся с вами, чтобы обсудить вопросы покупки.</ContactUs>
            </div>
        </div>
    );
}

export default Modal;