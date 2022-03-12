import React, { Component, FC, useState } from 'react';

import styles from './Card.module.scss'

import pole_video_btn from "../../img/Video_btn.png";
import { IInfoCard } from '../../models/interface/IInfoCard';

export interface ICard {
    img?: string,
    video?: string,
    texts?: string[],
    title: string,
}

const Card: FC<{ item: IInfoCard, type?: string }> = ({ item, type, ...props }) => {
    const [videoRef, setVideoRef] = useState<HTMLVideoElement>()
    const [btnRef, setBtnRef] = useState<HTMLButtonElement>()

    const Video_play = (e: any) => {
        e.preventDefault()
        if (videoRef && btnRef) {
            videoRef.controls = true;
            videoRef.play();
            btnRef.style.opacity = "0";
            btnRef.style.visibility = "hide";
            setTimeout(() => { btnRef.style.display = "none" }, 500)
        }
    }

    return (
        // <div className={`${item.video == null ? styles.card__img : styles.card__video}`}>
        <div className={`${type == "img" ? styles.card__img : styles.card__video}`}>
            {/* {item.video != null */}
            {type == "img"
                ? <div className={styles.card__content}>
                    <img src={`${item.photo?.urlPhoto}`} className={styles.content__img} />
                    <div className={styles.content__table}>
                        <ul>
                            {item.facts?.map((text, index) => (
                                <li key={index}>
                                    {text.factDesc}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                : <div className={styles.card__content}>
                    <video
                        className={styles.content__video}
                        ref={(video: HTMLVideoElement) => { setVideoRef(video); }}
                        muted
                    >
                        <source type="video/mp4" src={`${item.photo?.urlPhoto}`} />
                    </video>
                    <button
                        className={styles.video__button}
                        onClick={Video_play}
                        ref={(btn: HTMLButtonElement) => { setBtnRef(btn) }}
                    >
                        <img src={pole_video_btn} />
                    </button>
                </div>
            }
            <p className={styles.card__title}>
                {item.name}
            </p>
        </div>
    );
}

export default Card;