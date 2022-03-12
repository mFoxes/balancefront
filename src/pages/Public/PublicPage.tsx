import React, { FC, useContext, useEffect, useState } from 'react';

import './PublicPage.scss';
import main_page_styles from '../../styles/App.module.scss';
import standard_styles from "../../styles/StandardPage.module.scss";

import SiteLogo from "../../img/logo.svg";

import pole_f_video from "../../video/1.mp4";

import general_slider_f_page from "../../img/General Swiper/1.png";

import pole_dance_f_page from "../../img/Pole Dance/1.png";
import pole_dance_s_page from "../../img/Pole Dance/2.png";
import pole_dance_l_page from "../../img/Pole Dance/3.png";

import fitness_1_page from "../../img/Fitness/1.png";
import fitness_2_page from "../../img/Fitness/2.png";
import fitness_3_page from "../../img/Fitness/3.png";
import fitness_4_page from "../../img/Fitness/4.png";
import fitness_5_page from "../../img/Fitness/5.png";
import fitness_6_page from "../../img/Fitness/6.png";

import reviews_1_page from "../../img/Reviews/1.png";
import reviews_2_page from "../../img/Reviews/2.png";
import reviews_3_page from "../../img/Reviews/3.png";

import MyButton from "../../components/UI/button/MyButton";
import myBtn_styles from '../../components/UI/button/MyButton.module.scss';
import map_styles from "../../components/Map/Map.module.scss";

import CardReviews, { ICardReviews } from "../../components/CardReviews/CardReviews";
import Map from "../../components/Map/Map";
import Card, { ICard } from "../../components/Card/Card";
import ContactUs from "../../components/ContactUs/ContactUs";
import { Context } from "../../Provider";

import CenteredSwiper from '../../components/CenteredSwiper/CenteredSwiper';
import { observer } from 'mobx-react-lite';
import { fetchWorkoutByType } from '../../http/dataAPI';
import { IInfoCard } from '../../models/interface/IInfoCard';
import { IWorkout } from '../../models/interface/IWorkout';

