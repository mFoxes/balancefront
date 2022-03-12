import React, { FC, useEffect, useContext } from "react";

import "./CoachesPage.scss";
import standard_styles from "../../styles/StandardPage.module.scss";
import CertificatesCard from "../../components/CertificatesCard/CertificatesCard";
import { Context } from "../../Provider";

const CoachesPage: FC = () => {
    const { modalValue, swiperValue } = useContext(Context);
    const { swiperClass, setSwiperClass } = swiperValue;
    useEffect(() => {
        setSwiperClass("Swiper__other");
        document.documentElement.classList.remove("menu-open");
        document.body.style.overflow = "auto";
    });

    return (
        <div className={`${standard_styles.page__body} page-coaches`}>
            <div className={standard_styles.page__slider}>
                <div className={standard_styles.slider__container}>
                    <div className={standard_styles.slider__body}>
                        <div className={standard_styles.slider__nav}>
                            <span>Главная</span>
                            <div className={standard_styles.slider__square} />
                            <span>Тренеры</span>
                        </div>
                        <div className={standard_styles.slider__title}>Тренерский состав</div>
                        <div className={standard_styles.slider__subtitle}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto voluptatem rem quia, consequatur autem aspernatur, laborum voluptatibus pariatur voluptate natus aut nulla ad distinctio cumque aliquam soluta. Accusantium, vitae qui.
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-coaches__bg">
                <div className="page-coaches__container">
                    <div className="page-coaches__content content-coaches">
                        <div className="content-coaches__title">
                            <div className="content-coaches__text">
                                Pole Dance
                            </div>
                            <div className="content-coaches__square" />
                        </div>
                        <div className="content-coaches__card">

                        </div>
                    </div>

                    <div className="page-coaches__content content-coaches">
                        <div className="content-coaches__title">
                            <div className="content-coaches__text">
                                Pole Dance
                            </div>
                            <div className="content-coaches__square" />
                        </div>
                        <div className="content-coaches__card">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CoachesPage;