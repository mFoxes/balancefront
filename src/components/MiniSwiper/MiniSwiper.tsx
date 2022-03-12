import React, { FC } from 'react';

import { Swiper, SwiperSlide} from 'swiper/react'
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/bundle";
import "swiper/css/pagination";

import "./miniSwiper.scss";

import {ISwiperItem} from "../../models/interface/ISwiperItem";
import { IPhotoURL } from '../../models/interface/IPhotoURL';

const MiniSwiper: FC<{ items: IPhotoURL[]}> = ({ items, ...props }) => {
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
            className="MiniSwiper"
        >
            {items.map((item, index) => (
                <SwiperSlide>
                    <img
                        src={item.urlPhoto}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default MiniSwiper;