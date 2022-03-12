import React, { FC, useEffect, useContext } from "react";

import "./ContactsPage.scss";
import standard_styles from "../../styles/StandardPage.module.scss";
import map_styles from "../../components/Map/Map.module.scss";

import VkImg_black from "../../img/vk_black.png";
import InstagramImg_black from "../../img/instagram_black.png";
import YoutubeImg_black from "../../img/youtube_black.png";
import Map from "../../components/Map/Map";
import { Context } from "../../Provider";

const ContactsPage: FC = () => {
    const { modalValue, swiperValue } = useContext(Context);
    const { swiperClass, setSwiperClass } = swiperValue;
    useEffect(() => {
        setSwiperClass("Swiper__contacts");
        document.documentElement.classList.remove("menu-open");
        document.body.style.overflow = "auto";
    });

    return (
        <div className="page__body page-contacts">
            <div className="page-contacts__container">
                <div className="page-contacts__body">
                    <div className="page-contacts__nav">
                        <span>Главная</span>
                        <div className="page-contacts__square" />
                        <span>Контакты</span>
                    </div>
                    <div className="page-contacts__content">
                        <div className="page-contacts__title">
                            Контакты
                        </div>
                        <div className="page-contacts__address">
                            <p>Адрес</p>
                            <p>ул. Оломоуцкая, 29, г. Волжский</p>
                        </div>
                        <div className="page-contacts__connect">
                            <p>Абонементный отдел</p>
                            <a href="tel:+79610574977">+7 (961) 057-49-77</a>
                            <p>mariah87@yandex.ru</p>
                        </div>
                        <div className="page-contacts__links">
                            <a href="#"><img src={VkImg_black} alt="link vk" /></a>
                            <a href="#"><img src={InstagramImg_black} alt="link instagramm" /></a>
                            <a href="#"><img src={YoutubeImg_black} alt="link youtube" /></a>
                        </div>
                    </div>
                </div>

                <Map style={map_styles.Map__contacts} />
            </div>
        </div>
    );
}

export default ContactsPage;