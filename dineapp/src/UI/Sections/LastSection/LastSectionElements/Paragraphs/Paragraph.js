import React from "react";
import classes from "./Paragraph.module.css";

const paragraph = (props) => {
    let header, text;

    if (props.buttonActive === 1) {
        header = "Family Gathering";
        text = "We love catering for entire families. So please bring everyone along\n" +
            "for a special meal with your loved ones. We'll provide a memorable experience for all."
    } else if (props.buttonActive === 2) {
        header = "Special Events";
        text = "Our restaurant is a perfect place to celebrate special occasions\n" +
            "with significant people. We guarantee unforgettable atmosphere and \n" +
            "exceptional memories."
    } else if (props.buttonActive === 3) {
        header = "Social Events";
        text = "Besides celebrating special or family moments, Our restaurant is a great place\n" +
            "where you can spend free time with close friends and have some great time with them."
    }

    return (
        <div className={classes.Text}>
            <span className={classes.Header}>{header}</span>
            <p>{text}</p>
        </div>
    );
};

export default paragraph;