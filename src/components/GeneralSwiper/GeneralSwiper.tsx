import React, { FC, useRef, useState, useContext } from 'react';
import { ISwiperItem } from "../../models/interface/ISwiperItem";

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/bundle";
import "swiper/css/pagination";

import "./generalSwiper.scss";
import { Context } from "../../Provider";
import { ISlider } from '../../models/interface/ISlider';

const GeneralSwiper: FC<{ items: ISlider, id: string }> = ({ items, id, ...props }) => {
    const { modalValue, swiperValue } = useContext(Context);
    const { swiperClass, setSwiperClass } = swiperValue;

    return (
        <Swiper
            loop={true}
            centeredSlides={true}
            pagination={{
                clickable: true,
            }}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className={swiperClass}
            id={id}
        >
            {items.photos.map((item, index) => (
                <SwiperSlide key={index}>
                    <img
                        src={item.urlPhoto}
                        alt={item.urlPhoto}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default GeneralSwiper;