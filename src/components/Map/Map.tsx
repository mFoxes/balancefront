import React, {Component, FC} from 'react';

import styles from "./Map.module.scss";

const Map: FC<{style: string}> = ({style, ...props}) => {
    return (
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5259.503518968699!2d44.807578827798466!3d48.767536717114716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41054c3ea743fa03%3A0x1a4f7df56e039b69!2sOkean%2C%20Salon%20Krasoty!5e0!3m2!1sen!2sru!4v1642704623933!5m2!1sen!2sru"
            className={style}
        />
    );
}

export default Map;