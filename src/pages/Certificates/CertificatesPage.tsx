import React, { FC, useEffect, useState, useContext } from "react";
import { Context } from "../../Provider";

import "./CertificatesPage.scss";
import standard_styles from "../../styles/StandardPage.module.scss";
import CertificatesCard, { ICertificatesCard } from "../../components/CertificatesCard/CertificatesCard";
import CenteredSwiper from "../../components/CenteredSwiper/CenteredSwiper";

import san_f_p from "../../img/Sanitary Card/1.png";
import san_s_p from "../../img/Sanitary Card/2.png";
import san_t_p from "../../img/Sanitary Card/3.png";

const CertificatesPage: FC = () => {
    const { modalValue, swiperValue } = useContext(Context);
    const { modalActive, setModalActive } = modalValue;
    const { swiperClass, setSwiperClass } = swiperValue;
    useEffect(() => {
        setSwiperClass("Swiper__other");
        document.documentElement.classList.remove("menu-open");
        document.body.style.overflow = "auto";
    });

    const [sanitary_page, setSanitary_page] = useState<ICertificatesCard[]>(
        [
            {
                img: san_f_p,
                title: "Разрешение на ведение деятельности 1"
            },
            {
                img: san_s_p,
                title: "Разрешение на ведение деятельности 2"
            },
            {
                img: san_t_p,
                title: "Разрешение на ведение деятельности 3"
            }
        ]
    )

    return (
        <div className={`${standard_styles.page__body} page-certificates`}>
            <div className={standard_styles.page__slider}>
                <div className={standard_styles.slider__container}>
                    <div className={standard_styles.slider__body}>
                        <div className={standard_styles.slider__nav}>
                            <span>Главная</span>
                            <div className={standard_styles.slider__square} />
                            <span>Сертификаты</span>
                        </div>
                        <div className={standard_styles.slider__title}>сертификаты</div>
                        <div className={standard_styles.slider__subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam at pretium blandit curabitur tortor. Dolor, at maecenas vestibulum fringilla egestas nec, eget scelerisque ut. Neque aliquam vivamus.</div>
                    </div>
                </div>
            </div>

            <div className="page-certificates__bg">
                <div className="page-certificates__container">
                    <div className="page-certificates__content page-certificates">
                        <div className="page-certificates__title">
                            <div className="page-certificates__text">
                                Санитарные сертификаты
                            </div>
                            <div className="page-certificates__square" />
                        </div>
                        <div className="page-certificates__card">
                            <CenteredSwiper items={{ sertificatesCard: sanitary_page }} />
                        </div>
                    </div>

                    <div className="page-certificates__content page-certificates">
                        <div className="page-certificates__title">
                            <div className="page-certificates__text">
                                Сертификаты тренеров
                            </div>
                            <div className="page-certificates__square" />
                        </div>
                        <div className="page-certificates__card">
                            <CenteredSwiper items={{ sertificatesCard: sanitary_page }} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default CertificatesPage;