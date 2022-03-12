import React, { FC, useEffect, useState, useContext } from "react";

import standard_styles from "../../styles/StandardPage.module.scss";
import "./DirectionsPage.scss";

import miniSwiper_styles from "../../components/MiniSwiper/MiniSwiper.module.scss";

import MiniSwiper from "../../components/MiniSwiper/MiniSwiper";
import { ISwiperItem } from "../../models/interface/ISwiperItem";

import { Context } from "../../Provider";
import fslider_f_page from "../../img/Mini Swiper/First/1.png";
import { IPhotoURL } from "../../models/interface/IPhotoURL";

const DireactionsPage: FC = () => {
    const { modalValue, swiperValue } = useContext(Context);
    const { swiperClass, setSwiperClass } = swiperValue;
    useEffect(() => {
        setSwiperClass("Swiper__other");
        document.documentElement.classList.remove("menu-open");
        document.body.style.overflow = "auto";
    });

    const [fslider_items, setFslider_items] = useState<IPhotoURL[]>(
        [
            {
                urlPhoto: fslider_f_page
            },
            {
                urlPhoto: fslider_f_page
            },
            {
                urlPhoto: fslider_f_page
            }
        ]
    )

    return (
        <div className={`${standard_styles.page__body} page-direct`}>
            <div className={standard_styles.page__slider}>
                <div className={standard_styles.slider__container}>
                    <div className={standard_styles.slider__body}>
                        <div className={standard_styles.slider__nav}>
                            <span>Главная</span>
                            <div className={standard_styles.slider__square} />
                            <span>Направления</span>
                        </div>
                        <div className={standard_styles.slider__title}>направление тренеровок</div>
                        <div className={standard_styles.slider__subtitle}>
                            Здесь вы можете подробнее узнать о наших направлениях и услугах!<br />
                            Если вы давно мечтали начать заниматься танцами или хотите улучшить свою физическую форму, то у нас найдутся варианты на любой вкус.
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-direct__bg">
                <div className="page-direct__container">
                    <div className="page-direct__content content-direct">
                        <div className="content-direct__left left-direct">
                            <div className="left-direct__title">
                                Pole Dance
                            </div>
                            <div className="left-direct__text">
                                Если вы уже танцуете, или хотите начать, тогда это направление для вас, потому что здесь вы найдете много нового и интересного.
                                Занимаясь Pole Dance, вы сможете развить свое тело, стать гибче и стройнее. В первую очередь, это действительно довольно сложный и выматывающий танец, и не все смогут выдержать его. А еще этот танец очень нравится мужчинам, ведь здесь они чувствуют себя настоящими мачо. Вы можете заниматься самостоятельно в любое удобное время, но вам нужен тренер, который сможет вам помочь. Pole Dance подходит как для девушек, так и для мужчин.
                            </div>
                        </div>
                        <MiniSwiper items={fslider_items} />
                    </div>
                </div>
            </div>
            <div className="page-direct__bg">
                <div className="page-direct__container">
                    <div className="page-direct__content content-direct">
                        <div className="content-direct__left left-direct">
                            <div className="left-direct__title">
                                fitness
                            </div>
                            <div className="left-direct__text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas tempor ridiculus enim pellentesque scelerisque. Gravida ac a, mattis tellus massa, nec nisi et. Semper quis arcu cras ultrices cursus. Rhoncus posuere morbi orci, faucibus lorem neque ac maecenas. Ornare sagittis vitae pharetra velit aliquet interdum rhoncus.
                            </div>
                        </div>
                        <MiniSwiper items={fslider_items} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DireactionsPage;