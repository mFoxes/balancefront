import React, { FC, useEffect, useContext } from "react";

import "./ErrorPage.scss";

import error_logo from "../../img/error_logo.png";
import { Context } from "../../Provider";

const ErrorPage: FC = () => {
    const { modalValue, swiperValue } = useContext(Context);
    const { modalActive, setModalActive } = modalValue;
    const { swiperClass, setSwiperClass } = swiperValue;

    useEffect(() => {
        setSwiperClass("Swiper__contacts");
        document.documentElement.classList.remove("menu-open");
        document.body.style.overflow = "auto";
    });

    return (
        <div className="page__body page-error">
            <div className="page-error__container">
                <div className="page-error__body">
                    <h1>404</h1>
                    <h2>Ошибка!<br/>к сожалению, запрашиваемая вами страница не найдена ...</h2>
                    <a href="http://localhost:3000">Вернуться на главную страницу?</a>
                </div>
                <img src={error_logo} alt="error logo" className="page-error__img" />
            </div>
        </div>
    );
}

export default ErrorPage;