import React, { useEffect, Component, FC, EffectCallback, useState, ReactElement, FunctionComponentElement, FunctionComponent, ReactComponentElement } from 'react'

import CardReviews from '../CardReviews/CardReviews';
import { ICardReviews } from '../CardReviews/CardReviews';
import Card, { ICard } from '../Card/Card';
import CertificatesCard, { ICertificatesCard } from '../CertificatesCard/CertificatesCard';

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination, Scrollbar, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/bundle";
import "swiper/css/pagination";

import './centeredSwiper.scss';
import { IInfoCard } from '../../models/interface/IInfoCard';

interface ICenteredSwiper {
    cardRewiews?: ICardReviews[],
    cards?: {
        infCard: IInfoCard[],
        type: string
    },
    sertificatesCard?: ICertificatesCard[],
}

const CenteredSwiper: FC<{ items: ICenteredSwiper }> = ({ items, ...props }) => {
    const size = useWindowSize();

    return (
        <>
            {size.width > 1496
                ? <>
                    {items.cardRewiews?.map((item, index) => (
                        <CardReviews key={index} item={item} />
                    ))}
                    {items.cards?.infCard.map((item, index) => (
                        <Card key={index} item={item} type={items.cards?.type} />
                    ))}
                    {items.sertificatesCard?.map((item, index) => (
                        <CertificatesCard key={index} card={item} />
                    ))}
                </>
                : <Swiper
                    slidesPerView={"auto"}

                    spaceBetween={24}
                    centeredSlides={true}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    className="CenteredSwiper"
                    modules={[Pagination, Navigation]}
                >
                    {items.cardRewiews?.map((item, index) => (
                        <SwiperSlide key={index}>
                            <CardReviews item={item} />
                        </SwiperSlide>
                    ))}
                    {items.cards?.infCard.map((item, index) => (
                        <SwiperSlide key={index}>
                            <Card item={item} type={items.cards?.type} />
                        </SwiperSlide>
                    ))}
                    {items.sertificatesCard?.map((item, index) => (
                        <SwiperSlide key={index}>
                            <CertificatesCard card={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            }
        </>
    )
}

export default CenteredSwiper;

function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState<{ width: number, height: number }>({
        width: 1920,
        height: 920,
    });
    useEffect(() => {
        // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            setWindowSize({
                width: window.screen.width,
                height: window.screen.height,
            });
        }
        // Add event listener
        window.addEventListener("resize", handleResize);
        // Call handler right away so state gets updated with initial window size
        handleResize();
        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
}