import React, {Component, FC} from 'react';

import styles from "./CardReviews.module.scss";

export interface ICardReviews {
    img: string,
    name: string,
    text: string
}

const CardReviews: FC<{item: ICardReviews}> = ({item, ...props}) => {
    return (
        <div className={styles.cardReview}>
            <img className={styles.cardReview__img} src={item.img}/>
            <div className={styles.cardReview__block}>
                <div className={styles.block__text}>
                    <p className={styles.block__name}>{item.name}</p>
                    <p className={styles.block__rev}>{item.text}</p>
                </div>
            </div>
        </div>
    );
}

export default CardReviews;