const PublicPage: FC = ({ ...props }) => {
    const { modalValue, swiperValue } = useContext(Context);
    const { modalActive, setModalActive } = modalValue;
    const { swiperClass, setSwiperClass } = swiperValue;

    const [loading, setLoading] = useState(true)

    const [typeName, setTypeName] = useState<string[]>([
        "Pole Dance",
        "Fitness"
    ])

    const [workoutItems, setWorkoutItems] = useState<IWorkout[]>([
        {
            name: "Pole Dance",
            cards: [
                {
                    name: "Pole Dance",
                    type: "Pole Dance",
                    photo: { urlPhoto: pole_dance_f_page },
                    facts: [
                        { factDesc: "Это вид спорта, но это и искусство" },
                        { factDesc: "Танец на шесте развивает в человеке гибкость, пластику и координацию" },
                        { factDesc: "Во время танцев на пилоне происходит тренировка всех мышц тела и их вытяжка" }
                    ]
                },
                {
                    name: "Pole kids",
                    type: "Pole Dance",
                    photo: { urlPhoto: pole_dance_s_page },
                    facts: [
                        { factDesc: "Роскошная студия для тренировок с новейшим оборудованием" },
                        { factDesc: "Роскошная студия для тренировок с новейшим оборудованием" },
                        { factDesc: "Роскошная студия для тренировок с новейшим оборудованием" }
                    ]
                },
                {
                    name: "Pole extic",
                    type: "Pole Dance",
                    photo: { urlPhoto: pole_dance_l_page },
                    facts: [
                        { factDesc: "Роскошная студия для тренировок с новейшим оборудованием" },
                        { factDesc: "Роскошная студия для тренировок с новейшим оборудованием" },
                        { factDesc: "Роскошная студия для тренировок с новейшим оборудованием" }
                    ]
                }
            ]
        },
        {
            name: "Fitness",
            cards: [
                {
                    name: "Стретчинг",
                    type: "Fitness",
                    photo: { urlPhoto: fitness_1_page },
                    facts: [
                        { factDesc: "Комплекс упражнений, направленный на оздоровление организма, на растяжку мышц и укрепление суставов" },
                        { factDesc: "Это отличный способ оставаться в форме" },
                        { factDesc: "В первую очередь при выполнении упражнений стретчинга вы почувствуете, как ваш позвоночник распрямляется и становится более гибким" }
                    ]
                },
                {
                    name: "Функциональный тренинг",
                    type: "Fitness",
                    photo: { urlPhoto: fitness_2_page },
                    facts: [
                        { factDesc: "Роскошная студия для тренировок с новейшим оборудованием" },
                        { factDesc: "Роскошная студия для тренировок с новейшим оборудованием" },
                        { factDesc: "Роскошная студия для тренировок с новейшим оборудованием" }
                    ]
                },
                {
                    name: "Йога",
                    type: "Fitness",
                    photo: { urlPhoto: fitness_3_page },
                    facts: [
                        { factDesc: "Роскошная студия для тренировок с новейшим оборудованием" },
                        { factDesc: "Роскошная студия для тренировок с новейшим оборудованием" },
                        { factDesc: "Роскошная студия для тренировок с новейшим оборудованием" }
                    ]
                },
                {
                    name: "Стрип-пластика",
                    type: "Fitness",
                    photo: { urlPhoto: fitness_4_page },
                    facts: [
                        { factDesc: "Роскошная студия для тренировок с новейшим оборудованием" },
                        { factDesc: "Роскошная студия для тренировок с новейшим оборудованием" },
                        { factDesc: "Роскошная студия для тренировок с новейшим оборудованием" }
                    ]
                },
                {
                    name: "Умный фитнес - fitmix",
                    type: "Fitness",
                    photo: { urlPhoto: fitness_5_page },
                    facts: [
                        { factDesc: "Роскошная студия для тренировок с новейшим оборудованием" },
                        { factDesc: "Роскошная студия для тренировок с новейшим оборудованием" },
                        { factDesc: "Роскошная студия для тренировок с новейшим оборудованием" }
                    ]
                },
                {
                    name: "Здоровая спина",
                    type: "Fitness",
                    photo: { urlPhoto: fitness_6_page },
                    facts: [
                        { factDesc: "Роскошная студия для тренировок с новейшим оборудованием" },
                        { factDesc: "Роскошная студия для тренировок с новейшим оборудованием" },
                        { factDesc: "Роскошная студия для тренировок с новейшим оборудованием" }
                    ]
                }
            ]
        }
    ])
    const [video_items, setVideo_items] = useState<IInfoCard[]>(
        [
            {
                photo: { urlPhoto: pole_f_video },
                name: "Один день из жизни Fitness And Pole Dance Studio",
                type: "Pole Dance"
            },
            {
                photo: { urlPhoto: pole_f_video },
                name: "Обзорная экскурсия по фитнес-клубу",
                type: "Pole Dance"
            }
        ]
    )
    const [reviews_items, setReviews_items] = useState<ICardReviews[]>(
        [
            {
                img: reviews_1_page,
                name: "Марина",
                text: "Клуб очень просторный, светлый и чистый! Заниматься приятно как взрослым, так и детям, что не мало важно. Есть разные направления фитнеса, можно выбрать то, которое больше всего по душе.",
            },
            {
                img: reviews_2_page,
                name: "Лариса",
                text: "Особенно хочу отметить, что тренер меня не запугивал, а наоборот, подбадривал и рассказывал как правильно выполнять упражнения. Я занималась с Анной всего неделю, но уже была заметна разница: я стала более подтянутая, появились упругие мышцы, в общем, эффект мне понравился.",
            },
            {
                img: reviews_3_page,
                name: "Ольга",
                text: "Спасибо вам большое, была сегодня в магазине на Петровской. Удивил большой выбор размеров, обычно всегда с этим проблемы. Все что нужно нашли!",
            }
        ]
    )

    useEffect(() => {
        setSwiperClass("Swiper__public");
        document.documentElement.classList.remove("menu-open");
        document.body.style.overflow = "auto";
        // setWorkoutItems([]);
        typeName.map(name => {
            // setLoading(true)
            // ----- запросы на сервер ----- 
            // fetchWorkoutByType(name).then(data => {
            //     setWorkoutItems(oldData => [...oldData, data[0]])
            // }).finally(() => {
            // setLoading(false)
            // });
        })
        setLoading(false)
    }, []);


    if (loading) {
        return <div>Loading</div>
    }


    const slice_massive = (items: IInfoCard[], n: number) => {
        let subarray = []; //массив в который будет выведен результат.
        for (let i = 0; i < Math.ceil(items.length / n); i++) {
            subarray[i] = items.slice((i * n), (i * n) + n);
        }
        return subarray;
    }

    return (
        <div className="page__body page-public">
            <div className="page-public__slider slider-body">
                <div className="slider-body__container">
                    <div className="slider-body__block">
                        <div className="slider-body__title">
                            спортивный клуб <br /> BALANCE
                        </div>
                        <ul className="slider-body__text">
                            <li className="slider-body__item">Роскошная студия для тренировок с новейшим оборудованием</li>
                            <li className="slider-body__item">Качественный состав тренеров с опытом работы более ДЕСЯТИ лет</li>
                            <li className="slider-body__item">ДЕВЯТЬ направлений с авторской программой</li>
                        </ul>
                        <MyButton
                            style={{ zIndex: 20, pointerEvents: "auto" }}
                            className={myBtn_styles.white__btn}
                            onClick={() => {
                                setModalActive(true)
                            }}
                        >
                            Подробнее
                        </MyButton>
                    </div>
                </div>
            </div>

            <div className="page-public__panel">
                <a href="http://localhost:3000"><img src={SiteLogo} alt="logo" /></a>
                <MyButton
                    style={{ zIndex: 10 }}
                    className={myBtn_styles.left__btn}
                    onClick={() => setModalActive(true)}
                >
                    позвонить нам
                </MyButton>
            </div>

            <div className="page-public__bg">
                <div className="page-public__container">
                    <div className="page-public__about about">
                        <div className="about__left">
                            Fitness And<br />Pole Dance<br />Studio
                        </div>
                        <div className="about__right right-about">
                            <div className="right-about__title">
                                Лучшее решение для тех, кто хочет обрести стройную фигуру и красивую осанку!
                            </div>
                            <div className="right-about__text">
                                Уникальный комплекс упражнений, разработанный профессиональными тренерами, поможет Вам привести свое тело в форму, избавиться от лишнего веса и укрепить мышечный каркас Вашего тела. Мы создали лучшую студию фитнеса с любовью и заботой о вас и вашем здоровье!
                                В нашей просторной студии вы будете чувствовать себя  максимально комфортно. Стильный интерьер, ритмичная музыка и единомышленники настроят на продуктивную тренировку.
                            </div>
                            <div className="right-about__text">
                                Так же у нас работают профессионалы своего дела! Наши тренеры - грамотные, талантливые, настроенные на постоянное развитие и внимательные к вам специалисты. Они точно знают, как сделать тренировку для вас максимально полезной и эффективной.
                            </div>
                        </div>
                    </div>

                    {workoutItems.map((workout, index) => (
                        <div className="page-public__content content-public" key={index}>
                            <div className="content-public__title">
                                <div className="content-public__text">
                                    {workout.name}
                                </div>
                                <div className="content-public__square" />
                            </div>
                            {workout.cards && slice_massive(workout.cards, 3).map((cards, index) => (
                                <div className="content-public__card">
                                    <CenteredSwiper key={index} items={{ cards: { infCard: cards, type: "img" } }} />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            <div className="page-public__bbg">
                <div className="page-public__container">
                    <div className="page-public__video video-body">
                        <div className="video-body__title">
                            <div className="video-body__text">
                                Pole Dance
                            </div>
                            <div className="video-body__square" />
                        </div>
                        <div className="video-body__card">
                            <CenteredSwiper items={{ cards: { infCard: video_items, type: "video" } }} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-public__bg">
                <div className="page-public__container">
                    <div className="page-public__reviews reviews-body">
                        <div className="reviews-body__title">
                            Отзывы наших клиентов
                        </div>
                        <div className="reviews-body__card">
                            <CenteredSwiper items={{ cardRewiews: reviews_items }} />
                        </div>
                    </div>

                    <div className="page-public__contact contact-body">
                        <div className="contact-body__item">
                            <Map style={map_styles.Map} />
                        </div>
                        <div className="contact-body__item">
                            <ContactUs type="public">Первая тренировка бесплатно</ContactUs>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PublicPage;
