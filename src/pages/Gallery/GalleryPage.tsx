import React, { Component, FC, useEffect, useState, useContext } from 'react';
import "./GalleryPage.scss";
import standard_styles from "../../styles/StandardPage.module.scss";
import MyButton from "../../components/UI/button/MyButton";
import MiniSwiper from "../../components/MiniSwiper/MiniSwiper";

import fslider_f_page from "../../img/Mini Swiper/First/1.png";

import sslider_f_page from "../../img/Mini Swiper/Second/1.png";

import tslider_f_page from "../../img/Mini Swiper/Third/1.png";

import { ISwiperItem } from "../../models/interface/ISwiperItem";
import miniSwiper_styles from "../../components/MiniSwiper/MiniSwiper.module.scss";

import { Context } from "../../Provider";
import { IPhotoURL } from '../../models/interface/IPhotoURL';
import { fetchAllWorkoutWithPhoto } from '../../http/dataAPI';
import { IWorkout } from '../../models/interface/IWorkout';
const GalleryPage: FC = () => {
    const { modalValue, swiperValue } = useContext(Context);
    const { swiperClass, setSwiperClass } = swiperValue;

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setSwiperClass("Swiper__other");
        document.documentElement.classList.remove("menu-open");
        document.body.style.overflow = "auto";

        // setLoading(true)
        // fetchAllWorkoutWithPhoto().then(data => {
        //     setWorkoutItems(data)
        // }).finally(() => {
        //     setLoading(false)
        // });
        setLoading(false)
    }, []);

    const [workoutItems, setWorkoutItems] = useState<IWorkout[]>([
        {
            name: "“Студия танца”",
            description: "Студия оборудованная для растяжки и тренировок по pole dance, акробатики и фитнеса. На сегодняшний день у нас в студии есть все необходимое для обучения (пилоны, маты, степ платформы, боди бары, кардио оборудование и т.д.)",
            photos: [
                { urlPhoto: fslider_f_page },
                { urlPhoto: fslider_f_page },
                { urlPhoto: fslider_f_page }
            ]
        },
        {
            name: "“Фитнес зал”",
            description: "Тренажерный зал площадью 500 кв.м. оборудован самыми современными тренажёрами премиум-класса. Высокотехнологичное оборудование позволяет проводить индивидуальные тренировки по различным направлениям, а также групповые занятия.На территории фитнес-центра предусмотрены зоны отдыха для посетителей.",
            photos: [
                { urlPhoto: sslider_f_page },
                { urlPhoto: sslider_f_page },
                { urlPhoto: sslider_f_page }
            ]
        },
        {
            name: "Фестиваль-конкурс по PD Artistic \"На высоте\"",
            description: "Фестиваль на конкурсной основе по Art среди любителей и профессионалов «На высоте» проводится с целью популяризации и развития воздушной акробатики как одного из наиболее эффективных способов оздоровления, повышения мастерства участников, развития и пропаганды здорового образа жизни. Мероприятие проводится как для любителей (не занимавшихся спортом, гимнастикой, балетом и другими видами спорта и танца повышающими растяжку тела и мышечный тонус), так и для профессионалов.",
            photos: [
                { urlPhoto: tslider_f_page },
                { urlPhoto: tslider_f_page },
                { urlPhoto: tslider_f_page }
            ]
        },
    ])

    if (loading) {
        return <div>Loading</div>
    }

    return (
        <div className={`${standard_styles.page__body} page-gallery`}>
            <div className={standard_styles.page__slider}>
                <div className={standard_styles.slider__container}>
                    <div className={standard_styles.slider__body}>
                        <div className={standard_styles.slider__nav}>
                            <span>Главная</span>
                            <div className={standard_styles.slider__square} />
                            <span>Галерея</span>
                        </div>
                        <div className={standard_styles.slider__title}>спортивный клуб<br />balance</div>
                        <div className={standard_styles.slider__subtitle}>Здесь вы можете подробнее узнать о нашем спортивном клубе и об интересных событиях! Спортивный клуб «BALANCE» — место, где люди могут заняться любимым делом и укрепить свое здоровье.</div>
                    </div>
                </div>
            </div>
            {/* Фильтрация происходит ввиду особенностей построения таблиц внутри API */}
            {workoutItems.filter(function (item) {
                return item.photos && item
            }).map(workout => (
                <div className="page-gallery__bg" >
                    {console.log(workout)}
                    <div className="page-gallery__container">
                        <div className="page-gallery__content content-gallery">
                            <div className="content-gallery__left left-content">
                                <div className="left-content__title">
                                    {workout.name}
                                </div>
                                <div className="left-content__text">
                                    {workout.description}
                                </div>
                            </div>
                            {workout.photos && <MiniSwiper items={workout.photos} />}
                        </div>
                    </div>
                </div>
            ))}
        </div >
    );
}

export default GalleryPage;