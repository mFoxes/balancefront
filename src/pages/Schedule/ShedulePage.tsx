import React, { FC, useEffect, useContext } from "react";
import styles from "./ShedulePage.module.scss";
import standard_styles from "../../styles/StandardPage.module.scss";
import MiniSwiper from "../../components/MiniSwiper/MiniSwiper";
import MyButton from "../../components/UI/button/MyButton";
import { Context } from "../../Provider";

const ShedulePage: FC = () => {
    const { modalValue, swiperValue } = useContext(Context);
    const { swiperClass, setSwiperClass } = swiperValue;

    useEffect(() => {
        setSwiperClass("Swiper__other");
        document.documentElement.classList.remove("menu-open");
        document.body.style.overflow = "auto";
    });

    const schedule_table = [
        {
            times: "09:00 - 11:00",
            schedule: [
                { time: "09:00 - 11:00", age: "от 15 лет", name: "Иван Еременко" },
                { time: "09:00 - 11:00", age: "от 15 лет", name: "Иван Еременко" },
                { time: "09:00 - 11:00", age: "от 15 лет", name: "Иван Еременко" },
                { time: "09:00 - 11:00", age: "от 15 лет", name: "Иван Еременко" },
                { time: "09:00 - 11:00", age: "от 15 лет", name: "Иван Еременко" },
                { time: "09:00 - 11:00", age: "от 15 лет", name: "Иван Еременко" },
                { time: "09:00 - 11:00", age: "от 15 лет", name: "Иван Еременко" }
            ]
        },
        {
            times: "11:00 - 13:00",
            schedule: [
                { time: "11:00 - 13:00", age: "от 15 лет", name: "Иван Еременко" },
                { time: "11:00 - 13:00", age: "от 15 лет", name: "Иван Еременко" },
                { time: "11:00 - 13:00", age: "от 15 лет", name: "Иван Еременко" },
                { time: "11:00 - 13:00", age: "от 15 лет", name: "Иван Еременко" },
                { time: "11:00 - 13:00", age: "от 15 лет", name: "Иван Еременко" },
                { time: "11:00 - 13:00", age: "от 15 лет", name: "Иван Еременко" },
                { time: "11:00 - 13:00", age: "от 15 лет", name: "Иван Еременко" },
            ]
        },
        {
            times: "13:00 - 14:00",
            schedule: [
                { time: "13:00 - 14:00", age: "от 15 лет", name: "Иван Еременко" },
                { time: "13:00 - 14:00", age: "от 15 лет", name: "Иван Еременко" },
                { time: "13:00 - 14:00", age: "от 15 лет", name: "Иван Еременко" },
                { time: "13:00 - 14:00", age: "от 15 лет", name: "Иван Еременко" },
                { time: "13:00 - 14:00", age: "от 15 лет", name: "Иван Еременко" },
                { time: "13:00 - 14:00", age: "от 15 лет", name: "Иван Еременко" },
                { time: "13:00 - 14:00", age: "от 15 лет", name: "Иван Еременко" },
            ]
        },
        {
            times: "14:00 - 15:00",
            schedule: [
                { time: "14:00 - 15:00", age: "от 15 лет", name: "Иван Еременко" },
                { time: "14:00 - 15:00", age: "от 15 лет", name: "Иван Еременко" },
                { time: "14:00 - 15:00", age: "от 15 лет", name: "Иван Еременко" },
                { time: "14:00 - 15:00", age: "от 15 лет", name: "Иван Еременко" },
                { time: "14:00 - 15:00", age: "от 15 лет", name: "Иван Еременко" },
                { time: "14:00 - 15:00", age: "от 15 лет", name: "Иван Еременко" },
                { time: "14:00 - 15:00", age: "от 15 лет", name: "Иван Еременко" },
            ]
        },
        {
            times: "15:00 - 16:00",
            schedule: [
                { time: "15:00 - 16:00", age: "от 15 лет", name: "Иван Еременко" },
                { time: "15:00 - 16:00", age: "от 15 лет", name: "Иван Еременко" },
                { time: "15:00 - 16:00", age: "от 15 лет", name: "Иван Еременко" },
                { time: "15:00 - 16:00", age: "от 15 лет", name: "Иван Еременко" },
                { time: "15:00 - 16:00", age: "от 15 лет", name: "Иван Еременко" },
                { time: "15:00 - 16:00", age: "от 15 лет", name: "Иван Еременко" },
                { time: "15:00 - 16:00", age: "от 15 лет", name: "Иван Еременко" },
            ]
        },
    ]

    return (
        <div className={`${standard_styles.page__body} page-schedule`}>
            <div className={standard_styles.page__slider}>
                <div className={standard_styles.slider__container}>
                    <div className={standard_styles.slider__body}>
                        <div className={standard_styles.slider__nav}>
                            <span>Главная</span>
                            <div className={standard_styles.slider__square} />
                            <span>Расписание</span>
                        </div>
                        <div className={standard_styles.slider__title}>Расписание тренеровок</div>
                    </div>
                </div>
            </div>
            <div className={styles.background__body}>
                <div className={styles.body__content}>
                    <div className={styles.content__sbtn}>
                        <MyButton>test</MyButton>
                        <MyButton>test</MyButton>
                        <MyButton>test</MyButton>
                        <MyButton>test</MyButton>
                    </div>

                    <div className={styles.content__schedule}>
                        <table className={styles.schedule__table}>
                            <tr>
                                <th />
                                <th>понедельник</th>
                                <th>вторник</th>
                                <th>среда</th>
                                <th>четверг</th>
                                <th>пятница</th>
                                <th>суббота</th>
                                <th>воскресенье</th>
                            </tr>
                            {schedule_table.map((sch) => (
                                <tr>
                                    <td>{sch.times}</td>
                                    {sch.schedule.map((item) => (
                                        <td className={styles.general__td}>
                                            <p className={styles.text__lower}>{item.time}</p>
                                            <p className={styles.text__lower}>{item.age}</p>
                                            <p className={styles.text__name}>{item.name}</p>
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShedulePage;