import React, { FC, useContext, useEffect, useState } from 'react';
import { BrowserRouter, Link, Route, Navigate, Routes } from 'react-router-dom';

import './styles/App.scss';
import './styles/reset.scss';
import btn_styles from './components/UI/button/MyButton.module.scss';

import PublicPage from "./pages/Public/PublicPage";
import MyButton from "./components/UI/button/MyButton";

import "./styles/fonts/Montserrat/stylesheet.css";
import "./styles/fonts/Monda/stylesheet.css"
import "./styles/fonts/Roboto/stylesheet.css";
import "./styles/fonts/Prata/stylesheet.css";

import { ReactComponent as SiteLogo } from "./img/logo.svg";
import { ReactComponent as SiteLogo_horizontal } from "./img/logo_horizontal.svg";
import { ReactComponent as SiteLogo_white } from "./img/logo_white.svg";

import VkImg from "./img/vk.png";
import InstagramImg from "./img/instagram.png";
import YoutubeImg from "./img/youtube.png";
import styles from "./pages/Public/PublicPage.module.scss";
import Map from "./components/Map/Map";
import ContactUs from "./components/ContactUs/ContactUs";
import GeneralSwiper from "./components/GeneralSwiper/GeneralSwiper";

import general_slider_f_page from "./img/General Swiper/1.png";
import SubscriptionPage from "./pages/Subscription/SubscriptionPage";
import GalleryPage from "./pages/Gallery/GalleryPage";
import { ISwiperItem } from "./models/interface/ISwiperItem";
import DireactionsPage from "./pages/Directions/DirectionsPage";
import ShedulePage from "./pages/Schedule/ShedulePage";
import CertificatesPage from './pages/Certificates/CertificatesPage';
import CoachesPage from './pages/Coaches/CoachesPage';
import ContactsPage from './pages/Contacts/ContactsPage';
import ErrorPage from "./pages/Error/ErrorPage";

import Modal from "./components/Modal/Modal";
import { observer } from "mobx-react-lite";
import { Context } from './Provider';
import { fetchSlider } from './http/dataAPI';
import { ISlider } from './models/interface/ISlider';

const App = () => {
    // const { generalSlider } = useContext(Context);
    const [generalSlider, setGeneralSlider] = useState<ISlider[]>([
        {
            name: "",
            photos: [
                { urlPhoto: general_slider_f_page },
                { urlPhoto: general_slider_f_page },
                { urlPhoto: general_slider_f_page }
            ]
        }
    ]);

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // ----- запросы на сервер ----- 
        // fetchSlider().then(data => {
        //     setGeneralSlider(data)
        // }).finally(() => {
        //     setLoading(false)
        // });
        setLoading(false)
    }, [])

    useEffect(() => {
        let iconMenu = document.querySelector(".icon-menu");
        if (iconMenu) {
            iconMenu.addEventListener("click", function (e) {
                document.documentElement.classList.toggle("menu-open");
                if (document.documentElement.classList.contains("menu-open")) {
                    document.body.style.overflow = "hidden";
                } else {
                    document.body.style.overflow = "auto";
                }
            });
        };
    }, [loading])

    if (loading) {
        return <div>Loading</div>
    }


    return (
        <div className="app">
            <BrowserRouter>
                <div className="header">
                    <div className="header__container">
                        <a href="http://localhost:3000" className="header__logo"><SiteLogo_horizontal /></a>

                        <div className="header__menu menu">
                            <button type="button" className="menu__icon icon-menu"><span></span></button>
                            <div className="menu__body">
                                <ul className="menu__list">
                                    <li className="menu__item"><Link to="/subscription">абонементы</Link></li>
                                    <li className="menu__item"><Link to="/gallery">галерея</Link></li>
                                    <li className="menu__item"><Link to="/directions">направления</Link></li>
                                    <li className="menu__item"><Link to="/schedule">расписание</Link></li>
                                    <li className="menu__item"><Link to="/certificates">сертификаты</Link></li>
                                    <li className="menu__item"><Link to="/coaches">тренеры</Link></li>
                                    <li className="menu__item"><Link to="/contacts">контакты</Link></li>
                                </ul>
                            </div>
                        </div>

                        {/* <div className="header__button">
                           <MyButton>регистрация</MyButton>
                           <MyButton className={btn_styles.login}>вход</MyButton>
                        </div> */}
                    </div>
                </div>

                <div className="app__body">
                    <GeneralSwiper items={generalSlider[0]} id="slider" />

                    <Routes>
                        <Route path="/" element={<PublicPage />} />
                        <Route path="/subscription" element={<SubscriptionPage />} />
                        <Route path="/gallery" element={<GalleryPage />} />
                        <Route path="/directions" element={<DireactionsPage />} />
                        <Route path="/schedule" element={<ShedulePage />} />
                        <Route path="/certificates" element={<CertificatesPage />} />
                        <Route path="/coaches" element={<CoachesPage />} />
                        <Route path="/contacts" element={<ContactsPage />} />
                        <Route path="*" element={<ErrorPage />} />
                    </Routes>
                </div>

                <div className="footer">
                    <div className="footer__container">
                        <div className="footer__title">
                            <SiteLogo_white />
                            <div className="footer__links">
                                <Link to="/subscription">абонементы</Link>
                                <Link to="/gallery">галерея</Link>
                                <Link to="/directions">направления</Link>
                                <Link to="/schedule">расписание</Link>
                                <Link to="/certificates">сертификаты</Link>
                                <Link to="/coaches">тренеры</Link>
                                <Link to="/contacts">контакты</Link>
                            </div>
                        </div>
                        <hr />
                        <div className="footer__brow">
                            <div className="footer__address">ул. Оломоуцкая, 29, г. Волжский</div>
                            <div className="footer__society">
                                <a href="#"><img src={VkImg} alt="link vk" /></a>
                                <a href="#"><img src={InstagramImg} alt="link instagramm" /></a>
                                <a href="#"><img src={YoutubeImg} alt="link youtube" /></a>
                            </div>
                            <a href="tel:+79610574977" className="footer__tel">+7 (961) 057-49-77</a>
                        </div>
                        <p className="footer__sign">© 2011–2021 «Balance»</p>
                    </div>
                </div>
            </BrowserRouter>

            <Modal />
        </div>
    );
}

export default App;