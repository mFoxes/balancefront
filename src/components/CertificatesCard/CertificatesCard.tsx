import React, {FC} from "react";

import styles from "./CertificatesCard.module.scss";

export interface ICertificatesCard {
    img: string,
    title: string
}

const CertificatesCard: FC<{card: ICertificatesCard}> = ({card, ...props}) => {
    return (
        <div className={styles.certificates__card}>
            <img src={card.img} alt={card.title}/>
            <p>{card.title}</p>
        </div>
    );
}

export default CertificatesCard;