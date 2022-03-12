import React, { FC, useEffect, useContext } from 'react';
import "./SubscriptionPage.scss";
import MyButton from "../../components/UI/button/MyButton";
import myBtn_styles from "../../components/UI/button/MyButton.module.scss";

import standard_styles from "../../styles/StandardPage.module.scss";
import { Context } from "../../Provider";

const SubscriptionPage: FC = (...props) => {
    const { swiperValue } = useContext(Context);
    const { swiperClass, setSwiperClass } = swiperValue;

    useEffect(() => {
        setSwiperClass("Swiper__other");
        document.documentElement.classList.remove("menu-open");
        document.body.style.overflow = "auto";
    });

    return (
        <div className={`${standard_styles.page__body} page-sub`}>
            <div className={standard_styles.page__slider}>
                <div className={standard_styles.slider__container}>
                    <div className={standard_styles.slider__body}>
                        <div className={standard_styles.slider__nav}>
                            <span>Главная</span>
                            <div className={standard_styles.slider__square} />
                            <span>Абонементы</span>
                        </div>
                        <div className={standard_styles.slider__title}>Абонементная система</div>
                        <div className={standard_styles.slider__subtitle}>
                            Здесь вы можете смотреть расписание и стоимость абонементов. Абонементы не суммируются со скидками и акциями.
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-sub__bg">
                <div className="page-sub__container">
                    <div className="page-sub__price price-sub">

                    </div>
                </div>
            </div>
            <div className="page-sub__bg">
                <div className="page-sub__container">
                    <div className="page-sub__submit submit-sub">
                        <div className="submit-sub__text">
                            Хотите записаться на пробное занятие ?
                        </div>
                        <MyButton className={myBtn_styles.MyBtn}>
                            позвонить нам
                        </MyButton>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SubscriptionPage;